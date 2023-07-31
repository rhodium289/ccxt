import ccxt from '../../js/ccxt.js';

// AUTO-TRANSPILE //

async function example () {
    const prefix = '-';
    const exchange_1 = new ccxt.lbank ();
    const exchange_2 = new ccxt.lbank2 ();
    const keys_1 = Object.keys (exchange_1.has);
    const keys_2 = Object.keys (exchange_2.has);
    // check missing from exchange-1
    console.log ('### checking missing functionalities from exchange-1:', exchange_1.id);
    for (let i = 0; i < keys_2.length; i++) {
        const key = keys_2[i];
        if (exchange_2.has[key]) {
            if (!keys_1.includes (key)) {
                console.log (prefix, exchange_1.id, 'does not contain', key);
            } else if (exchange_2.has[key] !== exchange_1.has[key]) {
                console.log (prefix, exchange_1.id, 'has different value for', key, ':', exchange_1.has[key], ', while', exchange_2.id, 'has value of:', exchange_2.has[key]);
            }
        }
    }
    // check missing from exchange-2
    console.log ('### checking missing functionalities from exchange-2:', exchange_2.id);
    for (let i = 0; i < keys_1.length; i++) {
        const key = keys_1[i];
        if (exchange_1.has[key]) {
            if (!keys_2.includes (key)) {
                console.log (prefix, exchange_2.id, 'does not contain', key);
            } else if (exchange_1.has[key] !== exchange_2.has[key]) {
                console.log (prefix, exchange_2.id, 'has different value for', key, ':', exchange_2.has[key], ', while', exchange_1.id, 'has value of:', exchange_1.has[key]);
            }
        }
    }
}
await example ();
