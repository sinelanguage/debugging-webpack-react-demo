function addTwoNumbers(a){
	return function(b){
	  return a + b
	}
  }
  
  const addThree = addTwoNumbers(3);
  
  const total = addThree(4);
  console.log(total)
 
  export function logResultFromPartialApplication(){
	return total
  }