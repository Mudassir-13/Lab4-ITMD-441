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
(function () { 
    document.querySelector('.bg-gray-800.text-white.p-4.mt-12').style.backgroundColor = "#2563EB"
})();

//2A
(function () { 
    document.querySelector("#services").querySelectorAll("span.material-symbols-outlined").forEach(icon => {
    icon.style.color = "#47C714";
});
})();

//2B
(function () { 
    document.querySelector("#services > div > div > div:nth-child(1) > span").textContent = "ads_click";
})();

//3A
(function() {
    const container = document.querySelector("#solutions .grid");
    if (window.innerWidth >= 1024) {
        container.style.gridTemplateColumns = "repeat(4, 1fr)";
    }
})();

//3B
(function() {
    document.querySelector('img[alt="Musicians"]').src = "https://fastly.picsum.photos/id/453/400/300.jpg?hmac=19cErdap35ZD3TFJZzBb6kEwO8dGJC90VTCHvuabLf0";
})();