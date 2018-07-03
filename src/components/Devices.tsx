import * as React from 'react';
import { InjectedStore } from '../state-manager/store';
import { withStore } from '../state-manager/withStore';
import { stateManager } from '../state-manager/state-manager';
import { InnerAppState } from '../models/inner-state.model';

export interface DevicesProps {}

export type DevicesWithStore = InjectedStore<InnerAppState> & DevicesProps;

export class Devices extends React.Component<DevicesWithStore> {
    constructor(props: DevicesWithStore) {
        super(props);
        this.appShellChange = this.appShellChange.bind(this);
        this.wirelessChange = this.wirelessChange.bind(this);
    }

    appShellChange() {
        // existing solution
        stateManager.set('appShell:totalPrice', {value: this.props.store.appShell.totalPrice.value + 1});
    }
    wirelessChange() {
        // existing solution
        stateManager.set('wireless:plans', {total: this.props.store.wireless.plans.total + 1});
    }

    render() {
        console.log('rendering Devices component...');
        return (
            <div style={{border: '1px solid #9082ff', height: '200px'}}>
                <div>Devices component</div>
                <div>appshell totalPrice: {this.props.store.appShell.totalPrice.value}</div>
                <button type="button" onClick={this.appShellChange}>
                    change appshell {this.props.store.appShell.totalPrice.value}
                </button>
                <button type="button" onClick={this.wirelessChange}>
                    change wireless {this.props.store.wireless.plans.total}
                </button>
            </div>
        )
    }
}

const DevicesWithStore = withStore(Devices);
export default DevicesWithStore;