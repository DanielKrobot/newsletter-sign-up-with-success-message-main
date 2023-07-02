const button1 = document.querySelector("#subscribe");
const button2 = document.querySelector("#dismiss");
const email = document.querySelector("#email");
const error = document.querySelector("#error");
const main = document.querySelector("main");
const success = document.querySelector("#success");

function showError() {
    error.style.display = "block";
    email.style.borderColor = "red";
    email.style.backgroundColor = "hsl(4, 100%, 80%)";
};

function removeError() {
    error.style.display = "none";
    email.style.borderColor = "hsl(231, 7%, 60%)";
    email.style.backgroundColor = "white";
};

button1.addEventListener("click", () => {
    removeError();
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        success.style.display = "grid";
        main.style.display = "none";
    } else {
        showError();
    };
});

button2.addEventListener("click", () => {
    removeError();
    success.style.display = "none";
    main.style.display = "grid";
    email.value = "";
});

window.addEventListener('resize', function() {
    const image = document.getElementById('illustration');
    if (window.innerWidth < 900) {
      image.src = '/assets/images/illustration-sign-up-mobile.svg';
    } else {
        image.src ="/assets/images/illustration-sign-up-desktop.svg";
    };
  });