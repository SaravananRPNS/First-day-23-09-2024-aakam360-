// STEP=8-A1 return value;

/*function printPerson(firstName,lastName){
  const name=firstName + " " + lastName;
  console.log(name)

}
printPerson('prs','saravanan')*/

//STEP=8-a2 return not work

/*function printName(firstName,lastName){
  const name=firstName + " " + lastName;
  return;
}
printName("prs","saravanan");*/

// STEP=8-a3

/*function printPerson (firstName,lastName) {
  if (firstName === ''){
    return;

  }
  const name= firstName+' '+lastName;
  console.log(name);
}
printPerson('saravanan','paruvatham');

function printPerson (firstName,lastName) {
  if (firstName === ''){
    return;

  }
  const name= firstName+' '+lastName;
  console.log(name);
}
printPerson(' ','paruvatham');*/

// STEP=8 a4

/*function getFullName (firstName,lastName){
     const name = firstName + ' ' + lastName;
     //console.log(name);
     return name;
}
getFullName('saravanan','paruvatham');*/

// STEP=8 a5

/*function getFullName (firstName,lastName){
  const name = firstName + ' ' + lastName;
  return name;
}
let fullName=getFullName('saravanan','paruvatham');
console.log(fullName)*/

// STEP=8 a6
// 2 time output(innner,outer=ans)

/*function getFullName (firstName,lastName){
  const name = firstName + ' ' + lastName;
  console.log(name);
  return name;
}
let fullName=getFullName('saravanan','paruvatham');
console.log(fullName);*/

//STEP=8 A7
//number
/*function getFullName (firstName,middleName,lastName){
  const name = firstName + ' ' + middleName+' '+ lastName;
  return name;
}
let fullName=getFullName(1,5,1998);
console.log(fullName);*/

// STEP=8-A8
//[]-object,{}-array

/*function getFullName (firstName,lastName){
  const name = [firstName + ' ' + lastName];
  return name;
}
let fullName=getFullName('saravanan','paruvatham');
console.log(fullName);*/

//{}-array

/*function getFullName (firstName,lastName){
  const name = {firstName:firstName,lastName:lastName};
  return name;
}
let fullName=getFullName('saravanan','paruvatham');
console.log(fullName);*/

//{}-array adding return

/*function getFullName (firstName,lastName){
  
  return {firstName,lastName};
}
let fullName=getFullName('saravanan','paruvatham');
console.log(fullName);*/

// STEP=8 a-9
// inner function 

/*function getFullName (firstName,lastName)
{
 function goat (name1,name2){
  const name = name1 +' '+ name2;
  return name;
 }
   const fullName = goat (firstName,lastName);
   return fullName;
}
let fullName= getFullName('saravanan','paruvatham');
console.log(fullName);*/

/*function getFullName(firstName,lastName) {
  return firstName + " " + lastName;
}
let fullName = getFullName("saravanan","paruvatham");
console.log (fullName);*/

// Step=8 a-10
// anonymous function
// import topic

/*let getFullName=function (firstName,lastName) {
  return firstName + " " + lastName;
}
let fullName = getFullName("saravanan","paruvatham");
console.log (fullName);*/

//arrow function
const getFullName = (firstName,lastName)=>firstName + " " + lastName;

let fullName = getFullName('saravanan','paruvatham');
console.log(fullName)




