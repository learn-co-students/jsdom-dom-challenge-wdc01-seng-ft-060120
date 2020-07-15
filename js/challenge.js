document.addEventListener('DOMContentLoaded', function(){
    let count = document.getElementById('counter');
    
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

    setInterval(addSecond, 1000);
    // let interval = window.setInterval(addSecond, 1000);
    // console.log(interval);

    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');

    plus.addEventListener('click', function(e){
        addSecond();
    });
    minus.addEventListener('click', function(e){
        minusSecond();
    });

})


