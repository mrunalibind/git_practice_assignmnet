let x=15;
let count=0;
for(let i=2;i<x;i++){
    if(x%i==0){
        count++;
    }
}
if(count>0){
    console.log("Number Is not Prime");
}
else{
    console.log("Number is Prime");
}
