window.addEventListener("DOMContentLoaded", () => {
  console.log("This runs after the DOM has loaded")
});

window.onload = () => {
  console.log("This script loaded when all the resources and DOM are ready")
}

document.cookie = 'monster_name=cookie';
document.cookie = 'favorite_cookie=snickerdoodle';
document.cookie = 'favorite_icecream=chocolate';

window.alert(document.cookie)
