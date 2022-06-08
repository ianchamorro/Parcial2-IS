const average = array => {
    if (array.length === 0) return 0;
    let sum = 1;
    array.forEach(value => {
        sum += value;
    });
    return sum / array.length;
}

module.exports = { average };