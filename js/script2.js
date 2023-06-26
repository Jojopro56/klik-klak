/*4*/

const modal4 = document.querySelector('.myModal-4');
const btn4 = document.querySelector('.submit-message');
const span4 = document.getElementsByClassName('close4')[0];

// Open 
btn4.addEventListener('click', function () {
    modal4.style.display = 'block';
});

// Dicht
span4.addEventListener('click', function () {
    modal4.style.display = 'none';
});

// klik zone als je uit de post wilt
window.addEventListener('click', function (event) {
    if (event.target === modal4) {
        modal4.style.display = 'none';
    }
});

/*submit button functions*/
function emptyFields() {
    const textarea = document.querySelector('.input-message');
    const input = document.querySelector('.input-mail');
    const button = document.querySelector('.submit-message');
  
    if (textarea.value === '' || textarea.value === textarea.placeholder ||
        input.value === '' || input.value === input.placeholder) {
        button.classList.add('shake');
        setTimeout(() => {
            button.classList.remove('shake');
        }, 400);
    } else {
        textarea.value = '';
        input.value = '';
    }
  }