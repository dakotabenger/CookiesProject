window.addEventListener("DOMContentLoaded", () => {
  console.log("This runs after the DOM has loaded")
});

window.onload = () => {
  console.log("This script loaded when all the resources and DOM are ready")
}

document.cookie = "monster_name=cookie"
document.cookie = 'favorite_cookie=snickerdoodle'
document.cookie = 'favorite_icecream=chocolate'


const setCookie = function (name, value) {
  document.cookie = `${name}=${value}`
}

setCookie("favoriteFood", "macandcheese")

const getCookies = () => {
  return document.cookie.split(" ");
}

console.log(getCookies());

const getCookieValue = function (name) {
  let cookieArr = document.cookie.split("=").join(" ").split(";").join(" ").split(" ")

  // console.log(cookieArr);
  for (i = 0; i < cookieArr.length; i += 3) {
    let key = cookieArr[i]
    if (key.includes(name)) {
      return cookieArr[i + 1];
    }
  }
  return null;
}


function deleteCookie(name) {
  if (getCookieValue(name)) {
    document.cookie = name + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  } else {
    console.log('Cookie was not found');
  }
}

deleteCookie('favoriteFood')

console.log(getCookieValue("monster_name"));

console.log(getCookieValue("favorite_cookie"));

console.log(getCookieValue("notAKey"));
