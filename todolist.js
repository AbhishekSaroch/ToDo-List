const item=document.querySelector("#item");
const todobox=document.querySelector("#todobox");

item.addEventListener(
    "keyup",
    function (event) {
        if(event.key=="Enter"){
            addtodo(this.value);
            this.value="";
        }
    }
)

const addtodo=(item) =>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
    ${item} 
    <i class="fa-solid fa-xmark"></i>`;
    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");

        }
    )
    todobox.appendChild(listItem);
}