import * as React from 'react';
import { InjectedStore } from '../state-manager/store';
import { withStore } from '../state-manager/withStore';
import { InnerAppState } from '../models/inner-state.model';

export interface PlansProps {}
export type PlansWithStore = InjectedStore<InnerAppState> & PlansProps;

export class Plans extends React.Component<PlansWithStore> {
    render() {
        return (
            <div>Plans total price: {JSON.stringify(this.props.store.appShell.totalPrice.value)}</div>
        )
    }
}

const PlansWithStore = withStore(Plans);
export default PlansWithStore;