const BaseTextItem = require('./BaseTextItem');

/**
 * @class Entity this class represents objects of type Link
 */
class Link extends BaseTextItem {
    /**
     * @methodOf Link.format
     * @description this method formats the given text using <a href> tag
     * @param text
     * @returns {string}
     */
    format(text) {
        return `<a href="${text}">${text}</a>`;
    }
}

module.exports = Link;
