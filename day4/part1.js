import fs from 'fs';

fs.readFile('day4/input.txt', 'utf8', (err,input) => {

    if (err) return console.log(err);

    let lines = input.match(/(.*)\n?/g) || [];

    let filtered = lines.filter(line => {
        if( !line ) return false;
        let words = line.replace('\n', '').split(" "),
            unique = words.filter((word, i, arr) => arr.indexOf(word) === i);
        return words.length === unique.length;
    });

    console.log( filtered.length )

});