var functionExecutor = {
functionCall : function(methods = 0,arguments = 0) {
try{
if(arguments == 0 || methods == 0){return methods();}
else{return methods(arguments);}
}
catch(err){
return "Exception";
}
},
textParsing : function(text=0,jsonObject=0){
try{
if(text == 0 || jsonObject == 0){return "Exception"}
else{var setA = text.toString().split(" ");
var funcExtract = jsonObject["function"].filter(x => setA.includes(x));
if(funcExtract.length <= 0){return "No function";}
else{return this.functionCall(jsonObject[funcExtract[0]]["name"])}
}
}
catch(err){
return "Exception";}
}
};
