console.dir(document);
console.dir(document.title);


// changing the background color and font color
document.body.style.backgroundColor = "#f4f4";

const bodyColor = document.querySelector('.btnbody').addEventListener('click', () => {
    if(document.body.style.backgroundColor === 'red'){
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'grey';

    } else {
        document.body.style.backgroundColor = 'red';
        document.body.style.color = '#fff';

    }
})

const title = document.querySelector('.title');
const filter = document.getElementById('filter');
// title.style.backgroundColor = "magenta";
// title.style.cssText = [backgroundColor: "red"]

let form = document.querySelector('.form-inline');
let itemList = document.querySelector('.list-group');

// form submit event

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

// Add Items
function addItem(e){
    e.preventDefault();

    confirm('Do you really want to add this value?', " " );
    //Get input value
    let newItem = document.getElementById('item').value;

    // Create new li elemnent
    let li = document.createElement('li');
    li.className = 'list-group-item';

    // Add textNode with input value
    li.appendChild(document.createTextNode(newItem));
    // li.textContent = newItem;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    // deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);


    itemList.appendChild(li);
}

// Remove Item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete this?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter Items
function filterItem(e){
    // convert to lowerCase
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}