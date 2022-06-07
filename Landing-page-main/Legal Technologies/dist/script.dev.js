"use strict";

var burgerMenu = document.querySelector('.burgerMenu');
var sideBar = document.querySelector('.blockSideBar');

function openBurger() {
  burgerMenu.children[0].classList.toggle('menu-top-click');
  burgerMenu.children[1].classList.toggle('menu-middle-click');
  burgerMenu.children[2].classList.toggle('menu-bottom-click');
  sideBar.classList.toggle('activeSideBar');
  console.log(sideBar);
}