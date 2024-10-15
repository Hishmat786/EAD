/////////////////////1st Example/////////////////////////
// console.log("1st")
// function getUser() {
//     return Promise.resolve("User not fetched");
// }

// function getOrders() {
//     return Promise.resolve("Orders fetched");
// }

// getUser()
//     .then((user) => {
//         console.log(user);
//         return getOrders();
//     })
//     .then((orders) => {
//         console.log(orders);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

////////////////////////2nd Example////////////////////////////
// // console.log("2nd")
// function processData() {
//     return new Promise((resolve, reject) => {
//         let isError = true;
//         if (isError) {
//             reject("rejected promises");
//         }
//         resolve("Data processed successfully");
//     });
// }

// processData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

////////////////////////////3rd Example///////////////////////////////////

// let fetchUser = new Promise(
//     (resolve) => setTimeout(() => 
//         resolve("User fetched"), 
//     1000));

// let fetchOrders = new Promise(
//     (resolve) => setTimeout(() => 
//         resolve("Orders fetched"), 
//     2000));

// Promise.all([fetchUser, fetchOrders])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

///////////////////////////////4th error example//////////////////////////////////////////
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Failed to fetch data");
//         }, 1000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Request complete");
//     });
