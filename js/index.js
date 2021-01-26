function goHere(){
    var nameValue = document.querySelector(".js-input-name").value;
    var emailValue = document.querySelector(".js-input-email").value;
    var passwordValue = document.querySelector(".js-input-password").value; 

    var formValue = {                                 
        name: nameValue,
        email: emailValue,
        data: {                                     
            password: passwordValue 
        }
    };
    console.log(formValue);
}