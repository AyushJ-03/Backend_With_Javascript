// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetoDb("Ayush", () => {
//     console.log("your data was saved");
//     savetoDb("hello world", () => {
//         console.log("your data2 was saved");
//         savetoDb("Vaishnavi", () => {
//             console.log("your data3 was saved");
//         },
//             () => {
//                 console.log("Weak connection, your data3 was not saved.")
//             });
//     },
//         () => {
//             console.log("Weak connection, your data2 was not saved.")
//         });
// },
//     () => {
//         console.log("Weak connection, your data was not saved.")
//     }
// );

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("data was saved");
        } else {
            reject("weak connection");
        }
    });
}

// savetoDb("Ayush")
// .then(() => {
//     console.log("Promise resolved");
// })
// .catch(() => {
//     console.log("Promise rejected");
// })

savetoDb("Ayush")
.then((result) => {
    console.log("Data1 saved. " + result);
    return savetoDb("hello") 
})
.then((result) => {
    console.log("Data2 saved. " + result)
    return savetoDb("jaiswal");
 })
.then((result) => {
    console.log("Data3 saved. " + result)
})
.catch((error) => {
    console.log("Promise rejected. " + error);
})

