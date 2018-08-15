import * as React from 'react';
// import { InjectedStore } from '../state-manager/store';
import { withStore } from '../state-manager/withStore';
import { stateManager } from '../state-manager/state-manager';
import { InnerAppState } from '../models/inner-state.model';

export interface DevicesProps {}

export type DevicesWithStore = InjectedProps & DevicesProps;

export class Devices extends React.Component<DevicesWithStore> {
    constructor(props: DevicesWithStore) {
        super(props);
        this.appShellChange = this.appShellChange.bind(this);
        this.wirelessChange = this.wirelessChange.bind(this);
    }

    appShellChange() {
        // existing solution
        stateManager.set('appShell:totalPrice', {value: this.props.totalPrice + 1});
    }
    wirelessChange() {
        // existing solution
        stateManager.set('wireless:plans', {total: this.props.totalPlans + 1});
    }

    render() {
        console.log('rendering Devices component...');
        return (
            <div style={{border: '1px solid #9082ff', height: '200px'}}>
                <div>Devices component</div>
                <div>appshell totalPrice: {this.props.totalPrice}</div>
                <button type="button" onClick={this.appShellChange}>
                    change appshell {this.props.totalPrice}
                </button>
                <button type="button" onClick={this.wirelessChange}>
                    change wireless {this.props.totalPlans}
                </button>
            </div>
        )
    }
}


interface InjectedProps {
    totalPlans: number;
    totalPrice: number;
}  
const mapStateToProps = (state: InnerAppState) => ({
    totalPlans: state.wireless.plans.total,
    totalPrice: state.appShell.totalPrice.value,
})
const DevicesWithStore = withStore<InnerAppState, DevicesProps, InjectedProps>(mapStateToProps)(Devices);
export default DevicesWithStore;