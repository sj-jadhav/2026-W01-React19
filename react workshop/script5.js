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
console.log(user.profile[0].name+":" +user.rating[0].count);
console.log(user.profile[1].name+":" +user.rating[1].count);
console.log(user.profile[2].name+":" +user.rating[2].count);