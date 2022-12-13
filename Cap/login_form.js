const fonts=["cursive","sans-serif","serif","monospace"];
let captchavalue="";
var regName = /\d+$/g; 
function initCaptcha(){
				generateCaptcha();
				setCaptcha();
	}
function generateCaptcha(){
	let value=btoa(Math.random()*1000000000);
	value=value.substr(0,5+Math.random()*5)  ;
	captchavalue=value;
	}
function setCaptcha(){
	let html = captchavalue.split("").map((char)=>{
	const rotate = -20 + Math.trunc(Math.random()*30);
	const font = Math.trunc(Math.random()*fonts.length);
	return `<span style='transform:rotate(${rotate}deg);font-family:${fonts[font]}'>${char}</span>`;
	}).join("");
	document.querySelector(".login-form .captcha .preview").innerHTML=html;
	}

function verificate(){
	let name=document.getElementById("username").value;
	let pass=document.getElementById("password").value;
	let capt=document.getElementById("captcha-form").value;
	
	if (name == "" || regName.test(name)) {
                    window.alert("Please enter your name properly.");
                    return false;
                }
	
	if(pass.length <8){
                    alert("Password should be atleast 8 character long");
                    return false;
 
                }
	if (capt == "" || capt!=captchavalue) {
                    window.alert("Incorrect Captcha.");
                    return false;
                }
	return true;
}



