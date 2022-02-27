module.exports = function toReadable(number){
    const digit = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const dozens = [
        '',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if (number === 0) return 'zero';

    if (number < 20) return digit[number];

    let result = 'Too big number';

    const digitArr = number.toString().split('');

    if (number < 100) {

        result = dozens[digitArr[0]];
        result += digitArr[1] === '0' ? '' : ' ' + digit[digitArr[1]];

    } else if (number < 1000) {

        result = digit[digitArr[0]] + ' hundred';

        const twoDigit = +[digitArr[1], digitArr[2]].join('');

        if (twoDigit < 20 && twoDigit !== 0){
            result += ' ' + digit[twoDigit];
        } else {
            result += digitArr[1] === '0' ? '' : ' ' + dozens[digitArr[1]];
            result += digitArr[2] === '0' ? '' : ' ' + digit[digitArr[2]];
        }
    }

    return result;
}
