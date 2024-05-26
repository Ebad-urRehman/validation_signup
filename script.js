document.getElementById("empty-warn");

var showErrorItems = document.querySelectorAll('#empty-warn li');
var inputValues = document.querySelectorAll('#form-elements input') ;



console.log(inputValues[2])

function check_validity() {
    for (let i = 0; i < inputValues.length; i++) {
        if (inputValues[i].value.trim() === "") {
            showErrorItems[i].style.display='block';
        }
        else {
            showErrorItems[i].style.display='none';
        }
    };

    if (inputValues[0].value.trim().length < 8  && inputValues[0].value.trim().length != 0) {
        showErrorItems[4].style.display='block';
    }
    else {
        showErrorItems[4].style.display='none';
    }
    if (inputValues[1].value.trim().length < 8 && inputValues[1].value.trim().length != 0) {
        showErrorItems[5].style.display='block';
    }
    else {
        showErrorItems[5].style.display='none';
    }
    if (!inputValues[2].value.trim().includes('@')  && inputValues[2].value.trim().length != 0) {
        showErrorItems[6].style.display='block';
    }
    else {
        showErrorItems[6].style.display='none';
    }
    if (inputValues[3].value.trim().length < 11 && inputValues[3].value.trim().length != 0 || !inputValues[3].value.trim().startsWith(0) || inputValues[3].value.trim().length > 11) {
        showErrorItems[7].style.display='block';
    }
    else {
        showErrorItems[7].style.display='none';
    }
    // regular expressions containing start(^) of line end($) of line, conditions(?=.*[A-Z])
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_)/

    if (!regex.test(inputValues[1].value.trim()) && inputValues[1].value.trim().length != 0) {
        showErrorItems[8].style.display='block';
    }
    else {
        showErrorItems[8].style.display='none';
    }
    
    
}

// Attach the checkValidity function to the form's submit event
document.getElementById('form-elements').addEventListener('submit', function(event) {
    event.preventDefault();
  });