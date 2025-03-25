var Random = document.getElementById('Random')

Random.addEventListener('click', function(){
    let result = Math.random() < 0.5 ? "Heads" : "Tail"
    document.getElementById('result-txt').innerHTML = result
    if(result === "Heads"){
        
    }else{
        console.log('> 0.5')
    }

})
