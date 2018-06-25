interface ReduxSendData {
  type: string;
  [key: string]: object | string | number;
}
interface ReduxSubscribeData {
  type: string;
  payload: { type: string };
  state: string;
}

type ReduxSend = (data: ReduxSendData, componentState: object, something: object, instanceID: number) => void;
type ReduxInit = (data: object) => void;
interface ReduxConnectInstance {
  subscribe: (cb: (data: ReduxSubscribeData) => void) => void;
  send: ReduxSend;
  init: ReduxInit;
}

declare global {
  type ReduxConnect = (options: { name: string; features: { jump: boolean }; }) => ReduxConnectInstance;
  interface Window { devToolsExtension: { connect: ReduxConnect } }
}

export type ReduxDevtoolsInstance = (action: string, ...arg: object[]) => void;

let id = 0

export default ({ initialState }: { initialState: object }, self: React.Component): ReduxDevtoolsInstance => {
  const reduxDevTools = window.devToolsExtension;

  const instanceID = id;
  id += 1

  const name = `state-manager - ${instanceID}`
  const features = {
    jump: true,
  }

  const devTools = reduxDevTools.connect({ name, features })

  devTools.subscribe((data) => {
    switch (data.type) {
      case 'START':
        devTools.init(initialState)
        break
      case 'RESET':
        self.setState(initialState)
        break
      case 'DISPATCH':
        switch (data.payload.type) {
          case 'JUMP_TO_STATE':
          case 'JUMP_TO_ACTION': {
            self.setState(JSON.parse(data.state))
            break
          }
          default:
            break
        }
        break
      default:
        break
    }
  })

  return (action: string, ...arg: object[]) => {
    devTools.send({ type: action, ...arg }, self.state, {}, instanceID)
  }
}