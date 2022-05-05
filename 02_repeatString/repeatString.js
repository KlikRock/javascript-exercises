const repeatString = function(string, num) {
    let i = 1
    let word = ""
    if (num < 0) {
        return('ERROR')
    }
    else {
        while (i <= num) {     
            word += string
            word += ""
            i++ 
        }
    return word    
    }
}
// Do not edit below this line
module.exports = repeatString;
