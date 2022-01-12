console.log('Enter the app.js file')

//anything written after this function will get executed and this is async as mentioned.
setTimeout(() => {
    console.log('2 second times');
}, 2000) //async function that node provides us to run somecode after some particular time in ms before the callback gets executed.
// what happens when we use the code with 0 sec t/o
setTimeout(() => {
    console.log('0 second times');
})

console.log('Exit the app.js file')