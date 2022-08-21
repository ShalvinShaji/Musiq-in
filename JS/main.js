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

//SWIPER

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



































































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let recent_volume= document.querySelector('#volume_c');
let slider = document.querySelector('#duration_slider');


let timer;
let index_no;
let Playing_song = false;
let muted = false;




let track = document.createElement('audio');




let Songs = [
  {
    name: "Kurumbathi chundari nee",
    path: "./Songs/Malayalam/m1.mp3",
    singer: "vineeth sreenivasan"
  },
  {
    name: "Uyiril thodum",
    path: "./Songs/Malayalam/m2.mp3",
    singer: "vineeth sreenivasan"
  },
  {
    name: "Mizhyil",
    path: "./Songs/Malayalam/m3.mp3",
    singer: "Shahabaz aman"
  },
  {
    name: "Minunundae Mullapolae",
    path: "./Songs/Malayalam/m4.mp3",
    singer: "Karthik"
  },
  {
    name: "Lailakame",
    path: "./Songs/Malayalam/m5.mp3",
    singer: "Haricharan"
  }


];

function Startplay(index)
{
  var index_n=index;
  clearInterval(timer);
	reset_slider();
	track.src = Songs[index_n].path;
	title.innerHTML = Songs[index_n].name;	
  artist.innerHTML = Songs[index_n].singer;
  track.load();
	timer = setInterval(range_slider ,1000);
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="bx bx-pause-circle"></i>';
}




function justplay(){
  if(Playing_song==false){
    playsong();

  }else{
    pausesong();
  }
}

//reset slider
function reset_slider(){
  slider.value = 0;
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
 function next_song(){
  if(Playing_song == true){
  if(index_no < Songs.length - 1){
    index_no += 1;
    Startplay(index_no);
    playsong();
  }else{
    index_no = 0;
    Startplay(index_no);
    playsong();
 
  }
 }
 else{
  track.pause();
 }
}
 
 
 // previous song
 function previous_song(){
  if(Playing_song == true){
  if(index_no > 0){
    index_no -= 1;
    Startplay(index_no);
    playsong();
 
  }else{
    index_no = Songs.length;
    Startplay(index_no);
    playsong();
  }
 }
 else{
  track.pause();
 }
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
           if(index_no < Songs.length - 1){
            index_no += 1;
            Startplay(index_no);
            playsong();
          }else{
            index_no = 0;
            Startplay(index_no);
            playsong();
        
          }
           
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


