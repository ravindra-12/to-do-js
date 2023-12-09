const form = document.getElementById("form");
const blank = document.querySelector(".blank");
const input = document.getElementById("input");
const post = document.getElementById("post")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("clicked")
    validation();
})

let validation = ()=>{
    if(input.value === ""){
        // console.log("Failure")
     blank.innerHTML = `Filled Can Not Be Blank`
     blank.style.color = "red"
  
    }else{
        blank.innerHTML = ""  
        createElement()
    }
}

const createElement = ()=>{
    let x = input.value ;
    post.innerHTML +=`
    <div>
    <p>${x}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
   `   
     input.value = ""
}


let deletePost = (e)=>{
e.parentElement.parentElement.remove()
}

let editPost =(e)=>{
input.value = e.parentElement.previousElementSibling.innerHTML;
 e.parentElement.parentElement.remove();
}