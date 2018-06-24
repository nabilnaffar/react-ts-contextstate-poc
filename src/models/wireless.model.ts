export interface WirelessModel {
    wireless: {
        plans: {
            total: number
        }
    }
}

export const initialState: WirelessModel  = {
    wireless: {
        plans: {
            total: 0
        }
    }
}