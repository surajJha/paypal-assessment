const BaseTextItem = require('./BaseTextItem');

/**
 * @class Entity this class represents objects of type TwitterHashTag
 */
class TwitterHashTag extends BaseTextItem {
    /**
     * @methodOf TwitterHashTag.format
     * @description this method formats the given text using <a href> tag
     * @param text
     * @returns {string}
     */
    format(text) {
        const hashtag = text.substring(1);
        return `#<a href="http://twitter.com/hashtag/${hashtag}">${hashtag}</a>>`;
    }
}

module.exports = TwitterHashTag;
