import * as React from 'react';
import { Consumer, InjectedStore } from '../state-manager/store';



export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Diff<T, K> = Omit<T, keyof K>;


export const withStore = <T extends InjectedStore>(WrappedComponnet: React.ComponentType<T>) => {
    return class ComponentWithStore extends React.Component<Diff<T, InjectedStore>> {
        render() {
            return (<Consumer>
                {injected => <WrappedComponnet {...this.props} store={injected} />}
            </Consumer>)
        }
    }
}