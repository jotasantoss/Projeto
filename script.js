function toggleMode() {
  const html = document.documentElement
  
  if(html.classList.contains("light")) {
    html.classList.remove("Light")
  } else {
    html.classList.add("light")
  }
}