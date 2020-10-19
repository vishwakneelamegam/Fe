function on(){
  return "light on";
}

function off(){
  return "light off";
}

const jsonObject = {
  "function":["on","off"],
  "on":{
    "name":"on",
    "argument":[]
  },
  "off":{
    "name":"off",
    "argument":[]
  }
}

function ex(funcName){
  if(funcName == "on"){
    return on();
  }
  if(funcName == "off"){
    return off();
  }
  else{
    return "err:2"
  }
}

var fn = {
  textParsing : function(text=0){
    try{
      if(text == 0){
        return "err:0"
      }
      else{
        var setA = text.toString().split(" ");
        var funcExtract = jsonObject["function"].filter(x => setA.includes(x));
        if(funcExtract.length <= 0){
          return "err:1";
        }
        else{
          return ex(jsonObject[funcExtract[0]]["name"]);
        }
      }
    }
    catch(err){
      return "err:0";
    }
  }
};
