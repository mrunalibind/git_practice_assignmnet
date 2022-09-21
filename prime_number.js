let x=15;
let count=0;
for(let i=1;i<=x;i++){
    if(x%i==0){
        count++;
    }
}
if(count>2){
    console.log(x,"Number Is Not Prime");
}
else{
    console.log(x,"Number is Prime");
}
