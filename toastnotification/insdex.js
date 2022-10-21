const btn = document.getElementById('btn');
const container = document.getElementById('container');
const cons = document.getElementById('cons');

btn.addEventListener('click',()=>{
   cretaeNotification();
});

function cretaeNotification()
{
    const Notifi = document.createElement('div');
    Notifi.classList.add('toast')
    Notifi.innerText="This is Challange which is crazy!";

    cons.classList.add('show')
    container.appendChild(Notifi);

    setTimeout(() =>{
        Notifi.remove();
        cons.className = cons.className.replace("show", "");
    },3000)
}