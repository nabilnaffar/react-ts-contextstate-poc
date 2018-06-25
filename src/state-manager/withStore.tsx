import * as React from 'react';
import { Consumer, InjectedStore } from '../state-manager/store';



export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Diff<T, K> = Omit<T, keyof K>;


export const withStore = <T extends InjectedStore>(WrappedComponent: React.ComponentType<T>) => {
    return class ComponentWithStore extends React.Component<Diff<T, InjectedStore>> {
        static displayName = `Connect(${WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Unknown'})`
        render() {
            return (<Consumer>
                {injected => <WrappedComponent {...this.props} store={injected} />}
            </Consumer>)
        }
    }
}