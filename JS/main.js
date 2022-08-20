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













// ----------------------------------------------------------------------------------------------------------------------

let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let recent_volume= document.querySelector('#volume_c');
let slider = document.querySelector('#duration_slider');





let timer;
let index_no = 0;
let Playing_song = false;
let muted = false;


//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Arabic kuthu",
     path: "./Songs/1.mp3",
     singer: "Anirudh ravichander, Jonita gandhi"
   },
   {
     name: "Kadavule Pole",
     path: "./Songs/2.mp3",
     singer: "Karthik"
   },
   {
     name: "Naan Un",
     path: "Songs/3.mp3",
     singer: "Arjit singh"
   },
   {
    name: "Kudukku",
     path: "Songs/4.mp3",
     singer: "Vineeth sreenivasan"
   },
   {
    name: "Dilbar",
     path: "Songs/5.mp3",
     singer: "Neha kakkar"
   }


];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
  artist.innerHTML = All_song[index_no].singer;
  track.load();

	timer = setInterval(range_slider ,1000);
}

load_track(index_no);








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


























// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
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
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
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
           if(index_no < All_song.length - 1){
            index_no += 1;
            load_track(index_no);
            playsong();
          }else{
            index_no = 0;
            load_track(index_no);
            playsong();
        
          }
		       
           }
	    }
     