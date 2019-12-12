resultImg = document.getElementById("resultPicture");
let src;

function result(){
  const result = Math.floor(Math.random()*3);
  
  if(result == 0){
    src= "./src/soraNo.jpg";
  }else if(result == 1){
    src= "./src/soraNothing.jpg";
  }else if(result == 2){
    src= "./src/soraYes.jpg";
  }
  return src;
}

console.log(result());

function main() {
  resultImg.src =  result();
}

main();