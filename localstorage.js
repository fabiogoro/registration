/**
 * This is the localstorage manager for this application. 
 * It will create the user and savedPage storage for this page.
 * It publishes functions to save and clear values.
 * It also has the user structure for updating the cached user
 *
 */
class LocalStorageManager{
  constructor(){
    this.user = new User()
    this._savedPage = localStorage.getItem('savedPage')
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

  newRegistration(){
    this.clear()
    pageManager.redirect('page1.html')
  }

  save(){
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  set savedPage(location){
    localStorage.setItem('savedPage', location)
  }

  get savedPage(){
    return this._savedPage
  }

  clear(){
    localStorage.removeItem('user')
    localStorage.removeItem('savedPage')
  }
}

const localStorageManager = new LocalStorageManager()
localStorageManager.loadUser()
