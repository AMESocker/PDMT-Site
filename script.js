const navHome = document.getElementById('nav-home');
const homeEle = document.getElementById('home');
const navQuote = document.getElementById('nav-quote');
const quoteEle = document.getElementById('quote');
const navDes = document.getElementById('nav-des');
const desEle = document.getElementById('destinations');
const navOnline = document.getElementById('nav-online');
const onlineEle = document.getElementById('online');
const navDisDes = document.getElementById('nav-dis-des');
const disDesEle = document.getElementById('disney-destinations');
const scLogoEle = document.getElementById('scLogo')
const navTeam = document.getElementById('nav-team')
const teamEle = document.getElementById('team')
const cruiseSection = document.getElementById('cruise-section');
const cruiseRadioYes = document.getElementById('cruise-radio-yes');
const cruiseRadioNo = document.getElementById('cruise-radio-no');

//----Section Display----
homeEle.style.display = 'contents'
quoteEle.style.display = 'none'
desEle.style.display = 'none'
onlineEle.style.display = 'none'
cruiseSection.style.display = 'none'
teamEle.style.display = 'none'
// disDesEle.style.display = 'none'

//----Event Listeners----
navHome.addEventListener('click', () => {
  navHome.classList.add('active')
  navQuote.classList.remove('active')
  navDes.classList.remove('active')
  navTeam.classList.remove('active')
  console.log('Home')
  homeEle.style.display = 'contents'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
teamEle.style.display = 'none'

  // disDesEle.style.display = 'none'
});
navQuote.addEventListener('click', () => {
  navQuote.classList.add('active')
  navHome.classList.remove('active')
  navDes.classList.remove('active')
  navTeam.classList.remove('active')
  console.log('Quote')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'contents'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
teamEle.style.display = 'none'

  // disDesEle.style.display = 'none'
});
navDes.addEventListener('click', () => {
  navDes.classList.add('active')
  navQuote.classList.remove('active')
  navHome.classList.remove('active')
  navTeam.classList.remove('active')
  console.log('Destinations')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'contents'
  onlineEle.style.display = 'none'
teamEle.style.display = 'none'

  // disDesEle.style.display = 'none'
});
navTeam.addEventListener('click',() =>{
  navTeam.classList.add('active')
  navDes.classList.remove('active')
  navQuote.classList.remove('active')
  navHome.classList.remove('active')
  console.log('Meet our Team')
  teamEle.style.display = 'contents'
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
  onlineEle.style.display = 'none'
})
// navOnline.addEventListener('click', () => {
//   console.log('Online')
//   homeEle.style.display = 'none'
//   quoteEle.style.display = 'none'
//   desEle.style.display = 'none'
//   onlineEle.style.display = 'contents'
//   disDesEle.style.display = 'none'
// });
// navDisDes.addEventListener('click',()=>{
//   navDisDes.classList.toggle('active')
//   homeEle.style.display = 'none'
//   quoteEle.style.display = 'none'
//   desEle.style.display = 'none'
//   onlineEle.style.display = 'none'
//   disDesEle.style.display = 'contents'
//   dclEle.style.display = 'none'
//   wdwEle.style.display = 'none'
// })
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

//----Disney Navigation----
const dclNav = document.getElementById('nav-dcl');
const dclEle = document.getElementById('dcl');
const wdwNav = document.getElementById('nav-wdw');
const wdwEle = document.getElementById('wdw')

// dclNav.addEventListener('click',()=>{
//   dclEle.style.display = 'contents'
//   wdwEle.style.display = 'none'
// })

// wdwNav.addEventListener('click',()=>{
//   dclEle.style.display = 'none'
//   wdwEle.style.display = 'contents'
// })