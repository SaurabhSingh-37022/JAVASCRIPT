console.log('Hello Function');
// run();
//Function declaration
//function run(){
   // console.log('running');
//}
//function call or invoke
//run();

// stand(); => Not call the function
// Name Function assignment
//let stand = function walk(){
   // console.log('Walking');
//};
//stand();
//let jump = stand;
//jump();

//Anonymous function assignment
//let stand2 = function(){
 //   console.log('Anonymous');
//}
//stand2();

//function sum(a,b){
   // return a+b;
//}
//console.log(sum(1,2));
//console.log(sum(1));
//console.log(sum());
//console.log(sum(2,3,4,5));

//function sum(a,b){
   // console.log(arguments);
   // return a+b;
//}
//let ans = sum(1,3);
//let abs = sum(4,6,8,3);

//function sum(a,b){
  //  let total = 0;
  //  for(let value of arguments)
   // total = total + value;
   // return total;
//}
//let ans = sum(4,5,6);
//console.log(ans);

//Rest Operator
   // console.log(args)
//}
//sum(1,2,3,4,5);

//function sum(num,value,...argd){
  //  console.log(argd);
//}
//sum(1,2,3,4,5);

//Default parameters
//function interest(p,r=6,t=10){
   // return p*r*t/100;
//}
//console.log(interest(1000));
//console.log(interest());
//console.log(interest(1000,5,7));
//console.log(interest(1000,8));


// Getter and Setter
//let person = {
   // fname:'Love',
   // lname:'Babbar',
   // get fullname(){   //Getter
     //   return `${person.fname}  ${person.lname}`;
   // },
   // set fullname(value){   //Setter
     //   let parts = value.split(' ');
     //   this.fname = parts[0];
     //   this.lname = parts[1];
   // }


//};
    //Getter
//console.log(person.fullname);
    //Setter
//person.fullname = 'Rahul Kumar';
//console.log(person.fullname);

      // Try and Catch
//let person = {
   // fname : 'Saurabh',
   // lname : 'Singh',
   // get fullname(){
      //  return `${person.fname}   ${person.lname}`;

   // },
  //  set fullname(value){
      //  let parts = value.split(' ');
     //   this.fname = parts[0];
     //   this.lname = parts[1];
  //  }

//};
//try{
    //person.fullname = 'Rahul Kumar';
  //  person.fullname = 1;


//}
//catch (e){
  //  alert('You have a sent a number full name');
//}

//console.log(person.fullname);

//let person = {
   // fname : 'Saurabh',
   // lname : 'Singh',
   // get fullname(){
     //   return `${person.fname}   ${person.lname}`;

  //  },
  //  set fullname(value){ 
     // if(typeof value !== String){
    //  throw new Error("You have not sent a string");
      //  }            
      //  let parts = value.split(' ');
      //  this.fname = parts[0];
      //  this.lname = parts[1];
   // }

//};
//try{
    //person.fullname = 'Rahul Kumar';
  //  person.fullname = true;


//}
//catch (e){
   // alert('e');
//}

//console.log(person.fullname);

               //Scope
//{
   // let a=5;
   // console.log(a);
//}

//{
   // let a=5;
//}
//console.log(a);

//{
   // var a=5;
//}
//console.log(a);

//function walk(){
  //  var a=5;
//}
//console.log(a);

//for(var i=0; i<10; i++){

//}
//console.log(i);

for(let i=0; i<10; i++){

}
console.log(i);