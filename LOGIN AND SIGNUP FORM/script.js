let signup = document.getElementById('signup');
let signin = document.getElementById('signin');
let namefield = document.getElementById('namefield');
let title = document.getElementById('title');
let lost = document.getElementById('lost');

signin.onclick = function()
{
    lost.style.display = "block";
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signup.classList.add("disable");
    signin.classList.remove("disable");
}

signup.onclick = function()
{
    lost.style.display = "none";
    namefield.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signup.classList.remove("disable");
    signin.classList.add("disable");
}