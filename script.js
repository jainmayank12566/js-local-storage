const id=document.getElementById("id");
const input=document.getElementById("input");
const buttons=document.getElementById("buttons");
buttons.addEventListener("click",()=>{
    const value=input.value;
    localStorage.setItem("name",value);
    console.log(value);
    window.location.reload()
})
window.addEventListener("load",()=>{
    id.innerText=localStorage.getItem("name");
})