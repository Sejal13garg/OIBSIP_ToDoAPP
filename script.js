
const inputbox = document.getElementById("input-box");
const item = document.getElementsByClassName("item-container")[0];
function addTask(){
    if(inputbox.value ==''){
        alert("you have to add first");
    }
    else{
        var div = document.createElement('div');
        div.classList.add('item');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var paragraph = document.createElement('p');
        paragraph.textContent = inputbox.value;
        div.appendChild(checkbox);
        div.appendChild(paragraph);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        div.appendChild(span);
        item.appendChild(div);

       
        
    }
    inputbox.value='';
    

}
item.addEventListener("click" , function(e){
   if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
   
   }
} , false);
