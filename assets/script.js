const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
Accept: Text
Cookie: Version = 1
mode: 'cors'
credentials: 'include'
//Origin: https://thatcopy.pw/catapi/rest/
//const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

//DOM
const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

//criação da função assíncrona
const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    //const data = await fetch('https://api.thecatapi.com/v1/images/search',
    // recebe a string e converte para JSON
    const json = await data.json()
    //imagem comprimida webpurl
    //return json.webpurl
    return json[0].url
  } catch (e) {
    //em caso de erro mostra a mensagem
    console.log(e.message)
  }
}

const loadImg = async () => {
  //const catImg = document.getElementById('cat')
  // Vai colocar no campo da imagem
  catImg.src = await getCats()
}

//const catBtn = document.getElementById('change-cat')[0]
catBtn.addEventListener('click', loadImg)

loadImg()

//https://web.dev/cross-origin-resource-sharing/?utm_source=devtools
