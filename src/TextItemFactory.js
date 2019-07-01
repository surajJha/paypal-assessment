const Entity = require('./Entity');
const Link = require('./Link');
const TwitterUser = require('./TwitterUser');
const TwitterHashtag = require('./TwitterHashTag');

/**
 * @class TextItemFactory this class acts as a Factory to produce various
 * objects based on the item type.
 */
class TextItemFactory {
    /**
     * @methodOf TextItemFactory.getTextItem
     * @param itemType
     * @returns {*}
     */
    getTextItem(itemType) {
        if(itemType === 'Entity')
            return new Entity();
        if(itemType === 'Link')
            return new Link();
        if(itemType === 'TwitterUser')
            return new TwitterUser();
        if(itemType === 'TwitterHashTag')
            return new TwitterHashtag();
    }
}

module.exports = TextItemFactory;
