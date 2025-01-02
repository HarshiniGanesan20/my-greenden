var menubar = document.getElementById("menubar")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menubar.addEventListener("click", function () {

    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


// Product Search Functionality

var searchbox = document.getElementById("searchbox")

var productcontainer = document.getElementById("productcontainer")

var productlist = productcontainer.querySelectorAll("div")


searchbox.addEventListener("keyup", function (event) {

    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count++) {

        var productname = productlist[count].querySelector("h1").textContent.toUpperCase()

        if (productname.indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }

    }


})

