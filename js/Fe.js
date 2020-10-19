//example functions
function on(){
	return "light on";
}

function off(){
	return "light off";
}

//it is used by fn class to find the function inside string. 
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

//used to execute function found by fn class.
function ex(funcName){
	if(funcName == "on"){
		return on();
		}
	if(funcName == "off"){
		return off();
		}
	else{
		return "error:2"
		}
}

//used to find the function inside string
var fn = {
  parse : function(text=0){
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
