function makeGrid() {

  // Getting the input of height and width and then converting to integer
  var heightInput=document.getElementById('inputHeight');
  var height=Number(heightInput.value);
  var widthInput=document.getElementById('inputWidth');
  var width=Number(widthInput.value);
  //Found location of where to add grid
  const findLocation=document.getElementById('pixelCanvas');
  //creating a div tag to create a box
  const grid=document.createElement('div');
  const gridAttribute=document.createAttribute('id');
  gridAttribute.value="removeIf";
  grid.setAttributeNode(gridAttribute);
  const collum=[];// creating the collum
  const row=[];//creating the row
  findLocation.appendChild(grid);
//creating rows equal to # of height
  for(y=0;y<height;y++){
    row[y]=document.createElement('ul');
    grid.appendChild(row[y]);
    //creating collums equal to # of width
    for(i=0;i<width;i++){
      collum[i]=document.createElement("li");
      const att=document.createAttribute("style");//creating attribute
      collum[i].setAttributeNode(att);//setting that attribute to each li tag
      //adding an event listener so when clicked it will run the function
      collum[i].addEventListener('click',function(){

        const col=document.getElementById('colorPicker');
        const actualColor=col.value;//assings the color picked to actualColor
        att.value='background-color:'+actualColor;//assings actualColor as a value of the attibute att
        //and adds it to each li that is clicked
      })
      row[y].appendChild(collum[i]);//add a collum to each row finishing the grid
    }
  }
}
// creating a function that will be used once submit is clicked, if submnit has been clicked
//it creates grid and then assigns x=1
//if x=1 and submit has been cliked again it deletes the grid and recreates it after, with the new or old inputs
var check= function(event){
  event.preventDefault();
  if(x===1){
    const a=document.getElementById('removeIf');
    const b=a.parentElement;
    b.removeChild(a);
    makeGrid();
  }
  else{
    makeGrid();
    x=1;
  }
}

var x=0;

const submitGrid=document.getElementById('createGrid');
submitGrid.addEventListener('click',check);
