
const lightTheme  = "css/light.css";
const darkTheme   = "css/dark.css";
const sunIcon     = "img/SunIcon.svg";
const moonIcon    = "img/MoonIcon.svg";
const themeIcon   = document.querySelector("#theme-icon");
const theme       = document.querySelector("#theme");
 
setTheme(getCookie('theme'));

function setTheme (name)
{
  if (!name || name == 'light')
  {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
  }
  else
  {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
  }
  document.cookie = "theme="+name;
}

function getCookie(name) 
{
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) 
  {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function changeTheme() 
{
  cur_theme = getCookie('theme');
  if (cur_theme == 'light') setTheme('dark');
  else setTheme('light');
}