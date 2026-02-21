let employees ={
    name : "smit devid",
    email:"smit1234@gmail.com",
    skills:["java","SQL","python","azure"],
    role:[
        {company :"wipro",title:"architecht"},
        {comapany:"LTS" , title:"analyst"}
    ]
    

}
let _skills= employees.skills;
console.log(_skills.slice(-3));