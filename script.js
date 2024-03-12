const navHome = document.getElementById('nav-home');
const homeEle = document.getElementById('home');
const navQuote = document.getElementById('nav-quote');
const quoteEle = document.getElementById('quote');
const navDes = document.getElementById('nav-des');
const desEle = document.getElementById('destinations');
const navOnline = document.getElementById('nav-online');
const onlineEle = document.getElementById('online')

//----Event Listeners----
homeEle.style.display = 'contents'
quoteEle.style.display = 'none'
desEle.style.display = 'none'
onlineEle.style.display = 'none'
navHome.addEventListener('click', () => {
  console.log('Home')
  homeEle.style.display = 'contents'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
})
navQuote.addEventListener('click', () => {
  console.log('Quote')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'contents'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
})
navDes.addEventListener('click', () => {
  console.log('Destinations')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'contents'
  onlineEle.style.display = 'none'
})
navOnline.addEventListener('click', () => {
  console.log('Destinations')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'contents'
})