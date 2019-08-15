const firstCall = new Promise((resolve,reject) => {
    let numbers;
    setTimeout(()=>{
        numbers = { numer1: 10, numer2: 12}
        resolve (numbers)
    },100)
    
})
function secondCall(n1,n2){
    return n1 + n2;
}
(async()=>{
    try {
        const numbers = await firstCall
        const suma = secondCall(numbers.numer1, numbers.numer2)
        console.log(suma)
    } catch(e) {
        console.log(e);
    }
    

})();