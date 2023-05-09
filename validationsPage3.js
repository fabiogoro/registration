
function validationsPageThree(){
    let image = document.querySelector('#imageID').value;
    try {
        new URL(image);
        return true;
      } catch (err) {
        return false;
      }
    }

    