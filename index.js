var dataAlvo = new Date("Dec 25, 2023 00:00:00").getTime();

    var x = setInterval(function() {
      var agora = new Date().getTime();
      var diferenca = dataAlvo - agora;

      var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      var contagemRegressiva = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
      document.getElementById("contagem-regressiva").innerHTML = contagemRegressiva;

      if (diferenca < 0) {
        clearInterval(x);
        document.getElementById("contagem-regressiva").innerHTML = "Feliz Aniversário!";
        // Redireciona para outra página após a contagem regressiva
        window.location.href = "./parabens/parabens.html";
      }
    }, 1000);
    
    function restartMusic() {
      var audio = document.querySelector('audio');
      audio.currentTime = 0;  // Reinicia a música para o início
      audio.play();  // Inicia a reprodução novamente
   }