document.addEventListener('DOMContentLoaded', function() {

    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesUl = document.querySelector('ul.likes');
    const submitButton = document.getElementById('submit');
    const commentDiv = document.querySelector('div#list');
    let commentInput = document.getElementById('comment-input');

    let timer = setInterval(() => { counter.innerHTML++ }, 1000);

    plusButton.addEventListener('click', function(e){
        counter.innerHTML++;
    });
    minusButton.addEventListener('click', function(e){
        counter.innerHTML--;
    });

    heartButton.addEventListener('click', function(e) {
        let number = counter.innerText;
        if (document.getElementById(number) !== null){
            let likesCounter = document.getElementById(number);
            likesCounter.innerText = `${parseInt(likesCounter.innerText) + 1} times`;
        } else {
            const likesLi = document.createElement('li');
            likesLi.innerHTML = `${number} has been liked <span id=${number}>1 time</span>`;
            likesUl.append(likesLi);
        }
    });

    pauseButton.addEventListener('click', function (e) {

        if (pauseButton.innerHTML === ' pause '){
            clearInterval(timer);
            pauseButton.innerHTML = 'resume';
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            submitButton.disabled = true;
        } else {
            pauseButton.innerHTML = ' pause ';
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            submitButton.disabled = false;
            timer = setInterval(function(){ counter.innerHTML++ }, 1000);
        }
    })

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(commentInput.value);
        
        let newComment = document.createElement('p');
        newComment.innerHTML = commentInput.value;
        commentDiv.append(newComment);

        commentInput.value = "";
    })
});