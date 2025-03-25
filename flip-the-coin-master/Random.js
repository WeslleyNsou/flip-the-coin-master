var Random = document.getElementById('Random')

Random.addEventListener('click', function(){
    let result = Math.random() < 0.5 ? "Heads" : "Tail"
    document.getElementById('result-txt').innerHTML = result
    if(result === "Heads"){
        var img = document.getElementById('result-img') 

        var novaimg = document.createElement("img")
        novaimg.src = "resources/heads.svg"

        img.innerHTML = "";
        img.appendChild(novaimg)

    }else{
        var img = document.getElementById('result-img') 

        var novaimg = document.createElement("img")
        novaimg.src = "resources/tails.svg"

        img.innerHTML = "";
        img.appendChild(novaimg)
    }

})
