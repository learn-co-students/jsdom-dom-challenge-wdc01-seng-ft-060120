document.addEventListener("DOMContentLoaded", function(e){
    const counter = document.getElementById("counter");
    const likeUl = document.querySelector(".likes");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const submitButton = document.getElementById("submit");
    let timer = setInterval(increaseCounter, 1000);
    
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

    function pauseProgram() {
        minusButton.disabled = true; 
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
        clearInterval(timer);
        pauseButton.innerText = "resume";
    }

    function resumeProgram() {
        minusButton.disabled = false; 
        plusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
        timer = setInterval(increaseCounter, 1000);
        pauseButton.innerText = "pause";
    }

    document.addEventListener('click', function(e) {
        if (e.target.id === "plus") {
            increaseCounter();
        } else if (e.target.id === "minus") {
            decreaseCounter();
        } else if (e.target.id === "heart") {
            addLike();
        } else if (e.target.id === "pause" && e.target.innerText === "pause") {
            pauseProgram();
        } else if (e.target.id === "pause" && e.target.innerText === "resume") {
            resumeProgram();
        } else if (e.target.id === "submit") {
            e.preventDefault()
            const commentText = e.target.parentNode.querySelector("#comment-input").value;
            const p = document.createElement("p");
            const div = document.getElementById("list");
            p.innerText = commentText;
            div.appendChild(p);
            e.target.parentNode.querySelector("#comment-input").value = null
        }
    })
    
    
    
    
})