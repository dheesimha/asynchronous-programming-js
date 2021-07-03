// function first() {
//     console.log(1);
// }
// function second() {
//     setTimeout(() => {

//         console.log(2);
//     }, 0);
// }
// function third() {
//     console.log(3);
// }

// function first() {
//     console.log(1)
// }


// function second(callback) {
//     setTimeout(() => {
//         console.log(2)
//         callback();
//     }, 0)

// }

// function third() {
//     console.log(3)
// }

// first();
// second(third);
// third();



// function pyramidOfDoom() {
//     setTimeout(() => {
//         console.log(1)

//         setTimeout(() => {
//             console.log(2)

//             setTimeout(() => {
//                 console.log(3)
//             }, 500)
//         }, 2000);

//     }, 1000)
// }


// pyramidOfDoom();



// const promise = new Promise((resolve, reject) => {

//     resolve("We did it")
// })

// promise.then((response) => {
//     console.log(response)
// })


// console.log(promise);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>
//         resolve("Resolving an asynchronous request")
//         , 1000)
// })

// promise.then((response) => {
//     console.log(response);
// }).then((secondResponse)=>{
//     console.log()
// })


// fetch("https://api.github.com/users/dheesimha")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// async function getUser() {
//     return {

//     }

// }

// console.log(getUser());

// getUser().then((Response) => console.log(Response))


async function getUser() {
    try {

        const response = await fetch("https://api.github.com/users/dheesimha")
        const data = await response.json()
        console.log(data)
    }

    catch (error) {
        console.log(error);
    }
}


getUser();
