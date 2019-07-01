const BaseTextItem = require('./BaseTextItem');

/**
 * @class Entity this class represents objects of type Entity
 */
class Entity extends BaseTextItem {
    /**
     * @methodOf Entity.format
     * @description this method formats the given text using <strong> tag
     * @param text
     * @returns {string}
     */
    format(text) {
        return `<strong>${text}</strong>`;
    }
}

module.exports = Entity;
