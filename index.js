const bill = document.querySelector('#bill')
const NumberOfppl=document.querySelector('.NumberOfppl')
console.log(bill.value)
const tipamountfinal=document.getElementById('tipamountfinal')
const Total=document.getElementById('Total')
const reset=document.getElementById('reset')
bill.addEventListener("change", () => {
   // alert("change")
})
const tipBtn = document.querySelectorAll('.tipbtn')
const customtip = document.querySelector('.customtipbtn')
let tip=0;
let tipamount=0;
tipBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        if (customtip.value == "") {

            tip = parseInt(btn.value)
            console.log(typeof(tip))
           // console.log(tip)
        }
       if(tip!=""&&NumberOfppl!==""){
        console.log("bill.value",bill.value,"tip",tip)
        tipamount=((parseInt(bill.value)*parseInt(tip))/100)/parseInt(NumberOfppl.value)
        console.log(tipamount)
        if(!isNaN((tipamount))){
            console.log("no")
            Total.innerText= parseInt(bill.value)+parseInt(tipamount)
            tipamountfinal.innerText=tipamount
        }
        else{
            
        }
       }
    })
})

customtip.addEventListener('change',()=>{

        tip=parseInt(customtip.value)
        console.log(tip)
    
    if(bill.value!=""&&tip!=""&&NumberOfppl!==""){
        tipamount=parseInt(((parseInt(bill.value)*tip)/100)/parseInt(NumberOfppl.value))
        console.log(tipamount)
        if(!isNaN((tipamount))){
            console.log("no")
            Total.innerText= parseInt(bill.value)+parseInt(tipamount)
            tipamountfinal.innerText=tipamount
        }
        else{
            
        }
    }
})
bill.addEventListener('change',()=>{

    if(bill.value!=""&&tip!=""&&NumberOfppl!==0){
        tipamount=((parseInt(bill.value)*parseInt(tip))/100)/parseInt(NumberOfppl.value)
        console.log(tipamount)
        if(!isNaN((tipamount))){
            console.log("no")
            Total.innerText= parseInt(bill.value)+parseInt(tipamount)
            tipamountfinal.innerText=tipamount
        }
        else{
            
        }
    }
})
NumberOfppl.addEventListener("change",()=>{
    if(bill.value!=""&&tip!=""&&NumberOfppl!==0){
        tipamount=((parseInt(bill.value)*parseInt(tip))/100)/parseInt(NumberOfppl.value)
        console.log(tipamount)
        if(!isNaN((tipamount))){
            console.log("no")
            Total.innerText= parseInt(bill.value)+parseInt(tipamount)
            tipamountfinal.innerText=tipamount
        }
        else{
            
        }
    }
})
reset.addEventListener("click",()=>{
    Total.innerText= 0
    tipamountfinal.innerText=0
    bill.value=""
    customtip.value=""
    NumberOfppl.value=""
    tip=0
    tipamount=0
})
// else {
//     btn.disabled = true
//     // btn.style.active
// }