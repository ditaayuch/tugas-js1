const printSegitiga = (num) => {

    for (let i = num; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
    if (typeof num !== 'number' || isNaN(num)) {
        console.log('Data harus number!');
    }
};

printSegitiga(5);