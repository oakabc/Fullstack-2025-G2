function hello () {
    alert("Hello World!")
    var a = prompt("Who are you ?")
    console.log(a)
    document.querySelector("h1").innerHTML = "Hello " + a
}
