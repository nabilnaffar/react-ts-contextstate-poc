export interface AppShellModel {
    appShell: {
        totalPrice: {
            value: number
        }
    }
}


export const initialState: AppShellModel  = {
    appShell: {
        totalPrice: {
            value: 0
        }
    }
}