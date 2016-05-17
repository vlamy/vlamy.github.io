var rubyHashTextarea;
var inputSubmit;
var jsonResult;

function handleSubmit(text){
  try {
    var jsonPretty = JSON.stringify(JSON.parse(text.replace(/=>/g,":")),null,2);
    console.log("this is valid JSON : \n"+jsonPretty);
    jsonResult.innerHTML = jsonPretty;
  }
  catch(err) {
    window.alert(err);
  }
}

window.onload = function initialize(){
  inputSubmit = document.getElementById("r2j-submit");
  rubyHashTextarea = document.getElementById("ruby-hash-textarea");
  jsonResult = document.getElementById("json-result");
  inputSubmit.onclick=function(){handleSubmit(rubyHashTextarea.value)};
}
