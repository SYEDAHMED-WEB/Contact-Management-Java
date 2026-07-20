let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

displayContacts();

function addContact(){

let name=document.getElementById("name").value.trim();

let phone=document.getElementById("phone").value.trim();

let email=document.getElementById("email").value.trim();

if(name==""||phone==""||email==""){

alert("Please fill all fields.");

return;

}

contacts.push({

name,

phone,

email

});

save();

displayContacts();

document.getElementById("name").value="";

document.getElementById("phone").value="";

document.getElementById("email").value="";

}

function displayContacts(){

let list=document.getElementById("contactList");

list.innerHTML="";

document.getElementById("count").innerHTML=contacts.length;

contacts.forEach((c,index)=>{

list.innerHTML+=`

<div class="contact">

<div>

<h3>👤 ${c.name}</h3>

<p>📞 ${c.phone}</p>

<p>📧 ${c.email}</p>

</div>

<div class="actions">

<button class="edit" onclick="editContact(${index})">Edit</button>

<button class="delete" onclick="deleteContact(${index})">Delete</button>

</div>

</div>

`;

});

}

function deleteContact(index){

contacts.splice(index,1);

save();

displayContacts();

}

function editContact(index){

let name=prompt("Name",contacts[index].name);

let phone=prompt("Phone",contacts[index].phone);

let email=prompt("Email",contacts[index].email);

if(name&&phone&&email){

contacts[index]={name,phone,email};

save();

displayContacts();

}

}

function searchContact(){

let value=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".contact");

cards.forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?"flex":"none";

});

}

function save(){

localStorage.setItem(

"contacts",

JSON.stringify(contacts)

);

}