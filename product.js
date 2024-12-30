document.getElementById('container').style.display = 'none';
document.getElementById('accounts').addEventListener('click', () => {
    document.getElementById('container').style.display = 'block';
});

const closeBtn = document.getElementById('close-popup');
closeBtn.addEventListener('click', () => {
    container.style.display = 'none';
});


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>
    {
    container.classList.add("active");
    }
);
loginBtn.addEventListener('click', () =>
    {
    container.classList.remove("active");
    }
);