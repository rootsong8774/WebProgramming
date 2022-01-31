var el = document.getElementById('shoppingList');
function getTarget(e) {  
     if (!e) {
       e = window.event;
    }
    return e.target || e.srcElement;
}
function itemDone(e) { 
    var target;
    target = getTarget(e);
    if (target.nodeName.toLowerCase() == 'a') {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (target.nodeName.toLowerCase() == 'em') {
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (e.preventDefault()) {
        e.preventDefault();
    } 
    else {
        e.returnValue = false;
    }
 }

el.addEventListener('click', function (e) { itemDone(e); }, false)