h1 = document.querySelector("h1");


function changeCol(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num < 5){
                reject("color was rejcted.")
            }
            h1.style.color = color;
            resolve("color changed!")
        }, delay);
    });
}

// changeCol("red", 1000)
// .then(() => {
//     return changeCol("orange", 1000);
// })
// .then(() => {
//     return changeCol("green", 1000);
// })
// .then(() => {
//     return changeCol("blue", 1000);
// })

async function demo() {
    try{

        await changeCol("red" , 1000);
        await changeCol("green" , 1000);
        await changeCol("blue" , 1000);
        changeCol("orange" , 1000);
    } catch (err){
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number is", a + 3);
}

