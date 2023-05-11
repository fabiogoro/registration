/**
 * This controls page access for this application. 
 * It saves the current page and checks if it matches with the savedPage using the storage manager.
 * It publishes a function for page redirection, which redirects and updates savedPage in cache.
 *
 */
class PageManager{
  constructor(){
    this.currentLocation = window.location.pathname.split('/').pop()
    this.checkCorrectPage()
  }

  checkCorrectPage(){
    if(!localStorageManager.savedPage && this.currentLocation != 'splash.html') this.redirect('splash.html')
    else if(localStorageManager.savedPage && this.currentLocation != localStorageManager.savedPage) this.redirect(localStorageManager.savedPage)
  }

  redirect(destination){
    localStorageManager.savedPage = destination
    window.location.replace(destination)
  }
}

const pageManager = new PageManager()
