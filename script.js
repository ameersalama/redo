var bill=Number(prompt("How much was the bill"))
var tax=(bill*0.7)
var tip=(bill+tax)*.05
var total=bill+tip+tax
var containerEle= document.body.querySelector(".bill")
containerEle.innerHTML ="You Should Pay: $" +total