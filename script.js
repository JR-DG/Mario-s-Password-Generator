// Generate Random Password //
function generate(){

    // Set Password Length / Complexity //
    let complexity = document.getElementById('customRange1').value;

    // Possible Password Values
    let values = 'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

    let password = '';

    // Create 4 Loop to Choose Password Characters //
    for(var i=0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // Add Password to Texbox / Display Area //
    document.getElementById('display').value = password;

}

// Set Default Length Display of 25 //
document.getElementById("length").innerHTML = "Length: 25";

// Function to Set Length Based on Slider Position //
document.getElementById("customRange1").oninput = function(){

    if(document.getElementById("customRange1").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("customRange1").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

// Function to Copy Password to Clipboard //
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}
