const divs = document.querySelectorAll('.next-main div');

function animateDivs() {
    divs.forEach((div, index) => {
        setTimeout(() => {
            div.classList.add('filled');
        }, index * 2000);
    });

    setTimeout(() => {
        divs.forEach(div => {
            div.classList.remove('filled');
        });
    }, divs.length * 2000);

    setTimeout(animateDivs, divs.length * 2000 + 4000);
}

animateDivs();
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
    let inputValue = this.value.replace(/\D/g, ''); // faqat raqamlarni olish
    let formattedValue = '+998 ';

    if (inputValue.length > 1) {
        formattedValue += `(${inputValue.substring(0, 2)})`; // Qavs ichidagi hudud kodi
    } else if (inputValue.length > 0) {
        formattedValue += `(${inputValue}`;
    }

    if (inputValue.length >= 3) {
        formattedValue += ` ${inputValue.substring(2, 5)}`; // 3 ta raqam keyingi qism
    }

    if (inputValue.length >= 6) {
        formattedValue += `-${inputValue.substring(5, 7)}`; // Keyingi 2 raqam
    }

    if (inputValue.length >= 8) {
        formattedValue += `-${inputValue.substring(7, 9)}`; // Oxirgi 2 raqam
    }

    this.value = formattedValue;
});

phoneInput.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && this.value.length <= 7) {
        e.preventDefault(); // Qavs va prefiks o'chirilmasligi uchun
    }
});

document.querySelector("#btn").addEventListener('click',function(){
    let inp1=document.querySelector("#name");
    let inp2=document.querySelector("#phone")

    inp1.value=''
    inp2.value=''
})