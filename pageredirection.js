class PageManager{
  constructor(){
    this.currentLocation = window.location.pathname.split('/').pop()
    this.checkCorrectPage()
  }

  checkCorrectPage(){
    if(!localStorageManager.savedPage && this.currentLocation != 'page1.html') this.redirect('page1.html')
    else if(localStorageManager.savedPage && this.currentLocation != localStorageManager.savedPage) this.redirect(localStorageManager.savedPage)
  }

  redirect(destination){
    localStorageManager.savedPage = destination
    window.location.replace(destination)
  }
}

const pageManager = new PageManager()
