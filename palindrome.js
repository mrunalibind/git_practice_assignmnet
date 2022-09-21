let string="madam";
let stringPalindrome="String is Palindrome.";
let N=string.length;

for(let i=0;i<N/2;i++){

    if(string[i]!=string[N-1-i]){
        stringPalindrome="String is not palindrome.";
    }

}
console.log(stringPalindrome);