// Optinal and Default Parametes:

// Optional Parameters Optional parameters are specified by  adding a question mark (?) after the parameter name. 
//  This indicates that the parameter is not required.

// Parameters in TypeScript are similar to parameters in other programming languages. 
// They are values that you can pass to functions to customize their behavior. TypeScript, 
// being a statically typed language, adds additional features and type safety to parameters.
//  Here are the main types of parameters you can use in TypeScript:

//Func Difine

const greet3 = (name:string, id:number):string => {
    return `Welcome, ${name} and ur id is {id}`
}

//Func Call
greet3("musfira",8)