'use strict';
// RISKY PRIAVATE MESSAGE
const privateMessage = document.querySelector('.mes-pos')
const messageInfo = document.querySelector('.message-info')
const markAll = document.querySelector('.mark-all');
const message = document.querySelectorAll('.message');
let notificationNumber = 8;


privateMessage.addEventListener('click', function() {
 messageInfo.classList.toggle('hidden');
})
// CHANGE OF BACKGROUND COLOR FOR CLICK ON EACH NOTIFICATION
for(let i=0; i < message.length; i++) {
 message[i].addEventListener('click', function(){
 message[i].style.backgroundColor = 'white';
    if(notificationNumber > 0) {
  notificationNumber--;
  document.querySelector('.not-no').textContent = notificationNumber;
  } else {
   document.querySelector('.not-no').textContent = 0;
  }
 })
 markAll.addEventListener('click', function(){
 document.querySelector('.not-no').textContent = 0;
 message[i].style.backgroundColor = 'white';
 })
}













