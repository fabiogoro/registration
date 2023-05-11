/**
 * This is an UI manager class. 
 * This is linked to a HTMLElement through 'container' argument.
 * It uses the storage manager to set the element initial text with cached values.
 * It requires the HTMLElement id to match the stored value in the localStorage.
 * @constructor
 * @param {HTMLElement} container - the HTMLElement controlled by this instance. It is expected a div like element, because it sets the innerText with cached value.
 *
 */
class DisplayManager {
  static selector = ".summary"

  constructor(container){
    this.container = container
    this.startContainer()
  }

  startContainer(){
    if(localStorageManager.user[this.container.id])
      this.container.innerText += ` ${localStorageManager.user[this.container.id]}`
  }

  static createInstances(){
    const elements = document.querySelectorAll(this.selector)
    elements.forEach((i)=>new this(i))
  }

}

/**
 * This is an UI manager class. This extends DisplayManager with functionality to load images.
 * This is linked to a HTMLElement through 'container' argument.
 * It uses the storage manager to set the element initial src with cached values.
 * It requires the HTMLElement id to match the stored value in the localStorage.
 * @constructor
 * @param {HTMLElement} container - the HTMLElement controlled by this instance. It is expected a div like element with an img element inside, because it sets the child src attribute with cached value.
 *
 */
class DisplayImageManager extends DisplayManager{
  static selector = ".summary-img"
  
  startContainer(){
    if(localStorageManager.user[this.container.id])
      this.container.firstChild.src = localStorageManager.user[this.container.id]
  }
}

/**
 * This is an UI manager class. This extends DisplayManager with functionality to format address in one line.
 * This is linked to a HTMLElement through 'container' argument.
 * It uses the storage manager to set the element initial innerText with cached values.
 * It requires the localStorage user to have city, street and house attributes.
 * @constructor
 * @param {HTMLElement} container - the HTMLElement controlled by this instance. It is expected a div like element, because it sets innerText with cached value.
 *
 */
class DisplayAddressManager extends DisplayManager{
  static selector = ".summary-address"

  startContainer(){
    const city = localStorageManager.user['city']
    const street = localStorageManager.user['street']
    const house = localStorageManager.user['house']
    if(city && street && house)
      this.container.innerText += ` ${house}, ${street}, ${city}`
    else if(city && street)
      this.container.innerText += ` ${street}, ${city}`
  }
}

DisplayManager.createInstances()
DisplayImageManager.createInstances()
DisplayAddressManager.createInstances()
