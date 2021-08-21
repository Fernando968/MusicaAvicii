const Play_btn = document.getElementById("play")
const Pause_btn = document.getElementById("pause")
const audio = document.getElementById("audio")
const Stop_btn = document.getElementById("stop")
const imagen = document.getElementById("imagen")

Play_btn.addEventListener('click',()=>{
    audio.play();
    imagen.style.animationPlayState = "running"
})
Stop_btn.addEventListener('click',()=>{
    audio.load();
    imagen.style.animationPlayState = "paused"
})
Pause_btn.addEventListener('click',()=>{
    audio.pause();
    imagen.style.animationPlayState = "paused"
})