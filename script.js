function getIssuer(number) {
    let str = (number + '').split('');
    let firstFour = str[0] + str[1] + str[2] + str[3];

    if (str.length === 15 && Number(firstFour[0] + firstFour[1]) === (37 || 34)) {
        console.log('AMEX');
    }else if (str.length === 16 && Number(firstFour[0] + firstFour[1] + firstFour[2] + firstFour[3]) === 6011){
        console.log('Discover');
    }else if(str.length === 16 && Number(firstFour[0] + firstFour[1]) === (51 || 52 || 53 || 54 || 55)){
        console.log('Mastercard');
    }else if ((str.length === 16 || str.length === 13) && Number(firstFour[0]) === 4){
        console.log('VISA');
    }else{
        console.log('Unknown');
    }
}

getIssuer(9111111111111111)