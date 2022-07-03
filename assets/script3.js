const BASE_URL = 'https://api.thecatapi.com/v1/images/search'

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()
    return json[0].url
  } catch (e) {
    console.log(e.message)
  }
}

const loadImg = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await getCats()
}

const button = document.getElementById('change-cat')
button.addEventListener('click', loadImg)

loadImg()
