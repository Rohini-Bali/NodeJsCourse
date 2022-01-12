//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//function add 
// const add = (a, b, (setTimeout(() => {
//     console.log('We are in setTimeout')
//     sum = a+b;
//     return sum
// }, 2000)))

// setTimeout(()=>{
//     console.log('We are in setTimeout')
// },2000)


const add = (a,b,callback) => {
    setTimeout(()=>{
        callback(a+b) //or callback(sum) where sum = a+b;
    },2000)

}
add(1, 2, (sum) => {
    console.log(sum);
})