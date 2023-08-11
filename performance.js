 //Adding 100 para
//const t1 = performance.now();
//for(let i=1;i<=100;i++) {

//    let newelement = document.createElement('p');
//    newelement.textContent = 'This is Para ' + i;
//    document.body.appendChild(newelement);
//}
//const t2 = performance.now();
//console.log("This took " + (t2-t1) + " ms");


 //Optimissing a Bit
//const t3 = performance.now();
//let mydiv = document.createElement('div') ;
//for(let i=1;i<=100;i++) {
//    let element = document.createElement('p');
//    element.textContent = 'This is Para ' + i;

//    mydiv.appendChild(element);
//}

//document.body.appendChild(mydiv);
//const t4 = performance.now();
//console.log("This took " + (t4-t3) + " ms");

        // Document Fragment
//const t5 = performance.now();        
//let fragment = document.createDocumentFragment();
//for(let i=1;i<=100;i++) {
//    let newelement = document.createElement('p');
//    newelement.textContent = 'This is Para ' + i;
//    fragment.appendChild(newelement);
//}
//document.body.appendChild(fragment); // 1Reflow, 1Repaint
//const t6 = performance.now;
//console.log('This took ' + (t6-t5) + " ms");

                 //Synchronus Code
//function sync()  {
    //    console.log('first');
//}   
//sync();
//console.log('second');

               //Asynchronus Code    
//setTimeout(function() {
    //    console.log('third');
//}, 3000);

//function sync(){
 //       console.log('first');
//}
//sync();
//console.log('second');
   