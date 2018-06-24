import { AppShellModel, initialState as appShell } from './app-shell.model';
import { WirelessModel, initialState as wireless } from './wireless.model';

export interface InnerAppState extends AppShellModel, WirelessModel {} 

export const initialState = {
    ...appShell,
    ...wireless,
}