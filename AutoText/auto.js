const para =  ' lets  go outside Mysore and visit london enjoy the vacation!.'

let index=0;
function writeText()
{
    document.body.innerText=para.slice(0,index);
    index++;
    if(index> para.length-1)
    {
        index=0
    }
}
setInterval(writeText,100);