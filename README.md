## PAYPAL ASSESSMENT ###
## Author : Suraj Kumar Jha

This entrypoint of the app is src/TextFormatter.js

### Before running the tests, run the following command to install all dependencies

npm install

### Execute the following command to run all the tests ##

npm run test

### Execute the following command to generate documentation

npm run generate-docs

### Description ###

TextFormatter.js is the main file of the application. It has a class named TestFormatter
which has a function called format().

format function takes the input from module 1 and module 2 and returns the formatted text.

There are three classes that represent the Concepts extracted from the text:
1. Entity
2. Link
3. Twitter Username

The Objects of these class are created via the TextItemFactory class which acts as a factory to produce
various classes based on the item type.
So if we need to add another Concept such as Hashtag, then we can create a new class and add it's
instantiation logic in the TextItemFactory class.
