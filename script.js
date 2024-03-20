const navHome = document.getElementById('nav-home');
const homeEle = document.getElementById('home');
const navQuote = document.getElementById('nav-quote');
const quoteEle = document.getElementById('quote');
const navDes = document.getElementById('nav-des');
const desEle = document.getElementById('destinations');
const navOnline = document.getElementById('nav-online');
const onlineEle = document.getElementById('online');
const navDclDes = document.getElementById('nav-dcl-des');
const disDesEle = document.getElementById('disney-destinations');
const scLogoEle = document.getElementById('scLogo')
const cruiseSection = document.getElementById('cruise-section');
const cruiseRadioYes = document.getElementById('cruise-radio-yes');
const cruiseRadioNo = document.getElementById('cruise-radio-no');

//----Section Display----
homeEle.style.display = 'contents'
quoteEle.style.display = 'none'
desEle.style.display = 'none'
onlineEle.style.display = 'none'
cruiseSection.style.display = 'none'
disDesEle.style.display = 'none'

//----Event Listeners----
navHome.addEventListener('click', () => {
  console.log('Home')
  homeEle.style.display = 'contents'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
  disDesEle.style.display = 'none'
});
navQuote.addEventListener('click', () => {
  console.log('Quote')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'contents'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
  disDesEle.style.display = 'none'
});
navDes.addEventListener('click', () => {
  console.log('Destinations')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'contents'
  onlineEle.style.display = 'none'
  disDesEle.style.display = 'none'
});
navOnline.addEventListener('click', () => {
  console.log('Online')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'contents'
  disDesEle.style.display = 'none'
});
navDclDes.addEventListener('click',()=>{
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
  disDesEle.style.display = 'contents'
})
//----dynamic cruise display----
cruiseRadioYes.addEventListener('click',()=>{
  if(cruiseRadioYes){
    cruiseSection.style.display = 'contents'
  }
})
cruiseRadioNo.addEventListener('click',()=>{
  if(cruiseRadioYes){
    cruiseSection.style.display = 'none'
  }
})