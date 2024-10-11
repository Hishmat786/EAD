const myfunction= (name, callback)=>{
    
    setTimeout(function(){
        callback(name)
    }, 2000)
}

console.log('a')
myfunction(("Hishamt"), (result) =>{
    console.log(result)
})
console.log('b')
console.log("this line from github")
