/*Time,data js start*/ 

function showTime() {
  const date = new Date();
  document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  
  
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const date = new Date();
  const newDate = document.getElementById("date");
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('en-US', options);
  newDate.textContent = currentDate;
  setTimeout(showDate, 1000);
}
showDate();

/*Time,data js end*/


/*greeting start*/ 

function showGreeting() {
  const date = new Date();
  const hours = date.getHours();
  const greeting = document.querySelector('.greeting');
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;

  function getTimeOfDay() {
    if (6 <= hours && hours < 12) {  return ('morning')} else
    if (12 <= hours && hours < 18) {  return ('day')} else
    if (18 <= hours && hours < 24) {  return ('evening')}  else 
    if (0 <= hours && hours < 6) {  return ('night')};
   }
}
showGreeting()


function setLocalStorage() {
  const name = document.querySelector('.name');
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  const name = document.querySelector('.name');
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)


/*greeting end*/ 

