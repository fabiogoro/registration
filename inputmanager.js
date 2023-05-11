/**
 * This is an UI manager class. 
 * This is linked to a HTMLElement through 'input' argument.
 * It uses the storage manager to set the element initial value with cached values.
 * Also, it updates localStorage, using storage manager, by setting onblur event.
 * It requires the HTMLElement id to match the stored value in the localStorage.
 * @constructor
 * @param {HTMLElement} input - the HTMLElement controlled by this instance. It is expected a text like input, because it sets the value with cached value.
 *
 */
class InputManager{
  static selector = ".input-storage"
  
  constructor(input){
    this.input = input
    this.input.onblur = this.onblur.bind(this)
    this.updateValue()
  }

  updateValue(){
    if(localStorageManager.user[this.input.id]) 
      this.input.value = localStorageManager.user[this.input.id]
  }

  onblur(){
    localStorageManager.user[this.input.id] = this.input.value
    localStorageManager.save()
  }

  static createInstances(){
    const elements = document.querySelectorAll(this.selector)
    elements.forEach((i)=>new this(i))
  }
}

/**
 * This is an UI manager class. This extends InputManager with functionality to work on checkboxes. 
 * This is linked to a HTMLElement through 'input' argument.
 * It uses the storage manager to set the element initial value with cached values.
 * Also, it updates localStorage, using storage manager, by setting onchange event, since onblur is different for checkboxes.
 * It requires the HTMLElement name attribute to match the stored value in the localStorage, and will create a list of strings from the checkbox values.
 * @constructor
 * @param {HTMLElement} input - the HTMLElement controlled by this instance. It is expected a checkbox like input, because it sets the checked property.
 *
 */
class CheckboxManager extends InputManager{
  static selector = ".checkbox-storage"
  
  constructor(input){
    super(input)
    this.input.onchange = this.onchange.bind(this)
  }

  updateValue(){
    this.name = this.input.getAttribute('name')
    if(!localStorageManager.user[this.name]) {
      localStorageManager.user[this.name] = []
    } else 
      this.input.checked = localStorageManager.user[this.name].includes(this.input.value)
  }

  onchange(){
    if(localStorageManager.user[this.name].includes(this.input.value))
      localStorageManager.user[this.name] = localStorageManager.user[this.name].filter(item => item !== this.input.value)
    else
      localStorageManager.user[this.name].push(this.input.value)
    localStorageManager.save()
  }

  onblur(){
  }
}

InputManager.createInstances()
CheckboxManager.createInstances()
