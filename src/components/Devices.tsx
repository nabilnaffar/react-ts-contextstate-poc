import * as React from 'react';
import { InjectedStore } from '../state-manager/store';
import { withStore } from '../state-manager/withStore';
import { stateManager } from '../state-manager/state-manager';
import { InnerAppState } from '../models/inner-state.model';

export interface DevicesProps {

}

export type DevicesWithStore = InjectedStore<InnerAppState> & DevicesProps;

export class Devices extends React.Component<DevicesWithStore> {
    constructor(props: DevicesWithStore) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        // existing solution
        stateManager.set('appShell:totalPrice', {value: Math.random()});
    }

    render() {
        return (
            <div>
                <div>Devices Value is: {JSON.stringify(this.props.store.appShell.totalPrice.value)}</div>
                <button type="button" onClick={this.onClick}>CHANGE</button>
            </div>
        )
    }
}

const DevicesWithStore = withStore(Devices);
export default DevicesWithStore;