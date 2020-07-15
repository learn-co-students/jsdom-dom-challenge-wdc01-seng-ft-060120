document.addEventListener("DOMContentLoaded", function(e){
    const counter = document.getElementById("counter")
    function increaseCounter(){
        counter.innerText = (parseInt(counter.innerText, 10) + 1)
        console.log("I counted")
    } 
    function decreaseCounter(){
        counter.innerText = (parseInt(counter.innerText, 10) - 1)
    } 
    
    function startTimer(){
        setInterval (increaseCounter, 1000)
    }
    
    
    startTimer()
    
})