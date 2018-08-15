export interface AppShellModel {
    totalPrice: {
        value: number
    }
}


export const initialState: AppShellModel  = {
    totalPrice: {
        value: 0
    }
}

export const storeName = 'appShell';