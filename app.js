const subscribtion = document.querySelector(".subscription");
const main = document.querySelector("main");
const subscribed = document.querySelector('.subscribed');
const input = document.querySelector("#input")
const errorText = document.querySelector(".error-text")
const body = document.querySelector("body")


/* Subscription click event */
subscribtion.addEventListener( "click", function () {
   if (input.value.includes("@") & input.value.includes(".com")){
        if(main.classList.contains("display")) {
            main.classList.remove("display");
        }
        else{
            subscribed.classList.remove('display');
            main.classList.add("display");
          /*   body.style.background = "white"; */
        }
    }
    else{
        input.classList.add("error");
        errorText.style.display = "block";
        input.style.border-color == "red";
        input.style.border = "2px";
    }
    
}) 


