let number=[19,45,42,63,64,75,24];

let even =0;
let odd =0;
//1
for(let i=0;i<number.length ; i++){
    if(number[i]%2==0)
        even++;
    else
        odd++;
}
//2
for(let item in number){
    if(number[i]%2==0)
        even++;
    else
        odd++; 
}
//3
for(let i in number ){
    i%2==0?even++:odd++;
}
//4
let even_array=number.filter(function(item,index){
    if(item%2==0) return true;
}).length;

