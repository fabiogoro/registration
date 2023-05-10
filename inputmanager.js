class InputManager{
  constructor(input, storage){
    this.input = input
    this.storage = storage
    this.input.onblur = this.onblur.bind(this)
    this.updateValue()
  }

  updateValue(){
    if(this.storage.user[this.input.id]) 
      this.input.value = this.storage.user[this.input.id]
  }

  onblur(){
    this.storage.user[this.input.id] = this.input.value
    this.storage.save()
  }
}

class CheckboxManager extends InputManager{
  constructor(input, storage){
    super(input, storage)
    this.input.onchange = this.onchange.bind(this)
  }

  updateValue(){
    this.name = this.input.getAttribute('name')
    if(!this.storage.user[this.name]) {
      this.storage.user[this.name] = []
    } else 
      this.input.checked = this.storage.user[this.name].includes(this.input.value)
  }

  onchange(){
    if(this.storage.user[this.name].includes(this.input.value))
      this.storage.user[this.name] = this.storage.user[this.name].filter(item => item !== this.input.value)
    else
      this.storage.user[this.name].push(this.input.value)
    this.storage.save()
  }

  onblur(){
  }
}

class DisplayManager {
  constructor(container, storage){
    this.container = container
    this.storage = storage
    this.startContainer()
  }

  startContainer(){
    if(this.storage.user[this.container.id])
      this.container.innerText += ` ${this.storage.user[this.container.id]}`
  }

}

class DisplayImageManager extends DisplayManager{
  startContainer(){
    if(this.storage.user[this.container.id])
      this.container.firstChild.src = this.storage.user[this.container.id]
  }
}

class DisplayAddressManager extends DisplayManager{
  startContainer(){
    const city = this.storage.user['city']
    const street = this.storage.user['street']
    const house = this.storage.user['house']
    if(city && street && house)
      this.container.innerText += ` ${house}, ${street}, ${city}`
    else if(city && street)
      this.container.innerText += ` ${street}, ${city}`
  }
}
