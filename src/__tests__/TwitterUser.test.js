const TwitterUser = require('../TwitterUser');

const twitterUser = new TwitterUser;

describe('testing TwitterUser formatter', ()=> {
    it('should return formatted TwitterUser wrapped using <a href></a> tags', () => {
        const text = '@surajJha';
        const formattedText = twitterUser.format(text);
        expect(formattedText).not.toBe(null);
        expect(typeof formattedText).toEqual('string');
        expect(formattedText).toEqual('@<a href="http://twitter.com/surajJha">surajJha</a>');
    });

    it('should return formatted TwitterUser wrapped using <a href></a> tags', () => {
        const text = '@someUser';
        const formattedText = twitterUser.format(text);
        expect(formattedText).not.toBe(null);
        expect(typeof formattedText).toEqual('string');
        expect(formattedText).toEqual('@<a href="http://twitter.com/someUser">someUser</a>');
    });
});
