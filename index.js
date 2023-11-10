let task = document.getElementById("task");
let container = document.getElementById("container");
task.placeholder="Add Your Task Here";

task.addEventListener("keydown", function(e){
  if(e.key=="Enter")
  {
    //console.log("Enter key is pressed");
    addToDom();
  }
});

function addToDom()
{
  let taskdiv=document.createElement("div");
  let spantext=document.createElement("span");
  spantext.innerHTML=task.value;
  taskdiv.appendChild(spantext);
  container.appendChild(taskdiv);

  let check= document.createElement("input");
  check.setAttribute("type","checkbox");
  taskdiv.appendChild(check);

  check.addEventListener("click",function(){
      if(check.checked==true)
      {
        spantext.style.textDecoration="Line-through";

      }
      else
      {
        spantext.style.textDecoration="none";
      }
  });;
  let btn=document.createElement("input");
  btn.setAttribute("type","button");
  btn.value="x";

  taskdiv.appendChild(btn);

  btn.addEventListener("click",function(){
    taskdiv.remove();
  });


}