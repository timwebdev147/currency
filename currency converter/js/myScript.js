$(document).ready(function() { 
    alert('hello');
    let button = $("#button")[0]
    let input = $(".input1")[0];



let output = $("#output")[0];



let input2 = $(".input2")[0];

console.log(output)

let output2 = $("#output2")[0];

let btn2 = $(".btn2")[0];
 let p = $("<p></p>");

// $("body").append(p);

 let p2 = $('<p></p>');

 function dollarToNaira(){
  p.html("");
     let value = input.value;
    let result = `#${value * 413}`;
    p.append(result)
    $(output).append(p);
    input.value = "";
 }

 function nairaToDollar(){
  p2.html("");
   let value = input2.value;
  let result = `$${value / 413}`;
  p2.append(result)
  $(output2).append(p2);
  input2.value = "";
 }

$(button).click (function() {
 
   if (input.value > 0 && input.value.length > 0) {
    dollarToNaira()
   }
  });

 $(input).keypress(function(event){
 
 if (input.value > 0 && input.value.length > 0 && event.keyCode === 13) {
   dollarToNaira()
 }
});





$(btn2).click (function() {
 
 if (input2.value > 0 && input2.value.length > 0) {
  nairaToDollar()
 }
});

$(input2).keypress(function(event){

if (input2.value > 0 && input2.value.length > 0 && event.keyCode === 13) {
 nairaToDollar()
}
});
 
  
  
  
  
  
  
  
  });