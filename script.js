let text = document.querySelector("#color");
document.querySelector("button").addEventListener("click", () => {
    let colorletter = "";
    let letters = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++) {
        colorletter += letters[Math.floor(Math.random() * 16)];
    }
    let color = "#" + colorletter;
    text.innerHTML = color;
    document.body.style.background = color;
})