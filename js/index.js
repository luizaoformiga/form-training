function goHere(){
    const nameValue = document.querySelector(".js-input-name").value;
    const emailValue = document.querySelector(".js-input-email").value;
    const passwordValue = document.querySelector(".js-input-password").value; 

    const formValue = {                                 
        name: nameValue,
        email: emailValue,
        data: {                                     
            password: passwordValue 
        }
    };
    console.log(formValue);
}