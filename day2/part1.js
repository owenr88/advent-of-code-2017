import fs from 'fs';

fs.readFile('day2/input.txt', 'utf8', (err,input) => {

    if (err) return console.log(err);

    let lines = input.match(/(.*)\n?/g) || [];

    let checksum = lines.map(line => {
        let numbers = line.match(/(\d*)(?:\\t)?/g).filter(f => f).map( no => parseInt(no) ) || [];
        if( !numbers.length ) return 0;
        return Math.max(...numbers) - Math.min(...numbers);
    }).reduce( (acc, curr) => (acc + curr) )

    console.log( checksum )

});