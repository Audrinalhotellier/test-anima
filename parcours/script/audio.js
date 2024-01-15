function loadNewAudio(new_audio) {
    let source = document.getElementById('audioSource');
    let audio = document.querySelector('audio');
    
    source.src = new_audio;
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
    
  }