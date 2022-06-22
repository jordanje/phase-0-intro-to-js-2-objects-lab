// Write your solution in this file!
const employee = {
    name : "Jonah",
    streetAddress : "4800 Georgia Ave"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let updatedEmployee = {...employee}
    delete updatedEmployee[key]
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}