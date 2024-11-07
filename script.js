function tooglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/eu.light.png")
    img.setAttribute(
      "alt",
      "Foto de jvinicius_80 com uma r3 verde em modo claro."
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/eu.png")
    img.setAttribute(
      "alt",
      "Foto de jvinicius_80 com um palitó preto e fundo de folhas"
    )
  }
}
