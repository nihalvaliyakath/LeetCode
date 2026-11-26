/**
 * @param {string} s
 * @return {boolean}
 */

const s =  "A man, a plan, a canal: Panama";
var isPalindrome = function(s) {
    const newstr = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reversed = newstr.split("").reverse().join("")

    if(newstr===reversed){
        return true
    }else{
        return false
    }
};