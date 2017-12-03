import fs from 'fs';

fs.readFile('day2/input.txt', 'utf8', function (err,input) {

    if (err) return console.log(err);

    let lines = input.match(/(.*)\n?/g) || [];

    let checksum = lines.map(line => {
        let numbers = line.match(/(\d*)(?:\\t)?/g).filter(f => f).map( no => parseInt(no) ) || [];
        if( !numbers.length ) return 0;
        return numbers.map(divider => {
            return numbers.map(dividee => {
                let result = divider / dividee;
                return result % 1 === 0 && result !== 1 ? result : 0;
            }).filter(n => n);
        }).filter(n => n.length)[0][0];
    }).reduce( (acc, curr) => (acc + curr) );

    console.log( checksum )

});