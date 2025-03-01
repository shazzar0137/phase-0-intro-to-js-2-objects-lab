// Write your solution in this file!
// Define the employee object correctly
const employee = {
    name: "John",
    streetAddress: "42nd Street" 
  };

  const originalEmployee = { ...employee }; 
  
  
 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee }; 
    newObj[key] = value; 
   return newObj;  
  }

  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "Dan", "54th Street");
 
  console.log(updatedEmployee);
  
 
 console.log(employee);
  

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
 employee[key] = value;
 return employee;
}
const destructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Ken", "12th street")
console.log(destructiveEmployee)
console.log(employee);

Object.assign(employee, originalEmployee);
  console.log("Employee After Reset:", employee);
  
  function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee; 
}
const deleteedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("After Non-Destructive Delete:", deleteedEmployee); 


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
}


console.log("Original Employee (Unchanged):", employee); 


destructivelyDeleteFromEmployeeByKey(employee, "position");
console.log("After Destructive Delete:", employee);