export type OnSetFn = (namespace: string, key: string, value: object) => void;

export class ExistingStateManager {
    onSet: OnSetFn | undefined;

    set(key: string, value: object) {
        if(this.onSet) {
            const [namespace, subKey] = key.split(':');
            console.warn(`---CHANGING THE STORE ${namespace}:${subKey}: `, value);
            this.onSet(namespace, subKey, value);
        }
    }

    registerSet(cb: OnSetFn) {
        this.onSet = cb;
    }
}

export const stateManager = new ExistingStateManager();