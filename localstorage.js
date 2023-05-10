class LocalStorageManager{
  constructor(){
    this.user = new User()
    this.savedPage = localStorage.getItem('savedPage')
    this.loadUser()
    this.startInputs()
    this.startCheckboxes()
    this.startSummary()
  }

  loadUser(){
    let user = localStorage.getItem('user')
    if(user){
      user = JSON.parse(user)
      for(const i in user){
        this.user[i] = user[i]
      }
    }
  }

  startInputs(){
    const inputs = document.querySelectorAll(".input-storage")
    inputs.forEach((i)=>new InputManager(i, this))
  }

  startCheckboxes(){
    const checkboxes = document.querySelectorAll(".checkbox-storage")
    checkboxes.forEach((i)=>new CheckboxManager(i, this))
  }

  startSummary(){
    const containers = document.querySelectorAll(".summary")
    containers.forEach((i)=>new DisplayManager(i, this))
    const images = document.querySelectorAll(".summary-img")
    images.forEach((i)=>new DisplayImageManager(i, this))
    const addresses = document.querySelectorAll(".summary-address")
    addresses.forEach((i)=>new DisplayAddressManager(i, this))
  }

  save(){
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  set savedPage(location){
    localStorage.setItem('savedPage')
  }

  clear(){
    localStorage.removeItem('user')
    localStorage.removeItem('savedPage')
  }
}

const localStorageManager = new LocalStorageManager()
