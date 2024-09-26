var generateOtp = document.getElementById('btn3');
generateOtp.addEventListener('click', fun)
let inputOtp;
function fun()
{
    document.getElementById("div1").style.display='none';
    inputOtp = Math.trunc(Math.random()*10000);
    document.getElementById("btn4").innerHTML=inputOtp;
    document.getElementById('div2').style.display='block';
    document.getElementById('cross').style.display='block';
}

var cros = document.getElementById('cross');
cros.addEventListener('click',fun1)

function fun1()
{
     document.getElementById('div1').style.display='block';
     document.getElementById('div2').style.display=`none`;
}

var sub = document.getElementById('btn2');

sub.addEventListener('click', fun2)

function fun2()
{
    if(inputOtp==document.getElementById('btn1').value)
    {
        document.getElementById('content').innerHTML=`Access Granted`;
    }
    else{
        document.getElementById('content').innerHTML=`Access Denied`;
        document.getElementById('content').style.color='red';
    }
}


// let string;
// let otpContainer = document.getElementById('otpContainer');
// let boxContainer = document.getElementById('boxContainer');
// let inputBox = document.getElementById('inputBox');
// let result = document.getElementById('result');

// let generateOtp = () =>{
//     otpContainer.style.display='block';
//     boxContainer.style.display='none';
//     let number = Math.random(1000)*1000;
//     string = Math.round(number);
//     console.log(string);
//     document.getElementById('showOtp').innerHTML=string;
//     result.innerHTML='';
// }

// let cancel = () => {
//     otpContainer.style.display='none';
//     boxContainer.style.display='block';
// }

// let check = () => {
//     if(inputBox.value == string)
//     {
//         result.innerHTML="Access Granted";
//         result.style.color = "green";
//         inputBox.value = '';
//     }
//     else
//     {
//         result.innerHTML="Access Denaid";
//         result.style.color = "red";
//         inputBox.value = '';
//     }
// }