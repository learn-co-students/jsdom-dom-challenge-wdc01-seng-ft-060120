document.addEventListener('DOMContentLoaded', function(){
    let count = document.getElementById('counter');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let ul = document.querySelector('.likes');
   
    let heart = document.getElementById('heart');
    
    
    function addSecond(){
        let countAsInt = parseInt(count.textContent, 10); 
        countAsInt += 1;
        count.textContent = countAsInt;
        console.log(countAsInt);
    };

    function minusSecond(){
        let countAsInt = parseInt(count.textContent, 10); 
        countAsInt -= 1;
        count.textContent = countAsInt;
        console.log(countAsInt);
    };

    function clickHeart(){
        let li = document.createElement("li");
     let someLi = ul.appendChild(li);
     let newLi =someLi.innerText = `${count.textContent} has been liked time`

      console.log(count.textContent)
    };


    setInterval(addSecond, 1000);
    // let interval = window.setInterval(addSecond, 1000);
    // console.log(interval);


    plus.addEventListener('click', function(e){
        addSecond();
    });
    minus.addEventListener('click', function(e){
        minusSecond();
    });

    heart.addEventListener('click',function(e){
        clickHeart();
    });

})


