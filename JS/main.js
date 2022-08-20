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
let recent_volume= document.querySelector('#volume');
let slider = document.querySelector('#duration_slider');





let timer;
let index_no = 0;
let Playing_song = false;

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




