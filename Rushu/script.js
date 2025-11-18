function submitform(event) {
    event.preventDefault();
    let inp_name = document.getElementById("name");
    let inp_email = document.getElementById("email");
    let inp_message = document.getElementById("message");
  
    let nameValue = inp_name.value;
    let emailValue = inp_email.value;
    let messageValue = inp_message.value;
  
    alert(`Form submitted successfully name is ${nameValue} and email is ${emailValue} and message is ${messageValue}`);
  }

