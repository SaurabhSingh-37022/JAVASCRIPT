console.log('Namestey')

// Factory Function
//function createRectangle(len,bre) {

   // return rectangle = {
      //  length: len,
      //  breadth: bre,

      //  draw() { 
          //  console.log('drawing rectangle')

        //}
   // }
//}

//let rectangle1=createRectangle(3,5);
//let rectangle2=createRectangle(2,8);
//let rectangle3=createRectangle(7,9);

// Constructor Factor

  //constructor function --> first letter of every word is Capital --> Number of Students
  //constructor function -->properties/method --> intialise/Define

//function Rectangle() {
  //  this.length=3;
//this.breadth=2;
  //  this.draw=function(){
  //      console.log('drawing');
  //  }
//}
//object creation using constrcuter function
//let rectangle1= new Rectangle();

// Dynamic Nature of Object
//function Rectangle() {
  //  this.length=3;
//this.breadth=2;
   // this.draw=function(){
//console.log('drawing');
   // }
//}
//let rectangle1= new Rectangle();
//rectangle1.color='yellow';
//console.log(rectangle1);

//delete rectangle1.color;
//console.log(rectangle1);

// Primitive
//let a=10;
//let b=a;
//a++;
//console.log(a);
//console.log(b);

// Refrence
//let a={value:10};
//let b=a;
//a.value++;
//console.log(a.value);
//console.log(b.value);

//let a=10;
//function inc(a){
  //  a++;
//}
//inc(a);
//console.log(a);

//Refrence
//let a={value:10};
//function inc(a){
   // a.value++;
//}
//inc(a);
//console.log(a);

//let rectangle={
 //   length:2,
 //   breadth:4
//};
//for in loop
//for(let key in rectangle){
//console.log(key,rectangle[key]);
// }

//let rectangle={
    //  length:2,
    //  breadth:4
//};
//if('length' in rectangle) {
 //   console.log('Present');
//}
//else {
   // console.log('Absent');
//}

// iteration cloning
//let src={
   // a:10,
  //  b:20,
  //  c:30
//};
//let dest={};

//for(let key in src){
 //   dest[key]=src[key];

//}
//console.log(dest);
//src.a++;
//console.log(dest);

//Assign Clone

//let src={
  //  a:10,
  //  b:20,
  //  c:30
//};
//let dest=Object.assign({},src);
//console.log(dest);
//src.a++;
//console.log(dest);

//Spread clone
//let src={
   // a:10,
   // b:20,
   // c:30
//};
//let dest={...src};
//console.log(dest);
//src.a++;
//console.log(dest);

//console.log('Hello Jee');

//let lastName='Babbar';

//let firstName=new String('Love');

//let message = 'This is my first Message';
//let words = message.split(' ');

//console.log(words);

//Templete Literal
//let message =
//`Hello
 //Sir My
// Name is
// Saurabh
// Singh` 
 //console.log(message);

 //let date = new Date();
 //console.log(date);

 //let date2 =new Date('june 20 1998 07:15');
 //console.log(date2);

 //let date3 = new Date(1998, 5, 20, 7);
 //console.log(date3);








