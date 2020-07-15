    document.addEventListener("DOMContentLoaded", function(e){
        const counter = document.getElementById('counter');

        setInterval(function(){
            counter.innerText = parseInt(counter.innerText, 10) + 1
        } ,1000);
        
        const minus = document.getElementById('minus');
        const plus = document.getElementById('plus');
        const heart = document.getElementById('heart');
        const likes = document.querySelector('.likes');
        const pause = document.getElementById('pause');
        const commentForm = document.getElementsByTagName('form')[0];

        
        const body = document.querySelector('body')
        body.addEventListener("click", function(e){
            if (e.target === minus){
                counter.innerText = parseInt(counter.innerText, 10) - 1;
            } else if (e.target === plus){
                counter.innerText = parseInt(counter.innerText, 10) + 1;
            } else if (e.target === heart){

                listItem = document.createElement('li');
                listItem.id = `${counter.innerText}`;
                if (document.getElementById(`${counter.innerText}`) ){
                    let x = document.getElementById(`${counter.innerText}`)
                    x.querySelector('span').innerText = parseInt(x.querySelector('span').innerText, 10) +1;
                } else {
                    likes.appendChild(listItem);
                    value = 1
                    listItem.innerHTML = `${counter.innerText} has been liked <span>${value}</span> times`
                }
            } else if (e.target === pause){
                console.log('paused')

            }
    


        })

        commentForm.addEventListener("submit", function(e){
            e.preventDefault();
            let submission = document.getElementById('comment-input')

            const comments = document.querySelector(".comments")
            let userComment = document.createElement("p")
            userComment.innerText = submission.value
            comments.appendChild(userComment)
            
            e.target.reset();
            

        })

    })


