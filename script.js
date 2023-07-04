 var btnFe = document.getElementById("btn-fe");

    btnFe.addEventListener("mouseover", function() {
        // Calcula posições aleatórias
        var posX = Math.random() * (window.innerWidth - btnFe.offsetWidth);
        var posY = Math.random() * (window.innerHeight - btnFe.offsetHeight);

        // Define as posições do botão
        btnFe.style.position = "absolute";
        btnFe.style.left = posX + "px";
        btnFe.style.top = posY + "px";
    });