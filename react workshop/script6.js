let employees ={
    name : "smit devid",
    email:"smit1234@gmail.com",
    skills:["java","SQL","python","azure","html"],
    role:[
        {company :"wipro",title:"architecht"},
        {comapany:"LTS" , title:"analyst"},
    ]
    

}
let _skills={...employees.skills};
console.log(_skills);
employees={...employees,skills :[...employees.skills,"react"]};
console.log(employees);