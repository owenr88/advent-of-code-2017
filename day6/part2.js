import fs from 'fs';
import { max, min } from 'underscore';

fs.readFile('day6/input.txt', 'utf8', (err,input) => {

    if (err) return console.log(err);

    let lastMatch = input.match(/(\d*)\s/g).map(Number) || [],
        results = {},
        steps = 0;

    while( !results[lastMatch] || results[lastMatch].length < 3 ) {

        steps++;

        if( !results[lastMatch] ) results[lastMatch] = [];
        results[lastMatch].push(steps);

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

    results[lastMatch].splice( results[lastMatch].indexOf(min(results[lastMatch])), 1 )
    console.log( max(results[lastMatch]) - min(results[lastMatch]) )

});