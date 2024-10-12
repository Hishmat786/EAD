function getData() {
    return new Promise((resolve, reject) => {
        // get data using APIs
        let categories;
        setTimeout(function () {
            categories = [
                { "id": 1308, "name": "Electronic" },
                { "id": 1308, "name": "Garments" },
                { "id": 1308, "name": "Kids" }
            ];
            if (categories) {
                resolve(categories)

            }
            else {
                reject("category not found")
            }
        }, 2000);

    })
}


console.log("A")

const promise = getData();

promise.then((data) => {
    console.log(data)

    new Promise(function (res, rej) {
        let products;

        setTimeout(function () {
            products = "product of category " + data[0]?.name;
            if (products) {
                res(products);
            }
            else {
                rej("product not found")
            }

        }, 2000)
    }).then(products => console.log(products)).catch(err => console.log(err))




}).catch((err) => {
    console.log(err)
})

console.log("B")