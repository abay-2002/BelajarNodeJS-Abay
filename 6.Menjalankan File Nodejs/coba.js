function cetakNama(nama){
    return `Hello nama saya ${nama} dari NodeJS`;
}

module.exports = cetakNama;
// NodeJS menhanut system module.

function cetakUsia(usia){
    return `Hello umur saya ${usia}`;
}
console.log(cetakUsia(18));
