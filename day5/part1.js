import fs from 'fs';

fs.readFile('day5/input.txt', 'utf8', (err,input) => {

    if (err) return console.log(err);

    let lines = input.match(/(\-?\d+)/gm).map(n => parseInt(n)) || [],
        i = 0,
        steps = 0;

    while( i < lines.length ) {
        let step = lines[i];
        lines[i]++;
        i += step;
        steps++;
    }

    console.log( steps )

});