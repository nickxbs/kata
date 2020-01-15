import { coffeMachineService, DrinkOrder } from "../app";

describe('coffeMachineService loginc', () => {
    it('should exist', () => {
        expect(coffeMachineService).toBeDefined();
    });
    it('should have a make function', () => {
        expect(coffeMachineService().make).toBeInstanceOf(Function);
    });
    it('should take order of tea', () => {
        const teaOrder: DrinkOrder = {
            kind: 'tea', sugar: 1
        }
        const msgMakeTea = coffeMachineService().make(teaOrder)
        expect(msgMakeTea).toEqual('T:1:0');
    });
    it('should take order of chocolate', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'chocolate', sugar: 0
        }
        const msgMakeCoco = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoco).toEqual('H::');
    });
    it('should take order of coffee', () => {
        const chocoOrder: DrinkOrder = {
            kind: 'coffee', sugar: 2
        }
        const msgMakeCoffe = coffeMachineService().make(chocoOrder)
        expect(msgMakeCoffe).toEqual('C:2:0');
    });
    it('should send a message', () => {

        const msgContent = coffeMachineService().sendMessage('message-content')
        expect(msgContent).toEqual('M:message-content');
    });

});