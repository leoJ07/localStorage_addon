function Lc_add(name, setings = {autoSave: true, autoLoad: true}){
  this.name = name;
  this.setings = setings;
  this.calbacks = {
    update: function(){

    },
  }
  this.prev_storage = {};
  this.loadData();
}

Lc_add.prototype = {
  setItem: async function(path, data){
    try{
      var section = "";
      var sections = [];
      for(let i = 0; i < path.length; i++){
        if(path[i] === "."){
          sections.push(section);
          section = "";
        } else if(path[i] === "["){
          sections.push(section);
          section = "";
        } else if(path[i] === "]"){
          sections.push(section);
          section = "";
        } else {
          section += path[i];
          if(i === path.length - 1){
            sections.push(section);
          }
        }
      }
      let plase = "this.storage";
      for(let i = 0; i < sections.length; i++){
        plase += `["${sections[i]}"]`
      }
      switch(typeof(data)){
        case "object":
          var newData = JSON.stringify(data);
          plase += ` = ${newData};`;
          break;
        case "string":
          var newData = `"${data}"`;
          plase += ` = ${newData};`;
          break;
        case "number":
          var newData = data;
          plase += ` = ${newData};`;
          break;
      }
      eval(plase);
      console.log("item has ben set")
      if(this.setings.autoSave){
        this.saveData();
      }
    } catch(err){
      console.log(err)
    }
  },
  removeItem: async function(path){
    try{
      var section = "";
      var sections = [];
      for(let i = 0; i < path.length; i++){
        if(path[i] === "."){
          sections.push(section);
          section = "";
        } else if(path[i] === "["){
          sections.push(section);
          section = "";
        } else if(path[i] === "]"){
          sections.push(section);
          section = "";
        } else {
          section += path[i];
          if(i === path.length - 1){
            sections.push(section);
          }
        }
      }
      let plase = "delete this.storage";
      for(let i = 0; i < sections.length; i++){
        plase += `["${sections[i]}"]`
      }
      eval(plase)
      if(this.setings.autoSave){
        this.saveData();
      }
    } catch(err){
      console.log(err)
    }
  },
  getItem: function(path){
    try{
      var section = "";
      var sections = [];
      for(let i = 0; i < path.length; i++){
        if(path[i] === "."){
          sections.push(section);
          section = "";
        } else if(path[i] === "["){
          sections.push(section);
          section = "";
        } else if(path[i] === "]"){
          sections.push(section);
          section = "";
        } else {
          section += path[i];
          if(i === path.length - 1){
            sections.push(section);
          }
        }
      }
      let plase = "var result = this.storage";
      for(let i = 0; i < sections.length; i++){
        plase += `["${sections[i]}"]`
      }
      eval(plase);
      return result;
    } catch(err){
      console.log(err)
    }
  },
  saveData: function(){
    var obj = JSON.stringify(this.storage)
    localStorage.setItem(`lc_${this.name}`, obj);
  },
  loadData: function(){
    var obj = localStorage.getItem(`lc_${this.name}`);
    if(obj !== null){
      this.storage = JSON.parse(obj);
    } else {
      this.storage = {};
      this.saveData();
    }
  },
  delete: function(){
    console.log("deleting storage...");
    delete localStorage[`lc_${this.name}`]
    delete this.name;
    delete this.storage;
    delete this.setings;
    console.log("done! you can now longer use this varible to axes your storage.");
  },
  setUpdateCalback: function(calback){
    this.calbacks.update = calback;
    this.prev_storage = {...this.storage}
    loop(this);
  },
};

function loop(obj){
  obj.loadData()
  if(!isEquivalent(obj.storage, obj.prev_storage)){
    obj.calbacks.update();
  }
  obj.saveData();
  obj.prev_storage = {...obj.storage};
  requestAnimationFrame(() => {
    loop(obj);
  });
}

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
