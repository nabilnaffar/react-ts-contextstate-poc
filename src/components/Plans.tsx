import * as React from 'react';
// import { InjectedStore } from '../state-manager/store';
import { withStore } from '../state-manager/withStore';
import { InnerAppState } from '../models/inner-state.model';

export interface PlansProps {}
export type PlansWithStore = InjectedProps & PlansProps;

export class Plans extends React.Component<PlansWithStore> {
    render() {
        console.log('rendering Plans component...');
        return (
            <div style={{border: '1px solid #ff8282', height: '200px'}}>
                <div>Plans component</div>
                <div>appshell totalPrice: {this.props.shellTotalPrice}</div>
            </div>
        )
    }
}

interface InjectedProps {
    shellTotalPrice: number;
}
const mapStateToProps = (state: InnerAppState) => ({
    shellTotalPrice: state.appShell.totalPrice.value
});
const PlansWithStore = withStore<InnerAppState, PlansProps, InjectedProps>(mapStateToProps)(Plans);
export default PlansWithStore;