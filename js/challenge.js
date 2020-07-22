document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter')
    const heartButton = document.getElementById('heart')
    const plusButton = document.getElementById('plus')
    const minusButton = document.getElementById('minus')
    const pauseButton = document.getElementById('pause')
    const likesUl = document.querySelector('ul.likes')
    const submitButton = document.getElementById('submit')
    const commentDiv = document.querySelector('div#list')
    let commentInput = document.getElementById('comment-input')

    let timer = setInterval(() => {
        counter.innerHTML++
    }, 1000)

    // PRACTICE EVENT DELEGATION
    document.addEventListener('click', e => {
        const elementClicked = e.target
        if (elementClicked.matches('#minus')) {
            counter.innerHTML--
        }
        if (elementClicked.matches('#plus')) {
            counter.innerHTML++
        }
        if (elementClicked.matches('#heart')) {
            const currentCount = counter.innerText
            if (document.getElementById(currentCount) === null) {
                const likesLi = document.createElement('li')
                likesLi.innerHTML = `${currentCount} has been liked <span id=${currentCount}>1 time</span>`
                likesUl.append(likesLi)
            } else {
                let likesCounter = document.getElementById(currentCount)
                likesCounter.innerText = `${parseInt(likesCounter.innerText) + 1} times`
            }
        }
    })

    pauseButton.addEventListener('click', function (e) {
        if (pauseButton.innerHTML === ' pause ') {
            clearInterval(timer)
            pauseButton.innerHTML = 'resume'
            plusButton.disabled = true
            minusButton.disabled = true
            heartButton.disabled = true
            submitButton.disabled = true
        } else {
            pauseButton.innerHTML = ' pause '
            plusButton.disabled = false
            minusButton.disabled = false
            heartButton.disabled = false
            submitButton.disabled = false
            timer = setInterval(function () {
                counter.innerHTML++
            }, 1000)
        }
    })

    submitButton.addEventListener('click', function (e) {
        e.preventDefault()

        let newComment = document.createElement('p')
        newComment.innerHTML = commentInput.value
        commentDiv.append(newComment)

        commentInput.value = ''
    })
})
