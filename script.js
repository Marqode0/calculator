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

    document.getElementById('fnameError').innerHTML = ''
    document.getElementById('emailError').innerHTML = ''
    document.getElementById('numberError').innerHTML = ''
    document.getElementById('dobError').innerHTML = ''
    document.getElementById('passwordError').innerHTML = ''
    document.getElementById('confirmPasswordError').innerHTML = ''
    document.getElementById('ageError').innerHTML = ''
    document.getElementById('stateError').innerHTML = ''
    document.getElementById('fileError').innerHTML = ''
    document.getElementById('genderError').innerHTML = ''
    document.getElementById('termsError').innerHTML = ''

    

    if( name.length < 10){
        document.getElementById('fnameError').innerHTML = "Enter atleast 10 Characters"
        return false
    }

    if(!email.includes ("@") || !email.includes (".")){
        document.getElementById('emailError').innerHTML = "Enter a Valid Email"
        return false
    }

   
    if (number.length !== 11){
        document.getElementById('numberError').innerHTML = "Enter 11 digits number"
        return false}
        
    
    if (birth == ""){
        document.getElementById('dobError').innerHTML = "Input Your Date of Birth"
        return false
    }

    if (password == ""){
        document.getElementById('passwordError').innerHTML = "Create a Password"
        return false
    } else if(password.length < 8){
        document.getElementById('passwordError').innerHTML = "Password must be atleast 8 characters"
        return false
    } else if(!/[!@#$%^&*]/.test(password)){
    document.getElementById('passwordError').innerHTML = "Password must contain a special character"
    return false
    } else if(!/[A-Z]/.test(password)){
        document.getElementById('passwordError').innerHTML = "Password must contain an uppercase letter"
        return false
    }

    if (confirm == ""){
        document.getElementById('confirmPasswordError').innerHTML = "Confirm Your Password"
        return false
    } else if (confirm !== password){
        document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match"
        return false
    }

    if (age == ""){
        document.getElementById('ageError').innerHTML = "Enter Your Age"
        return false
    } else if (age < 18){
        document.getElementById('ageError').innerHTML = "You must be at least 18 years old"
        return false
    }

    if (state == ""){
        document.getElementById('stateError').innerHTML = "Select Your State"
        return false
    }

    if (file == ""){
        document.getElementById('fileError').innerHTML = "Upload Your File"
        return false
    } else if (!file.endsWith('.pdf') && !file.endsWith('.docx') && !file.endsWith('.jpg') && !file.endsWith('.png')){
        document.getElementById('fileError').innerHTML = "File must be a PDF, DOCX, JPG, or PNG"
        return false
    } else if(document.getElementById('file').files[0].size > 2 * 1024 * 1024){
        document.getElementById('fileError').innerHTML = "File size must be less than 2MB"
        return false
    }

    if(!gender){
        document.getElementById('genderError').innerHTML = "please select a gender"
        return false
    }

    if (!terms){
        document.getElementById('termsError').innerHTML = "You must agree to the terms and conditions"
        return false
    }

    alert("Form submitted successfully!")
}