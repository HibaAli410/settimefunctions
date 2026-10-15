const heading = document.getElementById('heading')
//console.log(heading);
function changeHeading () {
  heading.textContent = 'Heading changed!'
}
function changeHeadingBack () {
  heading.textContent = 'Heading'
}
setTimeout(changeHeading, 8000)
// let you show first
changeHeadingBack()
setTimeout(order, 9000)
// with arraow functions
const ul = document.createElement('ul')

function order () {
  const li = document.createElement('li')
  const li1 = document.createElement('li')
  const li2 = document.createElement('li')
  li.innerText = 'Breakfast'
  li1.innerText = 'Lunch'
  li2.innerText = 'Dinner'

  ul.appendChild(li)
  ul.appendChild(li1)
  ul.appendChild(li2)
}
function display (abc, lmn) {
  let h1 = document.createElement('h1')
  h1.innerHTML = abc
  let h4 = document.createElement('h4')
  h4.innerHTML = lmn
  console.log(showid)
}
display('hiba', 'ali')
display('munnaza', 'sarosh')

document.body.appendChild(ul)
