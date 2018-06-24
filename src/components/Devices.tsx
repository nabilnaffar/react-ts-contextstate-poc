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
        this.appShellChange = this.appShellChange.bind(this);
        this.wirelessChange = this.wirelessChange.bind(this);
    }

    shouldComponentUpdate(nextProps: DevicesWithStore) {
        // don't render if it's not affecting this tree ?
        return nextProps.store.appShell.totalPrice.value !== this.props.store.appShell.totalPrice.value
    }

    appShellChange() {
        // existing solution
        stateManager.set('appShell:totalPrice', {value: Math.random()});
    }
    wirelessChange() {
        // existing solution
        stateManager.set('wireless:plan', {total: Math.random()});
    }

    render() {
        console.log('rendering Devices component...');
        return (
            <div>
                <div>Devices Value is: {JSON.stringify(this.props.store.appShell.totalPrice.value)}</div>
                <button type="button" onClick={this.appShellChange}>change appshell</button>
                <button type="button" onClick={this.wirelessChange}>change wireless</button>
            </div>
        )
    }
}

const DevicesWithStore = withStore(Devices);
export default DevicesWithStore;