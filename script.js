alert("You can click each of your list items to mark as done");

var form = document.getElementById("form");
var listItems = document.getElementById("listItems");
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);


function addItem(e){
    e.preventDefault();

    // to get the input value
    var newItem = document.getElementById("form-item").value;

    // to create a new list 
    let li = document.createElement("li");

    //Add class to list
    li.className = "item";

    //Add textnode to list item
    li.appendChild(document.createTextNode(newItem));

    //create an element for delete button
    var deleteBtn = document.createElement('button');

    //Add classes to button
    deleteBtn.className = "delete-btn";

    //Append Textnode in the delete button
    deleteBtn.appendChild(document.createTextNode('x'));

    //Append delete button to each list created
    li.appendChild(deleteBtn);
    listItems.appendChild(li);
}




// Add a line through a list item to mark as done.
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//To delete the list items and confirm.
 function removeItem(e){
    if(e.target.classList.contains('delete-btn')){
    if (confirm("Are You Sure you want to delete this item?")){
        var li = e.target.parentElement;
        listItems.removeChild(li);
    }
  }
}
