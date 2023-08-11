console.log('Start the Array');

//let numbers = [1,4,5,7];
//numbers.push(9);
//numbers.unshift(8);
//numbers.splice(2,0,'a','b','c');
//console.log(numbers);

//Searching

//let numbers = [1,2,3,4,5];
//console.log(numbers);
//console.log(numbers.indexOf(9));

//We want to cheak if a number exist in a Array

//let numbers = [1,2,3,4,5];
//console.log(numbers); 
//console.log(numbers.includes(6));
//console.log(numbers.indexOf(8,2));
//console.log(numbers.indexOf(5,2));

//let courses = [
   // {no:1, naam: 'saurabh'},
   // {no:2, naam: 'singh'}

//];
//console.log(courses);
//let course = courses.find(function(course){
    //return course.naam == 'singh';
//})
//console.log(course);
                // OR
//let course = courses.find(course

//Removing Element
//let numbers=[1,2,3,4,5,6,7];
//numbers.pop();
//numbers.shift();
//numbers.splice(2,2);
//console.log(numbers);

//Emptying an Array
//let numbers=[1,2,3,4,5];
//let numbers2=numbers;
//numbers.length=0;
//console.log(numbers);
//console.log(numbers2);

//Combine
//let first = [1,2,3,4];
//let second = [5,6,7,8];

//let combined=first.concat(second);
//console.log(combined);

//Slicing
//let numbers=[1,2,3,4,5,6];
//let sliced=numbers.slice(2,4);
//console.log(sliced);

//let marks=[10,20,30,40,50,60];
//let sliced=marks.slice(2);
//console.log(sliced);

//let first=[1,2,3];
//let second=[4,5,6];

//let combined=[...first,'a',true,...second,'b',false];
//console.log(combined);

//copy kaise create karu
//let first=[1,2,3];
//let second=[4,5,6];
//let another=[...combined];
//console.log(another);

//for of loop
//let arr=[10,20,30,40,50];
//for(let value of arr){
   //console.log(value);
//}

//for Each loop
//let arr=[5,4,3,2,1];
//arr.forEach(function(number){
    //console.log(number);
      // OR
//arr.forEach(number => console.log(number));  
//console.log(number);  

//Joning Array
//let numbers=[1,2,3,4,5];
//let joined=numbers.join(',');
//console.log(joined);

//let message='This is my first message';
//let parts=message.split(' ');
//console.log(parts);

//let joined = parts.join('_');
//console.log(joined);

//let number=[40,30,10,20,50];
//number.sort();
//console.log(number);

//number.reverse()
//console.log(number);

//Filtering Array
//let number=[1,2,-1,-2];
//let filtered=number.filter(a => a>=0);
//console.log(filtered);

//let numbers=[7,8,9,10];
///console.log(numbers);
//let items=numbers.map(value => 'student_no'+ value);
//console.log(items);

//Maping of object
//let numbers=[1,2,-6,-9];
//let filtered=numbers.filter(value => value>=0);
//console.log(filtered);
//let items=filtered.map(function(num){
  //  return {value: num};

//});
//console.log(items);

//let arr= [1,2,3,4];
//let total =0;

//for(let value of arr)
//total=total + value;

//console.log(total);

         // Reducing Array
//let arr=[1,2,3,4,5];

//let totalsum=arr.reduce((accumulator,currentvalue) => accumulator+currentvalue,0)

//console.log("Printing Total Sum:");
//console.log(totalsum);

let arr=[1,2,3,4,5];

let totalsum=arr.reduce((accumulator,currentvalue) => accumulator+currentvalue)

console.log("Printing Total Sum:");
console.log(totalsum);







