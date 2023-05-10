class LocalStorageManager{
  constructor(){
    this.user = new User()
    this.startInputs()
    this.startCheckboxes()
  }

  startInputs(){
    const inputs = document.querySelectorAll(".save-storage")
    inputs.forEach((i)=>new InputManager(i, this))
  }

  startCheckboxes(){
    const checkboxes = document.querySelectorAll(".checkbox-storage")
    checkboxes.forEach((i)=>new CheckboxManager(i, this))
  }
}

class InputManager{
  constructor(input, storage){
    this.input = input
    this.storage = storage
    this.input.onblur = this.onblur.bind(this)
    this.readLocalStorage()
  }

  readLocalStorage(){
    if(this.storage.user[this.input.id]) 
      this.input.value = this.storage.user[this.input.id]
  }

  onblur(){
    this.storage.user[this.input.id] = this.input.value
    localStorage.setItem('user', JSON.stringify(this.storage.user))
  }
}

class CheckboxManager extends InputManager{
  constructor(input, storage){
    super(input, storage)
    this.input.onchange = this.onchange.bind(this)
  }

  readLocalStorage(){
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
    console.log(JSON.stringify(this.storage.user))
    localStorage.setItem('user', JSON.stringify(this.storage.user))
  }

  onblur(){
  }
}

class User{
  constructor(){
    let user = localStorage.getItem('user')
    if(user){
      user = JSON.parse(user)
      for(const i in user){
        this[i] = user[i]
      }
    }
  }
}

new LocalStorageManager()
