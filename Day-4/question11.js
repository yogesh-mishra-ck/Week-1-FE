 const fun = (name = "abc") => {
        if (name) {
          console.log("if", name);
        } else {
          console.log("else", name);
        }
      };
	  
fun(""); 
// Guess the Output ?
// else 

// Ouput will be else because default paramter will only run when paramter is not given
// Here we have empty string as paramter which is a falsy value so it will go in else block.
