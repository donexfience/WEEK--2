
// Header Scroll fixed 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide in mobile while clicked
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
function validateName() {
    var nameInput = document.getElementById('contact-name');
    var nameError = document.getElementById('name-error');
    var name = nameInput.value.trim();//remove space at first and last at the time of sending

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    // Checking if only alphabets and a single space are used
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'full name with space';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone() {
    var phoneInput = document.getElementById('contact-phone');
    var phoneError = document.getElementById('number-error');
    var phone = phoneInput.value.trim(); // Get the value of the input and remove whitespace 
    if (phone.length === 0) {
        phoneError.innerHTML = 'Number is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = '10 digits required';
        return false;
    }
    if (!/^\d+$/.test(phone)) {
        phoneError.innerHTML = 'Only numbers are allowed';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail() {
    var EmailInput = document.getElementById('contact-email');
    var Emailerror = document.getElementById('Email-error');
    var Email = EmailInput.value.trim(); 
    if (Email.length === 0) {
        Emailerror.innerHTML = 'Email is required';
        return false;
    }
    if (!Email.match(/^[A-Za-z][\w.-]*@[A-Za-z]+\.[a-z]{2,4}$/)) {
        Emailerror.innerHTML='invalid email';
        return false;
    }
    Emailerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage() {
    var messageInput = document.getElementById('contact-message');
    var messageError = document.getElementById('message-error');
    var message = messageInput.value.trim();

    if (message.length === 0) {
        messageError.innerHTML = 'More characters are required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateAddress() {
    var addressInput = document.getElementById('contact-adress');
    var addressError = document.getElementById('adress-error');
    var address = addressInput.value.trim();

    if (address.length === 0) {
        addressError.innerHTML = 'More characters are required';
        return false;
    }

    addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateForm() {
    var isNameValid = validateName();
    var isPhoneValid = validatePhone();
    var isEmailValid = validateEmail();
    var isMessageValid = validateMessage();
    var isAddressValid = validateAddress();

    // Check if all validations are checked
    if (isNameValid && isPhoneValid && isEmailValid && isMessageValid && isAddressValid) {
      alert('Form submitted successfully!');
      return true;
    } else {
      alert('Please fix the errors in the form before submitting.');
      return false;
    }
  }



