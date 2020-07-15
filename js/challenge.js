document.addEventListener("DOMContentLoaded", function(e){
    const counter = document.getElementById("counter")
    function increaseCounter(){
        counter.innerText = (parseInt(counter.innerText, 10) + 1)
    } 
    function decreaseCounter(){
        counter.innerText = (parseInt(counter.innerText, 10) - 1)
    } 
    
    function startTimer(){
        setInterval (increaseCounter, 1000)
    }
    
    
    startTimer()
    
})