const TextFormatter = require('../TextFormatter');

const textFormatter = new TextFormatter;

describe('Testing text formatter', () => {
    it('should correctly format the given input text', () => {
        const inputText = 'Obama visited Facebook headquarters: http://bit.ly/xyz @elversatile';
        const extractedConceptData = [
            {
                start: 14,
                end: 22,
                type: 'Entity'
            },
            {
                start: 0,
                end: 5,
                type: 'Entity'
            },
            {
                start: 55,
                end: 67,
                type: 'TwitterUser'
            },
            {
                start: 37,
                end: 54,
                type: 'Link'
            }
        ];
        const formattedText = textFormatter.format(inputText, extractedConceptData);
        expect(formattedText).not.toBe(null);
        expect(formattedText).toEqual('<strong>Obama</strong> visited <strong>Facebook</strong> headquarters: <a href="http://bit.ly/xyz">http://bit.ly/xyz</a> @<a href="http://twitter.com/elversatile">elversatile</a>')
    });
});
