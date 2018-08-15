import * as React from 'react';
import { stateManager } from './state-manager';
import devtools, { ReduxDevtoolsInstance } from './devtools';

export const {Provider, Consumer} = React.createContext({});

export type DeepReadonly<T> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
}

// export interface InjectedStore<T = object> {
//     store: DeepReadonly<Dictionary<T>>
// }

export type Primitive = string | number | boolean;

export type Dictionary<T = object> = T & {
    [K in keyof T]: Dictionary<T[K]> | Primitive;
}

export interface StoreProviderProps {
    initialState: Dictionary,
}

export class StoreProvider extends React.Component<StoreProviderProps, Dictionary>{
    state = {
        ...this.props.initialState
    }

    private devTools: ReduxDevtoolsInstance;

    constructor(props: StoreProviderProps) {
        super(props);
        stateManager.registerSet(this.onStateChange.bind(this));
        this.devTools = devtools(props, this);
    }

    onStateChange(namespace: string, key: string, value: object) {
        this.devTools(`${namespace}:${key}`, value);
        this.setState((prevState) => ({
            [namespace]: {
                ...prevState[namespace],
                [key]: value
            }
        }));
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}