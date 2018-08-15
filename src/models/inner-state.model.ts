import { initialState as appShellInitialState ,storeName as appShellName, AppShellModel } from './app-shell.model';
import { initialState as wirelessInitialState ,storeName as wirelessName, WirelessModel } from './wireless.model';

export const initialState = {
    [appShellName]: appShellInitialState,
    [wirelessName]: wirelessInitialState,
}

export interface InnerAppState {
    [appShellName]: AppShellModel,
    [wirelessName]: WirelessModel,
}