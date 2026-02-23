function validateForm(){
    let name = document.getElementById('fname').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let birth = document.getElementById('DOB').value
    let password = document.getElementById('password').value
    let confirm = document.getElementById('confirmPassword').value
    let age = document.getElementById('age').value
    let state = document.getElementById('state').value
    let file = document.getElementById('file').value
    let gender = document.querySelector('input[name="gender"]:checked')
    let terms = document.getElementById('terms').checked
    let errorMessage = document.getElementById('errorMessage')

    errorMessage.innerHTML = '';
    document.getElementById('errorMessage').style.color = 'red';

    if( name.length <= 5){
        errorMessage.innerHTML = "Enter atleast 10 Characters"
        return false
    }

    if(!email.includes ("@") || !email.includes (".")){
        errorMessage.innerHTML = "Enter a Valid Email"
        return false
    }

   
    if (!number.length == 11){
        errorMessage.innerHTML = "Enter 11 digits number"
        return false}
        
    
    if (birth == ""){
        errorMessage.innerHTML = "Input Your Date of Birth"
        return false
    }

    if (password == ""){
        errorMessage.innerHTML = "Create a Password"
        return false
    } else if(password.length < 8){
        errorMessage.innerHTML = "Password must be atleast 8 characters"
        return false
    } else if(!/[!@#$%^&*]/.test(password)){
    errorMessage.innerHTML = "Password must contain a special character"
    return false
    } else if(!/[A-Z]/.test(password)){
        errorMessage.innerHTML = "Password must contain an uppercase letter"
        return false
    }

    if (confirm == ""){
        errorMessage.innerHTML = "Confirm Your Password"
        return false
    } else if (confirm !== password){
        errorMessage.innerHTML = "Passwords do not match"
        return false
    }

    if (age == ""){
        errorMessage.innerHTML = "Enter Your Age"
        return false
    } else if (age < 18){
        errorMessage.innerHTML = "You must be at least 18 years old"
        return false
    }

    if (state == ""){
        errorMessage.innerHTML = "Select Your State"
        return false
    }

    if (file == ""){
        errorMessage.innerHTML = "Upload Your File"
        return false
    } else if (!file.endsWith('.pdf') && !file.endsWith('.docx') && !file.endsWith('.jpg') && !file.endsWith('.png')){
        errorMessage.innerHTML = "File must be a PDF, DOCX, JPG, or PNG"
        return false
    } else if (file.size > 2 * 1024 * 1024){
        errorMessage.innerHTML = "File size must be less than 2MB"
        return false
    }

    if(!gender){
        errorMessage.innerHTML = "please select a gender"
        return false
    }

    if (!terms){
        errorMessage.innerHTML = "You must agree to the terms and conditions"
        return false
    }

    alert("Form submitted successfully!")
}