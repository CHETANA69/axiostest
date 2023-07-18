var form = document.getElementById('addForm');
form.addEventListener('submit', addProduct);
function addProduct(e) {
    e.preventDefault();
    var amount = document.getElementById('amount').value;
    var name = document.getElementById('name').value;
    var info = {
        name,
        amount
    }
    axios.post("https://crudcrud.com/api/455a037e0342465a8fc7770314a22b7e/productinfo", info)
        .then((response) => {
            showOnScreen(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
}


window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/455a037e0342465a8fc7770314a22b7e/productinfo")
        .then((response) => {
            // console.log(response);
            showOnScreen(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
})


function showOnScreen(info) {
    selectElement = document.querySelector('#all');
    output = selectElement.value;
    console.log(output);
    var li = document.createElement('li');
    li.textContent = info.name + " : " + info.amount;
    
    if (output === "Electronic") {

        var ul = document.getElementById('electronic');
        ul.appendChild(li);
    }
    else if (output === "Food") {
        var ul = document.getElementById('food');
        ul.appendChild(li);
    }
    else if (output === "Skincare") {
        var ul = document.getElementById('skincare');
        ul.appendChild(li);
    }
var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.style.float = 'right';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        if (confirm('Are You Sure?.....')) {

            axios.delete(`https://crudcrud.com/api/455a037e0342465a8fc7770314a22b7e/productinfo/${info._id}`)
                .then((response) => {
                    ul.removeChild(li);
                })
                .catch((err) => {
                    console.log(err);
                })

        }
    }
    li.appendChild(deleteBtn);
}




