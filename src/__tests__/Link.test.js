const Link = require('../Link');

const link = new Link;

describe('testing Link formatter', ()=> {
    it('should return formatted link wrapped using <a href></a> tags', () => {
        const text = 'someString';
        const formattedText = link.format(text);
        expect(formattedText).not.toBe(null);
        expect(typeof formattedText).toEqual('string');
        expect(formattedText).toEqual('<a href="someString">someString</a>');
    });

    it('should return formatted link wrapped using <a href></a> tags', () => {
        const text = 'anotherPieceOfText';
        const formattedText = link.format(text);
        expect(formattedText).not.toBe(null);
        expect(typeof formattedText).toEqual('string');
        expect(formattedText).toEqual('<a href="anotherPieceOfText">anotherPieceOfText</a>');
    });
});
