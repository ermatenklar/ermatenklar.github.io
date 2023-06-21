function changeText() {
    var id = document.getElementsByClassName("btn")[0].id;
    if(id==1) {
        document.getElementById("text").innerHTML = "JA";
        document.getElementsByClassName("btn")[0].id=0
    } else {
        document.getElementById("text").innerHTML = "NEI";
        document.getElementsByClassName("btn")[0].id=1
    }
}