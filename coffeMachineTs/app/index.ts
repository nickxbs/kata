type KindType = 'tea' | 'chocolate' | 'coffee';
type KindMessageType = 'T' | 'H' | 'C';

export type DrinkOrder = {
    kind: KindType;
    sugar: 0 | 1 | 2 | 3 | 4 | 5;
}
type CoffeMachineServiceType = {
    make: (order: DrinkOrder) => string;
    sendMessage: (message: string) => string;
};

function getMessageKind(order: DrinkOrder): KindMessageType {
    switch (order.kind) {
        case 'tea':
            return 'T';
        case 'chocolate':
            return 'H';
        case 'coffee':
            return 'C'
    }
}


export const coffeMachineService = (): CoffeMachineServiceType => {
    return {
        make: (order): string => {
            const messageOrderKind = getMessageKind(order);
            return `${messageOrderKind}:${order.sugar ? order.sugar : ''}:${order.sugar ? 0 : ''}`
        },
        sendMessage: (message): string => {
            return `M:${message}`
        }
    }
}

