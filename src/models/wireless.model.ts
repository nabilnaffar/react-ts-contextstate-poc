
export interface WirelessModel {
    plans: {
        total: number;
    }
}

export const initialState: WirelessModel  = {
    plans: {
        total: 0
    }
}

export const storeName = 'wireless';