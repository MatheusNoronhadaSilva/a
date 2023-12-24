function restartMusic() {
   var audio = document.querySelector('audio');
   audio.currentTime = 0;  // Reinicia a música para o início
   audio.play();  // Inicia a reprodução novamente
}