type KindType = 'tea' | 'chocolate' | 'coffee';
type KindMessageType = 'T' | 'H' | 'C';


export type DrinkOrder = {
    kind: KindType;
    sugar: 0 | 1 | 2 | 3 | 4 | 5;
    money: number;
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
function getPrice(order: DrinkOrder): number {
    switch (order.kind) {
        case 'tea':
            return 0.4;
        case 'chocolate':
            return 0.5;
        case 'coffee':
            return 0.6
    }
}


export const coffeMachineService = (): CoffeMachineServiceType => {
    const sendMessage = (kind: string, message: string): string => {
        return `${kind}:${message}`;
    };
    return {
        make: (order): string => {
            const price = getPrice(order);
            if (order.money < price) {
                return `M:${(price - order.money).toFixed(2)} money missing`
            }
            const messageOrderKind = getMessageKind(order);
            return sendMessage(messageOrderKind, `${order.sugar ? order.sugar : ''}:${order.sugar ? 0 : ''}`);
        },
        sendMessage: (message): string => sendMessage('M', message)
    }
}

