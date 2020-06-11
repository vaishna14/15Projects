
//Set Count initial value to 0 
let count = 0;

//Get btns and value variables
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//Identify type of button
btns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentButton = e.currentTarget.classList
        // Based on type of button set count value;
        if (currentButton.contains('decrease')) {
            count--;
        }
        else if (currentButton.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        //Set Color for value span in UI 
        if (count < 0) {
            value.style.color = "red"
        } else if (count > 0) {
            value.style.color = "green"
        } else {
            value.style.color = "#222"
        }
        // Set DOM value for value in span in UI
        value.textContent = count;
    })

})





