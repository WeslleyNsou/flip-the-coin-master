var Random = document.getElementById('Random')

Random.addEventListener('click', function(){
    const result = math.Random() <= 0.5 ? "Heads" : "Tail";
    document.getElementById('result').textContent = result;
})