const aha = () => {
    const a = prompt('Raqam Kiriting!!!');  
    const c = document.querySelector('h1');  
    let b = '';  

    const number = parseInt(a);

    if (!isNaN(number) && number > 0) {
        for (let i = 0; i < number; i++) {
            b += '*';  
        }
        c.innerText = b;  
    } else {
        alert('Iltimos, musbat raqam kiriting!');  
    }
};
aha()