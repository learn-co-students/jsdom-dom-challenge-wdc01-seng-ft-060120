document.addEventListener("DOMContentLoaded", function(e){
    const counter = document.getElementById("counter");
    const likeUl = document.querySelector(".likes");
    
    function increaseCounter(){
        counter.innerText = (parseInt(counter.innerText, 10) + 1)
    } 

    function decreaseCounter(){
        counter.innerText = (parseInt(counter.innerText, 10) - 1)
    } 

    function addLike() {
        const currentCounter = counter.innerText;

        if (likeUl.querySelector(`li[data-num="${currentCounter}"]`) === null) {
            let li = document.createElement("li");
            li.setAttribute("data-num", currentCounter)
            li.innerHTML = `${currentCounter} has been liked <span>1</span> time`
            likeUl.appendChild(li);
        } else {
            let li = likeUl.querySelector(`li[data-num="${currentCounter}"]`);
            let span = li.querySelector("span");
            let spanCounter = parseInt(span.innerText, 10) + 1;
            li.innerHTML = `${currentCounter} has been liked <span>${spanCounter}</span> times`;
        }

    }
    
    function startTimer(){
        setInterval (increaseCounter, 1000)
    }

    document.addEventListener('click', function(e) {
        if (e.target.id === "plus") {
            increaseCounter();
        } else if (e.target.id === "minus") {
            decreaseCounter();
        } else if (e.target.id === "heart") {
            addLike();
        }
    })
    
    
    startTimer();
    
})