//let meraPromise = new Promise(function(resolve,reject) {
   // setTimeout(function() {
    //    console.log('I am inside Promise');
  //  },5000);
  //  resolve(1111);
//});
//console.log('Pehla');

//let meraPromise = new Promise(function(resolve,reject) {
//setTimeout(function() {
     //   console.log('I am inside Promise');
   // },5000);
   // reject(new Error('Bhaisahab Error aaya hai'));
//});
//console.log('Pehla');

//let merapromise = new Promise(function(resolve,reject) {
 //  setTimeout(function() {
 //       console.log('I am inside Promise');
 //   },5000);
//    resolve(2233);
//});
//merapromise.then((value) =>{console.log(value)});


//let meraPromise = new Promise(function(resolve,reject) {
  //  setTimeout(function() {
      //  console.log('I am inside Promise');
   // },5000);
//    reject(new Error('Bhaisahab Error aaya hai'));
//});
//meraPromise.catch((error) =>{console.log('Recived an Error')});

                    // Many Promise
//let waada1 = new Promise(function(resolve,reject) {
 //   setTimeout(()=> {
 //       console.log('settime1 started');
//    },2000);
//resolve(true);

//}) 

//let output = waada1.then(()=>{ 
//    let waada2 = new Promise(function(resolve,reject) {
//        setTimeout(()=>{
 //           console.log("settime2 started");
 //       },3000);
 //       resolve("waada2 resolved");

       
 //   })
 //   return waada2;
//})
//output.then((value) => console.log(value));

//async function abcd(){
//    return 7;
//}

           // Async Await
//async function utility() {
 //   let delhiMausam = new Promise((resolve,reject)=>{
  //      setTimeout(()=>{
   //         resolve("Delhi is Hot")
//        },1000);
 //   });
 //   let hydMausam = new Promise((resolve,reject)=>{
 //       setTimeout(()=>{
 //           resolve("Hydrabad is Cool");
  //      },2000);
  //  });
 //   let dM = await delhiMausam;
 //   let hM = await hydMausam;
 //   return[dM,hM];
//}

         // Fetch API
//let content = fetch('https://jsonplaceholder.typicode.com/todos/1')   


                    // get API
//async function utility(){
//    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let output = await content.json()
 //   console.log(output);
//}
//utility(); 


                   // Post(Send) API
//async function helper() {
  //  let options = {
    //    method: 'POST',
   //     body:JSON.stringify({
     //       title: 'Saurabh',
     //       body: 'Body Bilder',
      //      userId: 2001,
      //      weight: 67
     //   }),
     //   headers:{
    //        'Content-type':'application/json;charset=UTF-8',
    //    },
   // };
   // let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
   // let response = content.json();
   // return response;
//}
//async function utility(){
  //  let ans = await helper();
   // console.log(ans);
//}
//utility();


                        //  Closures
function init() {
  var name = "Mozilla";
  function displayName(){
    console.log(name);
  }
  displayName();

}  
init();              

                        