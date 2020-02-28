// JavaScript
function calculate()
     {

      p= document.getElementById("p").value;
      r= document.getElementById("r").value;
      n= document.getElementById("n").value;
      result= document.getElementById("result");
      result.innerHTML="The interest for the specify No.of years is " + (p*n*r/100);

     }