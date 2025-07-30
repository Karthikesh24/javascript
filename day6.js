let employee=[];
//add emp
function addEmp(id,name,salary = true){
    employee.push({id,name,salary});
    console.log("Employee added",employee);
}
addEmp(1,"Karthi",20000)
addEmp(2,"Dhanu",30000)
addEmp(3,"Shree",6500)

//to update emp
function updateEmp(id,newDetail){
    const emp=employee.find(e => e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("updated",employee)
    }else{
        console.log("employee not found")
    }
}
updateEmp(3,{name:"kesh"});
//delete emp
function removeEmp(id){
    const index=employee.findIndex((e)=> e.id === id);
    if(index !==-1) {
        employee.splice(index,id)
        console.log("employee removed",employee) 
     }else{
        console.log("employee not found");
     }
}
removeEmp(1)

//calculate total salary
function totalSalary(){
    const total=employee.reduce((sum,emp)=>sum+emp.salary , 0);
    console.log("total salary is",total);
}
totalSalary()