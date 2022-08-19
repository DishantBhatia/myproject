function validate(){

    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var date=document.getElementById("date").value;
    var phone=document.getElementById("phone").value;
    var message=document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

   

    var text;
    //Decision making Statements for client side form validation
    const format = /^\d{2}-\d{2}-\d{2}$/;

    if(fname.length <5){
        text="The entered First name is invalid";
        error_message.innerHTML=text;
        return false;
    }

    if(lname.length<5){
        text="The entered Last name is invalid";
        error_message.innerHTML=text;
        return false;
    }

    if(email.length<5 || email.indexOf("@") == -1){
        text="Email incorrect!"
        error_message.innerHTML=text;
        return false;
    }

    if(date.match(format)==null){
        text="Entered format of date is not correct!";
        error_message.innerHTML=text;
        return false;
    }

    if(isNaN(phone)|| phone.length!=10){
        text="Please enter a valid phone number";
        error_message.innerHTML=text;
        return false;
    }


    if (message.length<50){
        text="Please Enter the valid message";
        error_message.innerHTML=text;
        return false;
    }

    alert("Form Data is Submitted Successfully!!");
    return true;
}

