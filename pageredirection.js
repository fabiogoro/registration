const currentLocation = window.location.pathname.split('/').pop()
if(localStorageManager.savedPage && currentLocation != localStorageManager.savedPage) window.location.replace(localStorageManager.savedPage)
