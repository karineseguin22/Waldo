// //The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   //for (var i = 0; i < arr.length; i++) {
//       arr.forEach(function(element){
//           console.log("TEST" , element);
      
//       }
       
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
    
//   }


// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    //for (var i = 0; i < arr.length; i++) {
        arr.forEach(function(element,i) {
            //console.log("TEST" , element);
      if (element === "Waldo") {
        found(element, i );   // execute callback
      }
    });
  }
  
  function actionWhenFound(target, targetIndex) {
    console.log("Found", target, "at index", targetIndex);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);