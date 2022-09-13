let string="madam";
let isPalindrome="Yes";
let N=string.length;
for(let i=N-1;i>=0;i--){
    if(string[i]!=string[N-1-i]){
        isPalindrome="No";
    }
}
console.log(isPalindrome);