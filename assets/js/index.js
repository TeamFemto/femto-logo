/*/////////////////////////////
           FEMTOLOGO
/////////////////////////////*/

const FEMTO_INPUTS = document.querySelectorAll('.femto-input'),
      GENERATOR    = document.getElementsByClassName('femto-generator')[0],
      NAME         = GENERATOR.getElementsByClassName('femto-name')[0],
      DOWNLOAD     = document.getElementsByClassName('femto-link')[0]
let   DF_WEIGHT    = 6,
      DF_IMAGE     = 128

/*/////////////////////////////
        LOGO GENERATION
/////////////////////////////*/

FEMTO_INPUTS.forEach(input => {
  input.addEventListener('keyup', () => {
    NAME.innerHTML = ''
    NAME.style.fontSize = DF_WEIGHT - (input.value.split('').length / 4) + 'rem'
    const LETTERS = input.value.split('')
    LETTERS.forEach(element => {
      const SPAN = document.createElement('span')
      SPAN.classList.add('femto-letter')
      if (element.toLowerCase() === 'o') {
        const IMAGE = document.createElement('img')
        IMAGE.src = 'assets/img/femto.png'
        IMAGE.alt = ''
        SPAN.appendChild(IMAGE)
        IMAGE.style.width = DF_IMAGE - (input.value.split('').length * 5) + 'px'
      } else {
        SPAN.innerHTML = element
      }
      NAME.appendChild(SPAN)
    })
  })
})

/*////////////////////////////
        HTML TO CANVAS
////////////////////////////*/

function download () {
  html2canvas(GENERATOR).then(canvas => {
    let link = document.createElement('a');
    link.download = NAME.innerHTML + '.png';
    link.href = canvas.toDataURL()
    link.click()
  })
}

/*////////////////////////////
           DOWNLOAD           
////////////////////////////*/

DOWNLOAD.addEventListener('click', () => {
  download()
})