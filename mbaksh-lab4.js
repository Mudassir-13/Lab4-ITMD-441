// M Baksh
// ITMD 441-02 Undergraduate Student


//1A
(function () { 
    document.querySelector("#hero h1").textContent = "Uplift Your Brand with Stellar Marketing"; 
})();

//1B
(function () { 
    document.querySelector("#hero p").innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.";
})();

//1C
(function () { 
    document.querySelector("#hero").style.backgroundImage = "url('https://fastly.picsum.photos/id/683/1280/720.jpg?hmac=MorP0xeZ8ldA3Xsf3cmIbrsN-jz3Omu7piIVSyv3jMk')";
})();

//1D
(function () { 
    document.querySelector('a[href="contact.html"]').remove();
})();

//1E
(function() {
    const nav = document.querySelector("header");
    if (nav) {
        nav.style.backgroundColor = "#1F2937"; 
    }
})();

//1F
(function() {
    document.querySelectorAll("h2").forEach(function(heading) {
        heading.style.textAlign = "center";
    });
})();

//2A
(function () { 
    document.querySelector("#services").querySelectorAll("span.material-symbols-outlined").forEach(icon => {
    icon.style.color = "#47C714";
});
})();

//2B
(function() {
    const digitalIcon = document.querySelector('span[data-icon="digital"]');
    if (digitalIcon) {
        digitalIcon.textContent = "ads_click";
    }
})();

//3A
(function() {
    const grid = document.querySelector('[data-section="product_cards"]');
    if (grid) {
        function applyGrid() {
            if (window.innerWidth >= 1024) {
                grid.style.display = "grid";
                grid.style.gridTemplateColumns = "repeat(4, 1fr)";
            } else {
                grid.style.gridTemplateColumns = "";
            }
        }
        applyGrid();
        window.addEventListener("resize", applyGrid);
    }
})();

//3B
(function() {
    document.querySelector('img[alt="Musicians"]').src = "https://fastly.picsum.photos/id/453/400/300.jpg?hmac=19cErdap35ZD3TFJZzBb6kEwO8dGJC90VTCHvuabLf0";
})();