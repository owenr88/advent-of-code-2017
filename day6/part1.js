import fs from 'fs';
import { max } from 'underscore';

fs.readFile('day6/input.txt', 'utf8', (err,input) => {

    if (err) return console.log(err);

    let lastMatch = input.match(/(\d*)\s/g).map(Number) || [],
        results = {};

    while( !results[lastMatch] ) {

        results[lastMatch] = 1;

        let toRedistribute = max(lastMatch),
            index = lastMatch.indexOf(toRedistribute);
        lastMatch[index] = 0;

        while( toRedistribute > 0 ) {
            index++;
            if( index === lastMatch.length ) index = 0;
            lastMatch[ index ]++;
            toRedistribute--;
        }
    }

    console.log( Object.keys(results).length )

});