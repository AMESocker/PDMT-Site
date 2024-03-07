const navHome = document.getElementById('navHome');
const homeEle = document.getElementById('home');
const navQuote = document.getElementById('navQuote');
const quoteEle = document.getElementById('quote');
const navDes = document.getElementById('navDes')
const desEle = document.getElementById('destinations')

homeEle.style.display = 'contents'
quoteEle.style.display = 'none'
desEle.style.display = 'none'
navHome.addEventListener('click',()=>{
  console.log('Home')
  homeEle.style.display = 'contents'
  quoteEle.style.display = 'none'
  desEle.style.display = 'none'
})
navQuote.addEventListener('click',()=>{
  console.log('Quote')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'contents'
  desEle.style.display = 'none'
})
navDes.addEventListener('click',()=>{
  console.log('Destinations')
  homeEle.style.display = 'none'
  quoteEle.style.display = 'none'
  desEle.style.display = 'contents'
})