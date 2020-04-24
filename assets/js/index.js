/*/////////////////////////////
           FEMTOLOGO
/////////////////////////////*/

const FEMTO_INPUTS = document.querySelectorAll('.femto-input'),
      GENERATOR    = document.getElementsByClassName('femto-generator')[0],
      NAME         = GENERATOR.getElementsByClassName('femto-name')[0],
      DOWNLOAD     = document.getElementsByClassName('femto-link')[0]

/*/////////////////////////////
        LOGO GENERATION
/////////////////////////////*/

FEMTO_INPUTS.forEach(input => {
  input.addEventListener('keyup', () => {
    NAME.innerHTML = input.value
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