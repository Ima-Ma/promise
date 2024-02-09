setTimeout(function(){
    console.log("hello World!")
} , 4000)
// setInterval(function(){
//     document.write("wow")
// },2000)

let firstPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This is first promise")
    },2000)
})

let secondPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'ali', password:'12345'})
    },2000)
})
secondPromise.then(function(user){
    console.log(user)
})
let thirdPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'imama' , email:'imama@gmail.com'})
    },2000)
})
thirdPromise.then(function(abc){
    return abc.email;
}).then(function(Email){
    console.log(Email)
})
let fourPromise = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name:'abc',password:'8756'})
        }
        else{
            reject('error : something went wrong here')
        }
    },4000)
})
fourPromise.then(function(apple){
    return apple.name;
}).then(function(myName){
    console.log(myName)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('Promise has been resolve or rejected!')
})

let fivePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({party:'party' , email:'party@gmail.com'})
        }
        else{
            reject('Error in this js code')
        }
    },2000)
})
async function consumedPromiseFive(){
    try{
        let resp =  await fivePromise;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFive()


async function getAllUser(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        document.write(JSON.stringify(data))
    }
    catch(error){
        console.log(error);
    }
}
getAllUser()
