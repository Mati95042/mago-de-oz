const list_container = document.getElementById("list-container");
const play_btn = document.getElementById("play-btn");
const volume_up_btn = document.getElementById("volume-up")
const volume_down_btn = document.getElementById("volume-down")
const prev_btn = document.getElementById("prev-btn");
const next_btn = document.getElementById("next-btn");
const cover_card_img = document.getElementById("cover-card-img");
const title_card = document.getElementById("title-card");
const progress = document.getElementById("progress-bar");
const audio = document.getElementById("audio");
let is_playing = false;
let index = 0;
let actual = 0;
const canciones = [
    {
        id: 1,
        title: "La Isla de las Siete Calaveras ",
        audio:"letra/1La Isla de las Siete Calaveras .mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 2,
        title: "Al Abordaje",
        audio:"letra/2Al Abordaje.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 3,
        title: "Resacosix en la Pandemia",
        audio:"letra/3Resacosix en la Pandemia.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 4,
        title: "Nunca te fallaré",
        audio:"letra/4Nunca te fallaré.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 5,
        title: "La Dama del Mar",
        audio:"letra/5La Dama del Mar.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 6,
        title: "El aplauso herido",
        audio:"letra/6El aplauso herido.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 7,
        title: "La Pegatina-Tu madre es una cabra",
        audio:"letra/7La Pegatina-Tu madre es una cabra.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 8,
        title: "Guerra y paz",
        audio:"letra/8Guerra y paz .mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 9,
        title: "El Cervezo",
        audio:"letra/9El Cervezo.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 10,
        title: "Abrazos que curan",
        audio:"letra/10Abrazos que curan.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 11,
        title: "Quiero que apagues mi luz",
        audio:"letra/11Quiero que apagues mi luz.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 12,
        title: "La Vida Pirata",
        audio:"letra/12La Vida Pirata.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 13,
        title: "Bandera negra",
        audio:"letra/13Bandera negra.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 14,
        title: "Depués de la tormenta",
        audio:"letra/14Depués de la tormenta.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
    {
        id: 15,
        title: "Que el viento sople a tu favor",
        audio:"letra/15Que el viento sople a tu favor.mp3",
        cover:"Img/5.jpg",
        artist:"Mago de Oz",
    },
];
volume_up_btn.addEventListener('click', () =>{
    audio.volume = audio.volume + 0.1;
})
volume_down_btn.addEventListener('click', () =>{
    audio.volume = audio.volume - 0.1;
})

canciones.forEach((e)=>{
    list_container.insertAdjacentHTML("beforeend",
    `
     <div class="list-item" id="${e.id}">
        <img class="cover" src="${e.cover}" alt="${e.title}" />
        <div class="song-dates">
                <div>${e.title}</div>
                <div>${e.artist}</div>
        </div>
     </div>
    `
    )
});


const play_card = (abj_audio) => {
    const cover_card_img = document.getElementById("cover-card-img")
    cover_card_img.src = abj_audio.cover;
    title_card.innerHTML = abj_audio.title;
    artist_card.innerHTML = abj_audio.artist;
    is_playing = true;
    play_btn.innerHTML = "pause";
    index = abj_audio.id; 
};
 const play_audio = (id) => {
     const res = canciones.find((e) => e.id == id);
     if (res){
         audio.src = res.audio;
         audio.play();
         play_card(res);
         Animation_active();
         progress.max = audio.duration;
     }
 };
  const Animation_active = () =>{
      if (is_playing){
          cover_card_img.style.animationPlayState= "running";
      }
      else {
          cover_card_img.style.animationPlayState = "paused";
      }
  };
   list_container.addEventListener("click", (e) =>{
       if (e.target.matches("list-item")) {
           play_audio(e.target.id);
       }
       else if (e.target.matches(".cover")){
           play_audio(e.target.parentNode.id);
       }
       else if (e.target.matches(".song_data")){
           play_audio(e.target.parentNode.id);
       }
       else if (e.target.matches(".song-data div")){
           play_audio(e.target.parentNode.parentNode.id);
       }
   });
   play_btn.addEventListener("click", () =>{
       if (is_playing) {
           audio.pause();
           is_playing = false;
           play_btn.innerHTML = "play";
       }
       else{
           is_playing = true; 
    play_btn.innerHTML = "pause";
           audio.play();
       }
       Animation_active();
   });
   window.addEventListener("load", () => {
       progress.max = audio.duration;
       progress.min = 0;
       window.setInterval(() => {
           progress.value = audio.currentTime;
       }, 1000);
       progress.addEventListener("change", () =>{
           audio.currentTime = progress.value;
       });
   });
   next_btn.addEventListener("click", () =>{
       if (index < canciones.length){
           index++;
           play_audio(index);
       }
   });
prev_btn.addEventListener("click", () =>{
    if (index > 0) {
        index--;
        play_audio(index);
    }
});
renderizar_canciones(canciones);
const searche_input = document.getElementById("search-input");
searche_input.addEventListener("keyup", () =>{
    let filtrado = canciones.filter((e) =>
    e.title 
    .toLocaleLowerCase()
    .includes(searche_input.value.toString().toLocaleLowerCase())
    );
    renderizar_canciones(filtrado);
});

  