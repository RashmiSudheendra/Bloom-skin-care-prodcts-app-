// #872C6E
// #B73166

//Sign up Page
// Field Validation 
{
    var msg = document.getElementById("errmsg")
    var mod = document.getElementById("mod");
    
    var userId = document.getElementById("userId");
    var password = document.getElementById("password");
    var forgotpwd = document.getElementById("forgotpwd")
    
    
    function enterDetails(){
        if((userId.value=="")||(password.value=="")){
            msg.innerText="Enter Credentials"
        }else{
            return true;
        }
    }
    
    function phoneNumberValidation(){
        var phoneno = /^\d{10}$/;
        if(userId.value.match(phoneno))
        {
            // console.log("will call you")
            userId.style.borderColor="transparent"
            return true;
        }
        else
        {
            msg.innerText=`Please enter valid phone number`
            userId.focus();
            userId.style.borderColor="red"
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
    
    function detailsCheck(){
        if((userId.value=="")||(password.value=="")){
            msg.innerText="Enter Credentials"
        }else{
            return true;
        }
    }
}

// Greetings 
{
    let greeting = document.getElementById('greeting');
    let hour = new Date().getHours();
    let greetingTypes = ['Good morning', 'Good afternoon', 'Good evening'];
    let welcomeText = '';
    
    if (hour < 12){
        welcomeText = greetingTypes[0];
    }else if (hour < 18){
        welcomeText = greetingTypes[1];
    }else{
        welcomeText = greetingTypes[2];
    }
    
    greeting.innerHTML=`Welcome! ${welcomeText}<br>Have a nice time.`
}

// Phone number validation in forgot password modal

{

function phonenumvali(){
    var phonenum=document.getElementById("phonenum")
    var numerr=document.getElementById("numerr")
    var phoneno = /^\d{10}$/;
    console.log(phonenum.value)
    if(phonenum.value.match(phoneno)){
            // console.log("will call you")
            phonenum.style.borderColor="transparent"
            return true;
    }else{
        numerr.innerText=`Enter valid phone number`
        phonenum.focus();
        phonenum.style.borderColor="red"
        return false;
    }
}

var mod=document.getElementById("mod")

function showModal(){
    var moddiv = document.createElement('div')
    moddiv.classList.add('modal1')
    moddiv.innerHTML=
    `<div class="modal fade" id="frgtpwdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Verify Mobile Number</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="location.reload()"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label class="col-md-3 col-lg-3 col-xl-3 w-25" id="label">Phone Number</label>
              <input type="tel" title="Phone Number" placeholder="Phone Number" class="col-md-7 col-lg-7 col-xl-7 form-control w-100 fs-6 fw-bold" id="phonenum" required>
              <p class="text-center" id="numerr">kjb</p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="location.reload()">Close</button>
          <button type="button" class="btn btn-primary" onclick="phonenumvali()">Send OTP</button>
        </div>
      </div>
    </div>
  </div>` ;
  mod.append(moddiv)


}

}

// matching phone numbers and password to login.

{

let url = "https://6350e0a43e9fa1244e4f518e.mockapi.io/Bloomusers/Users";
async function matchData() {
    let pnum = userId.value;
    let pwd = password.value;
    let data = await fetch(url)
    let res = await data.json();
    console.log(res);
    // let match = res.map((element)=>console.log(`${element.phonenumber} and ${element.password}`));
    let match= res.filter((element)=>{if((pnum==element.phonenumber)&&(pwd==element.password)){console.log(element.name)}})
    console.log(match);
  }
  matchData();

}

// Log in validation
{

function Login(){
    if ((detailsCheck()==true)&&(phoneNumberValidation()==true))
    {
        matchData();
    }else{
        return false;
    }
}

}