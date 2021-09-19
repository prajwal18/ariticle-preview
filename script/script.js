
function myfunc() {
    document.getElementsByClassName("share")[0].classList.toggle("active");
    document.getElementsByClassName("svgElem")[0].classList.toggle("active");

    if(document.getElementById("change").style.display == "flex"){
        document.getElementById("change").style.display = "none";
    } else {
        document.getElementById("change").style.display = "flex"
    }
}