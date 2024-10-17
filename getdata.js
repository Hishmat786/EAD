function getData(){
    
    return new Promise((resolve, reject) =>{
        let data;
        
        setTimeout(function(){
            data = 'Data from server!'
            if(data){
                resolve(data)
            }
            else reject('Not data was found!')
        }, 3000)
        
        
    })
    
}


// (async  () => {
//     try{
//         console.log('A')
//         const data = await getData() // 3s
        
//         console.log(data)
        
//         console.log('B')
        
//     }
//     catch(err){
        
//         console.log('Error: ', err)
//     }
    
// })()

//  function callMe(){
//   return getData()
// }

// (async function(){
//     console.log(await callMe())
// })()

async function getCategories(){
    
    return [
            {id: 1, name:'Electronics'},
             {id: 2, name:'Men'},
              {id: 3, name:'Women'},
        ]
    
}


async function getProducts(cid){
    return [
            {id:1, name:'Charger'},
            {id:2, name:'iPhone'},
            {id:3, name:'iMac'},
        ]
}


async function getProductDetails(id){
    return new Promise((resolve, reject) =>{
        let data;
        
        setTimeout(function(){
            data = undefined
            if(data){
                resolve(data)
            }
            else reject('Not data was found!')
        }, 3000)
        
        
    })
}


(async function(){
    
    try {
        
        const [categories, products, prod]  = await Promise.allSettled([getCategories(), getProducts(1), getProductDetails(2)])
        console.log(categories)
        console.log(products)
        console.log(prod)
    
    }
    catch(err){
        
        console.log(err)
    }
    
    // const categories = await getCategories(); //3s
    // const products = await getProducts(1) //5s
    // const prod = await getProductDetails(2) // 4s
    
})()