module.exports = function toReadable (number) {
    let strNumber = number + "";
    let charset = strNumber.split("");

    let singleNumber = [
        ["zero","one", "two", "three", "four", "five", "six", "seven" ,"eight" ,"nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen" ,"eighteen" ,"nineteen", "twenty"]
    ];

    if(charset.length === 1) {
      return singleNumber[0][number];
    }

    if(charset.length === 2) {
        if(number >= 10 && number <= 20) {
            return singleNumber[1][number - 10];
        }

        if(number > 20 && number <= 29) {
            return "twenty" + ' ' + singleNumber[0][number - 20];
        }

        if(number >= 30 && number <= 39) {
            if(number === 30) return "thirty";
            return "thirty" + ' ' + singleNumber[0][number - 30];
        }

        if(number >= 40 && number <= 49) {
            if(number === 40) return "forty";
            return "forty" + ' ' + singleNumber[0][number - 40];
        }

        if(number >= 50 && number <= 59) {
            if(number === 50) return "fifty";
            return "fifty" + ' ' + singleNumber[0][number - 50];
        }

        if(number >= 60 && number <= 69) {
            if(number === 60) return "sixty";
            return "sixty" + ' ' + singleNumber[0][number - 60];
        }

        if(number >= 70 && number <= 79) {
            if(number === 70) return "seventy";
            return "seventy" + ' ' + singleNumber[0][number - 70];
        }

        if(number >= 80 && number <= 89) {
            if(number === 80) return "eighty";
            return "eighty" + ' ' + singleNumber[0][number - 80];
        }

        if(number >= 90 && number <= 99) {
            if(number === 90) return "ninety";
            return "ninety" + ' ' + singleNumber[0][number - 90];
        }
    }

    if(charset.length === 3) {
        if(number < 1000) {

            if(number === 100) return "one hundred";
            if(number === 200) return "two hundred";
            if(number === 300) return "three hundred";
            if(number === 400) return "four hundred";
            if(number === 500) return "five hundred";
            if(number === 600) return "six hundred";
            if(number === 700) return "seven hundred";
            if(number === 800) return "eight hundred";
            if(number === 900) return "nine hundred";

            let result = singleNumber[0][Math.floor(number / 100)] + " hundred ";
            return (number % 100 === 0) ? result : result + toReadable(number % 100);
        }
    }
}
