/*/////////////////////////////
           FEMTOLOGO
/////////////////////////////*/

const FEMTO_INPUTS = document.querySelectorAll('.femto-input'),
      GENERATOR    = document.getElementsByClassName('femto-generator')[0],
      NAME         = GENERATOR.getElementsByClassName('femto-name')[0]

/*/////////////////////////////
        LOGO GENERATION
/////////////////////////////*/

FEMTO_INPUTS.forEach(input => {
  input.addEventListener('keyup', () => {
    NAME.innerHTML = input.value
  })
})
