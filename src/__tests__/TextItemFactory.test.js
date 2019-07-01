const TextItemFactory = require('../TextItemFactory');
const Entity = require('../Entity');
const Link = require('../Link');
const TwitterUser = require('../TwitterUser');

const textItemFactory = new TextItemFactory;


describe('testing textItemFactory', ()=> {
    it('Factory should return object of correct Item Type : Entity', () => {
        const type = 'Entity';
        const obj = textItemFactory.getTextItem(type);
        expect(obj).not.toBe(null);
        expect(typeof obj).toEqual('object');
        expect(obj instanceof Entity);
    });

    it('Factory should return object of correct Item Type : Link', () => {
        const type = 'Link';
        const obj = textItemFactory.getTextItem(type);
        expect(obj).not.toBe(null);
        expect(typeof obj).toEqual('object');
        expect(obj instanceof Link);
    });

    it('Factory should return object of correct Item Type : TwitterUser', () => {
        const type = 'TwitterUser';
        const obj = textItemFactory.getTextItem(type);
        expect(obj).not.toBe(null);
        expect(typeof obj).toEqual('object');
        expect(obj instanceof TwitterUser);
    });
});
