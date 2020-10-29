# localStorage_addon
This addon alows you to save anyfing(including objects) in localstorage. 

How to get it instald?
1. Add https://leoj07.github.io/localStorage_addon/main.js to your webpage to anable it. 
2. Make an new storage or load an existing storage by using this script: 
  var lc = new Lc_add(name, setings);
  The script tackes som parameters: 
  name: The name of the storage you want to create or load
  setings: Nead to be an object with the seting autoSave(saves automaticy when you change the storage) like this: 
    {
      autoSave: true/false,
    }

Now you are good to go and use the functions that is able to use: 
  setItem(path, data): sets an item to som data, 
    path: That you whuld write after lc.storage as an regalur object,
    data: What you want to set it to,
  removeItem(path): remowes an item completly, 
    path: That you whuld write after lc.storage as an regalur object,
  getItem(path): gets an item from the storage, 
    path: That you whuld write after lc.storage as an regalur object,
  saveData(): saves all data to localStorage,
  loadData(): loads data from localStorage,
  
you can also axes your data in the storage property ike this: 
  lc.storage.the path you want to get/set(obs: the data dosent save automaticly if you add or remove somfing using this method)
