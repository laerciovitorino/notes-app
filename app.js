const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Laércio.');

fs.appendFileSync('notes.txt', ' I currently live in Campina Grande-PB.');