function abrirMenu() {
    const menu = document.getElementById("menu");

    if(menu.style.left === "0px"){
        menu.style.left = "-400px";
    } else {
        menu.style.left = "0px";
    }
}