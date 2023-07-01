const button = document.querySelector("button");
const email = document.querySelector("#email");
const error = document.querySelector("#error");

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

button.addEventListener("click", () => {
    removeError();
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        location.replace("/success.html");
    } else {
        showError();
    };
});

window.addEventListener('resize', function() {
    const image = document.getElementById('illustration');
    if (window.innerWidth < 900) {
      image.src = '/assets/images/illustration-sign-up-mobile.svg';
    } else {
        image.src ="/assets/images/illustration-sign-up-desktop.svg";
    };
  });