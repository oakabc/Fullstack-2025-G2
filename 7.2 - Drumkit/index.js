// document.querySelector("button").addEventListener("click", handleClick)

// function handleClick() {
//     var a = prompt("คุณเป็นใคร")
//     alert("ฉันเป็น " + a)
// }

// // Anonymous Function
// document.querySelectorAll("button")[1].addEventListener("click", function (){
//     alert("นี่คือปุ่ม a เป็นการเรียกจาก Callback function")
// })

// // Arrow Function =>
// document.querySelectorAll("button")[2].addEventListener("click", () => {
//     alert("นี่คือปุ่ม s เป็นการเรียกจาก Arrow Function")
// })

// document.querySelectorAll("button")[3].addEventListener("click", () => alert("นี่คือปุ่ม d"))

for (var i = 0; i < document.querySelectorAll(".drum").length ; i++)
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    console.log(this) /// this of normal function 
    //console.log(this.document.activeElement.innerHTML) //arrow function - object ที่สร้างตอนโดน click
    
    if (this.innerHTML == 'w') {
         var audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    }
     if (this.innerHTML == 'a') {
         var audio = new Audio('sounds/tom-2.mp3')
        audio.play();
    }
     if (this.innerHTML == 's') {
         var audio = new Audio('sounds/tom-3.mp3')
        audio.play();
    }
     if (this.innerHTML == 'd') {
         var audio = new Audio('sounds/tom-4.mp3')
        audio.play();
    }
     if (this.innerHTML == 'j') {
         var audio = new Audio('sounds/crash.mp3')
        audio.play();
    }
     if (this.innerHTML == 'k') {
         var audio = new Audio('sounds/kick-bass.mp3')
        audio.play();
    }
     if (this.innerHTML == 'l') {
         var audio = new Audio('sounds/snare.mp3')
        audio.play();
    }

   
   
})

// document.querySelectorAll(".drum").forEach(b => {
//     b.addEventListener("click", ()=> alert('ฉันถูกกด'))
// })


document.addEventListener("keydown", function (event) {
    console.log(event.key)

    if (event.key == 'w') {
         var audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    }
     if (event.key == 'a') {
         var audio = new Audio('sounds/tom-2.mp3')
        audio.play();
    }
     if (event.key == 's') {
         var audio = new Audio('sounds/tom-3.mp3')
        audio.play();
    }
     if (event.key == 'd') {
         var audio = new Audio('sounds/tom-4.mp3')
        audio.play();
    }
     if (event.key == 'j') {
         var audio = new Audio('sounds/crash.mp3')
        audio.play();
    }
     if (event.key == 'k') {
         var audio = new Audio('sounds/kick-bass.mp3')
        audio.play();
    }
     if (event.key == 'l') {
         var audio = new Audio('sounds/snare.mp3')
        audio.play();
    }

})