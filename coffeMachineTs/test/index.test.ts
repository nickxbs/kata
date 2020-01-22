import { coffeMachineService, DrinkOrder } from "../app";

describe('coffeMachineService logic', () => {
    it('should exist', () => {
        expect(coffeMachineService).toBeDefined();
    });
    it('should have a make function', () => {
        expect(coffeMachineService().make).toBeInstanceOf(Function);
    });

    it('should take order of tea', () => {
        const teaOrder: DrinkOrder = {
            kind: 'tea', sugar: 1, money: 0.4
        }
        const msgMakeTea = coffeMachineService().make(teaOrder)
        expect(msgMakeTea).toEqual('T:1:0');
    });
    it('should take order of chocolate', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'chocolate', sugar: 0, money: 0.5
        }
        const msgMakeCoco = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoco).toEqual('H::');
    });
    it('should take order of coffee', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'coffee', sugar: 2, money: 0.6
        }
        const msgMakeCoffe = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoffe).toEqual('C:2:0');
    });
    it('should send a message', () => {

        const msgContent = coffeMachineService().sendMessage('message-content')
        expect(msgContent).toEqual('M:message-content');
    });
    it('should take order of choco, money ok', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'coffee', sugar: 2, money: 0.6
        }
        const msgMakeCoffe = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoffe).toEqual('C:2:0');
    });
    it('should reject order of coffee, money missing', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'coffee', sugar: 2, money: 0.4
        }
        const msgMakeCoffe = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoffe).toEqual(`M:0.20 money missing`);
    });
    it('should reject order of choco, money missing', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'chocolate', sugar: 2, money: 0.4
        }
        const msgMakeCoffe = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoffe).toEqual(`M:0.10 money missing`);
    });
    it('should reject order of tea, money missing', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'tea', sugar: 2, money: 0.3
        }
        const msgMakeCoffe = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoffe).toEqual(`M:0.10 money missing`);
    });
});