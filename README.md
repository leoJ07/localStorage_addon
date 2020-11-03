# localStorage_addon
This addon alows you to save anyfing(including objects) in localstorage. 

How to get it instald?
1. Add https://leoj07.github.io/localStorage_addon/main.js to your webpage to anable it. 
2. Make an new storage or load an existing storage by using this script: 
  var lc = new Lc_add(name, setings);
  The script tackes som parameters: 
  name: The name of the storage you want to create or load
  setings: Nead to be an object with the seting autoSave(saves automaticy when you change the storage) like this: <br>
    {<br>
      autoSave: true/false,<br>
    }<br><br>

Now you are good to go and use the functions that is able to use: <br>
  setItem(path, data): sets an item to som data, <br>
  &nbsp;&nbsp;path: That you whuld write after lc.storage as an regalur object,<br>
  &nbsp;&nbsp;data: What you want to set it to,<br>
  removeItem(path): remowes an item completly, <br>
  &nbsp;&nbsp;path: That you whuld write after lc.storage as an regalur object,<br>
  getItem(path): gets an item from the storage, <br>
  &nbsp;&nbsp;path: That you whuld write after lc.storage as an regalur object,<br>
  saveData(): saves all data to localStorage,<br>
  loadData(): loads data from localStorage,<br>
  delete(): deletes the data from lockalStorage and you cant use the varible to access loocalStorage<br><br>
  
you can also axes your data in the storage property ike this: <br>
&nbsp;&nbsp;lc.storage.the path you want to get/set data(obs: the data dosent save automaticly if you add or remove somfing using this method)
