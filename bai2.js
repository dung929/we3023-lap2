var draggable=document.querySelectorAll('.draggable');
var droppable=document.querySelectorAll('.droppable');
//gắn các sự kiện trên drag
draggable.forEach(elem =>{
    elem.addEventListener('dragstart',dragStart);
});
//gắn sự kiện trên đối tượng drop
droppable.forEach(elem=>{
    elem.addEventListener('dragover',allowDrop);
    elem.addEventListener('drop',drop);
});
//b1:set thuộc tính drag cho đối tượng kéo đi
//b2: xác định giá trị được drag
function dragStart(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}
//b3:set thuộc tính drop
function allowDrop(ev){
    ev.preventDefault();

}
//b4:xac định giá trị drop
function drop(ev){
    ev.preventDefault();
    data=ev.dataTransfer.getData('text')
        ev.target.appendChild(document.getElementById(data));
}