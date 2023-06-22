function toggleText(event) {
    var text = event.textContent || event.innerText;
    if(text== "NEI") {
        event.innerHTML = "JA"
    } else {
        event.innerHTML = "NEI"
    }
}
