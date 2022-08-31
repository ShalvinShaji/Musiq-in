/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let recent_volume= document.querySelector('#volume_c');
let slider = document.querySelector('#duration_slider');


let timer;
var index_no;
let Playing_song = false;
let muted = false;




let track = document.createElement('audio');




let Songs = [
  {
    name: "Let Me Love You",
    path: "./Songs/letmelove.mp3",
    singer: "D J Snake, Justin Bieber"
  },
  {
    name: "No Lie",
    path: "./Songs/nolie.mp3",
    singer: "Sean Paul, Dua Lipa"
  },
  {
    name: "Takeaway",
    path: "./Songs/illenium.mp3",
    singer: "Illenium, The Chainsmokers, Lennon Stella"
  },
  {
    name: "24K Magic",
    path: "./Songs/24kmagic.mp3",
    singer: "Bruno Mars"
  },
  {
    name: "1, 2, 3",
    path: "./Songs/123.mp3",
    singer: "Sofia Reyes, Jason Derulo, De La Ghetto"
  },
  {
    name: "Cheap Thrills",
    path: "./Songs/cheapthrills.mp3",
    singer: "Sia"
  },
  {
    name: "Yummy",
    path: "./Songs/yummy.mp3",
    singer: "Justin Bieber"
  },
  {
    name: "Better",
    path: "./Songs/better.mp3",
    singer: "Khalid"
  },
  {
    name: "Sorry",
    path: "./Songs/sorry.mp3",
    singer: "Justin Bieber"
  },
  {
    name: "Hate me",
    path: "./Songs/hateme.mp3",
    singer: "Ellie Goulding, Juice WRLD"
  },
  {
    name: "Señorita",
    path: "./Songs/senorita.mp3",
    singer: "Camila Cabello, Shawn Mendes"
  },
  {
    name: "The Box",
    path: "./Songs/box.mp3",
    singer: "Roddy Ricch"
  },

];

function Startplay(index_n)
{
  
  clearInterval(timer);
	reset_slider();
	track.src = Songs[index_n].path;
	title.innerHTML = Songs[index_n].name;	
  artist.innerHTML = Songs[index_n].singer;
  
  
	timer = setInterval(range_slider ,1000);
  playsong();
  
  
}






function justplay(){
  if(Playing_song==false){
    playsong();

  }else{
    pausesong();
  }
}



//play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="bx bx-pause-circle"></i>';
 }
 
//pause song
function pausesong(){
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="bx bx-play-circle"></i>';
 }
 
 
 // next song
//  function next_song(){
//   if(Playing_song == true){
//     if(index_no < Songs.length - 1){
//       index_no += 1;
//       Startplay(index_no);
//     playsong(index_no);
//   }else{
//     index_no = 0;
//     Startplay(index_no);
//     playsong();
 
//   }
//  }
//  else{
//   track.pause();
//  }
// }
 
 
 // previous song
//  function previous_song(){
//   if(Playing_song == true){
//   if(index_no > 0){
//     index_no -= 1;
//     Startplay(index_no);
//     playsong();
 
//   }else{
//     index_no = Songs.length;
//     Startplay(index_no);
//     playsong();
//   }
//  }
//  else{
//   track.pause();
//  }
// }





//reset slider
function reset_slider(){
  slider.value = 0;
}
 
 // change slider position 
 function change_duration(){
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
 }
 
 
 
 
 function range_slider(){
  let position = 0;
        
        // update slider position
    if(!isNaN(track.duration)){
       position = track.currentTime * (100 / track.duration);
       slider.value =  position;
        }
 
       
       // function will run when the song is over
       if(track.ended){

        play.innerHTML = '<i class="bx bx-play-circle"></i>';

          //  if(index_no < Songs.length - 1){
          //   index_no += 1;
          //   Startplay(index_no);
          //   playsong();
          // }else{
          //   index_no = 0;
          //   Startplay(index_no);
          //   playsong();
        
          // }
           
           }
      }
     
//mute sound function

function mute_sound(){
  
  if (muted==false){
    mute__track();
  }
  else if (muted==true){
    unmute_track();
  }

}

function mute__track(){
  track.volume=0;
  volume__active.innerHTML='<i class="bx bx-volume-mute"></i>'
  muted=true;
}

function unmute_track(){
 
 muted=false;
 volume__active.innerHTML='<i class="bx bx-volume-full"></i>'
 track.volume = recent_volume.value / 100;
}
// change volume
function volume_change(){
	track.volume = recent_volume.value / 100;
  volume__active.innerHTML='<i class="bx bx-volume-full"></i>'

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SWIPER

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints: {
  
    // when window width is >= 560px
    // 400: {
    //  slidesPerView: 2,
    //  spaceBetween: 30
    // },
    600: {
     slidesPerView: 2,
     spaceBetween: 30
    },
    // when window width is >= 640px
   
    1100: {
     slidesPerView: 4,
     spaceBetween: 20
    }
   }

});