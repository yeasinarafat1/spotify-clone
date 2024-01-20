let button = document.querySelector('.btn');
// console.log(bt);


button.addEventListener("click", () => {
   let inpdt = document.querySelector('input').value
   console.log(inpdt);

   document.querySelector('input').value = ""


})
let inp = document.getElementById("input")
inp.addEventListener("input", () => {
   let input = document.querySelector('input').value
   if (input == "") {
      document.querySelector('.cross').style.display = 'none'
   } else {
      document.querySelector('.cross').style.display = 'flex'
   }
})
let cross =document.getElementById("cross")
cross.addEventListener("click",()=>{
   document.querySelector('input').value = ""
   document.querySelector('.cross').style.display = 'none'
})

