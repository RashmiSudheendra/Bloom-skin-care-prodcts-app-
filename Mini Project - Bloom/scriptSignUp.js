var enteredCaptcha = document.getElementById("captchaText")
var msg = document.getElementById("errmsg")
var captcha = document.getElementById("captcha");
var mod = document.getElementById("mod");

var nam = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var pwdmsg = document.getElementById("pwdmsg")

// Form Validation 

{

function generateCaptcha() {
    var uniquechar = "";
    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    enteredCaptcha.value = ""; // Clear old input
    
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i <= 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    console.log(uniquechar)
    captcha.innerHTML = uniquechar;
}

generateCaptcha();

function enterDetails(){
    if((nam.value=="")||(phone.value=="")||(email.value=="")||(password.value=="")||(cpassword.value=="")){
        msg.innerText="All the fields are mandatory to sign up"
    }else{
        return true;
    }
}

function phoneNumberValidation(){
    var phoneno = /^\d{10}$/;
    if(phone.value.match(phoneno))
    {
        // console.log("will call you")
        phone.style.borderColor="transparent"
        return true;
    }
    else
    {
        msg.innerText=`Please enter valid phone number`
        phone.focus();
        phone.style.borderColor="red"
        return false;
    }
}

function emailValidate() {
    var emId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(emId)) { 
        email.style.borderColor="transparent"
        return true;
    } else {
            msg.innerText="Invalid email address!";
            email.focus();
            email.style.borderColor="red"
            return false;
        } 
}

function pwdValidation(){
    if(password.value.length<7){
        pwdmsg.innerText="Enter strong password"
        password.focus();
    }
    else{
        if((password.value==cpassword.value)){
            // console.log("pwd matched")
            cpassword.style.borderColor="transparent"
            return true;
        }else{
            msg.innerText="Confirm password did not match"
            cpassword.focus();
            cpassword.style.borderColor="red"
            return false;
        }
    }
}
function captchaValidation() {
    const userInput = enteredCaptcha.value;   
    // Check whether the input is equal
    // to generated captcha or not
    mod.innerHTML=""
    if (userInput == captcha.innerHTML) {
        // console.log('Captach matched')
        captcha.style.borderColor="red"
        return true;  
    }
    else {
        msg.innerText='Invalid Captcha'
        captcha.focus();
        captcha.style.borderColor="red"
        return false;
    }
}

function checkall(){
    if ((enterDetails()==true)&&(phoneNumberValidation()==true)&&(emailValidate()==true)&&(pwdValidation()==true)&&(captchaValidation()==true))
    {
        console.log("All is well")
        msg.innerText=""
        pwdmsg.innerText=""
        var moddiv = document.createElement('div')
            moddiv.classList.add('modal1')
            moddiv.innerHTML=`
            <div class="modal1">
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content" id="modal">
                            <div class="modal-body text-center">
                                <p>Hurray !!</p>
                                <p>Welcome to Bloom</p>
                                <p>Would you like to LogIn ?</p>
                                <button type="button" class="btn btn-default m-3 fw-bold" data-dismiss="modal" id="modalbtn" onclick="document.location='3. loginpage.html'">LogIn</button>
                                <button type="button" class="btn btn-default m-3 fw-bold" data-dismiss="modal" id="modalbtn" onclick="location.reload()">Later</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
          mod.append(moddiv)
    }
    else{
        // console.log("Check the entered data")
        return false
    }
}

}

// Pushing data to crud
   
{

    let url = "https://6350e0a43e9fa1244e4f518e.mockapi.io/Bloomusers/Users";
    async function createNewUserData() {
    let newUser = {
        name: nam.value ,
        phonenumber: phone.value,
        email: email.value,
        password: password.value
    };
    let data = await fetch(url, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    let res = await data.json();
    console.log(res);
    }
    createNewUserData();

}