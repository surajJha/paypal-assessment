const BaseTextItem = require('./BaseTextItem');

/**
 * @class Entity this class represents objects of type TwitterUser
 */
class TwitterUser extends BaseTextItem {
    /**
     * @methodOf TwitterUser.format
     * @description this method formats the given text using <a href> tag
     * @param text
     * @returns {string}
     */
    format(text) {
        const username = text.substring(1);
        return `@<a href="http://twitter.com/${username}">${username}</a>`;
    }
}

module.exports = TwitterUser;
