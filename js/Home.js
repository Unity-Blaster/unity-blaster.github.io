function Welcome() {
    window.alert('Hello & Welcome!');

    var nName = prompt("What's Your Name?");
    document.getElementById("dName").innerText = " " + nName;
    document.getElementById("Hii").innerText = "Hi";

};

Welcome();
// ? 
// *
// !
// if (nName=null){ 
//     var nName = "!";
//     document.getElementById("Name").innerText = "Hi" + nName;
// } else {
//     nName = nName
//     document.getElementById("Name").innerText = "Hi " + nName + "!";
// }

// pre-loader stuff
// he1.style.background = 'linear-gradient(-45deg, rgb('+r1+','+g1+','+b1+'), rgb('+r2+','+g2+','+b2+'), rgb('+r3+','+g3+','+b3+'), rgb('+r4+','+g4+','+b4+'), rgb('+r5+','+g5+','+b5+'), rgb('+r6+','+g6+','+b6+'), rgb('+r7+','+g7+','+b7+'), rgb('+r8+','+g8+','+b8+'))';
//     he1.style.backgroundSize = '400% 400%';
//     he1.style.animation = 'gradient 40s ease infinite';
// #loader-wrapper.loader-sec

// LoaderWrapper.style.width = screen.width;
// LoaderWrapper.style.height = screen.height;

// $(document).ready(function(){
//     setTimeout(function(){
//         $('body').addClass('loaded');
//         $('h1').css('color','#222222');
//     }, 3000);
//     Welcome();
// });