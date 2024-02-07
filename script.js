function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a imagem
  // subistiuir a imagem
  // se tiver light, mode, aducionar imagem light
  // se tiver sem light mode manter a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "Foto de perfil.jpeg")
  } else {
    img.setAttribute("src", "Eu 2.jpeg")
  }
}

/*const switchButton = document.querySelector("#button-theme")

switchButton.addEventListener("click", (e) => {
	if (switchButton.classList.contains("sun")) {
		switchButton.classList.add("moon")
		switchButton.classList.remove("sun")
	} else if (switchButton.classList.contains("moon")) {
		switchButton.classList.remove("moon")
		switchButton.classList.add("sun")
	}
})*/
