const TextItemFactory = require('./TextItemFactory');

const textItemFactory = new TextItemFactory();

/**
 * @class TextFormatter this class is the main entrypoint of the application.
 * It exposes a method called format which is responsible to do the required
 * formatting on input received from module 1 (string) and module 2 (related data).
 */
class TextFormatter {
    /**
     * @methodOf TextFormatter.format
     * @description this method takes input from module 1 and module 2 and returns
     * the formatted text
     * @param text
     * @param extractedConceptData
     * @returns {string}
     */
    format(text, extractedConceptData) {
        const sortedConceptData = this.sortOnStartPos(extractedConceptData, 'start');
        let result = '';
        let startPos = 0;
        sortedConceptData.forEach((concept) => {
            const str = text.substring(concept.start, concept.end);
            const formattedText = textItemFactory.getTextItem(concept.type).format(str);
            result = result + text.substring(startPos, concept.start);
            result = result + formattedText;
            startPos = concept.end;
        });
        return result;
    }

    /**
     * @methodOf TextFormatter.sortOnStartPos
     * @description this method sorts the input array based on specified property.
     * @param arr
     * @param property
     * @returns {*}
     */
    sortOnStartPos(arr, property) {
        arr.sort((a, b) => {
            return a[property] > b[property];
        });
        return arr;
    }


}

module.exports = TextFormatter;
