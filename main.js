const file0 = document.querySelector("input[name=file0]");
const fileInfo0 = document.querySelector(".fileInfo0");
const file1 = document.querySelector("input[name=file1]");
const fileInfo1 = document.querySelector(".fileInfo1");
const file2 = document.querySelector("input[name=file2]");
const img2 = document.querySelector(".row3 img");

file0.addEventListener("change", (e)=>{
  const file = e.target.files[0];
  fileInfo0.innerText = file.name;
})
file1.addEventListener("change", (e)=>{
  const file = e.target.files[0];
  fileInfo1.innerText = file.name;
})
file2.addEventListener("change", (e)=>{
  console.log(e.target.value)
  if(e.target.value === ""){
    img2.classList.remove("imgShow");
  }else{
    const src = URL.createObjectURL(e.target.files[0]);
    img2.src = src;
    img2.classList.add("imgShow");
  }
})