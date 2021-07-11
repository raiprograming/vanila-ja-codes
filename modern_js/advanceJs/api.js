fetch('https://api.chucknorris.io/jokes/ramdom')
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log("data is: ",data.value);
})
.catch()