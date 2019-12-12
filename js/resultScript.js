var src;

function result(){
  var result = Math.floor(Math.random()*3);
  
  if(result == 0){
    src="./src/soraNo.jpg";
  }else if(result == 1){
    src="./src/soraNothing";
  }else if(result == 2){
    src="./src/soraYes";
  }
  return result;
}
