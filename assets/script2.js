const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
//const BASE_URL = 'https://thacopy.pw/catapi/rest/'
const catBtn = document.getElementById('change-cat')

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e))

  //return data.breeds
  // return data.webpurl
  //return json[0].url
}

const loadImg = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)

loadImg()
