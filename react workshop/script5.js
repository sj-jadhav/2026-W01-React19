let user={
    profile:[
        {name:"ashish"},
        {name:"varun"},
        {name:"vinod"} 
    ],
    rating:[
        {count:145},
        {count:189},
        {count:144}
    ]
}
let x=user.profile.map(item =>item.name);
let y=user.rating.map(item =>item.count);
output={};
for(let i=0;i<x.length;i++){
    output[x[i]]=y[i];
}
console.log(output);