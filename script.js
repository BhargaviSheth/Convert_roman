function convertrom(usernum) {
    
    let userInput = document.getElementById('user-number').value;
    console.log(userInput);

    
    let usernumber = parseInt(userInput);
    console.log(usernumber);

    
    let roman = document.getElementById('romannumber');

    // Convert the number to Roman numeral
    const romanNumerals = [
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

   
    

    for (let i = 0; i < romanNumerals.length; i++) {
        while (usernumber >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            usernumber -= romanNumerals[i].value;
        }
    }
    


    roman.innerText = result;

    console.log(result);
    console.log(usernumber);

    return result;
}
