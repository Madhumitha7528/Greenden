var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})
closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

var productsContainer = document.getElementById("productscontainer")
var search = document.getElementById("search")
var productsList = productsContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUppercase()

    for(count=0;count<productsList.length;count=count+1){
        var productsname = productsList[count].querySelector("h1").textContent
        if(productsname.toUpperCase().indexOf(enteredValue)<0){
            productsList[count].style.display="none"
        }
        else{
            productsList[count].style.display="block"
        }
    }
})