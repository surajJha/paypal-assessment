const Entity = require('../Entity');

const entity = new Entity;

describe('testing Entity formatter', ()=> {
    it('should return formatted entity wrapped using <strong></strong> tags', () => {
        const text = 'Obama';
        const formattedText = entity.format(text);
        expect(formattedText).not.toBe(null);
        expect(typeof formattedText).toEqual('string');
        expect(formattedText).toEqual('<strong>Obama</strong>');
    });

    it('should return formatted entity wrapped using <strong></strong> tags', () => {
        const text = 'Suraj';
        const formattedText = entity.format(text);
        expect(formattedText).not.toBe(null);
        expect(typeof formattedText).toEqual('string');
        expect(formattedText).toEqual('<strong>Suraj</strong>');
    });
});
