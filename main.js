var x=4; //index of id item
var z= 0; // index of number of item

var q=document.getElementById("num");
document.getElementById("num").style.display = "none";
function add(name,price) {
  input = document.getElementById("tabel");
var btn = document.createElement("TR");   // Create a <button> element
att=document.createAttribute("id");       // Create a "class" attribute
att.value = ++x;                           // Set the value of the class 
btn.setAttributeNode(att);                   
btn.innerHTML = '<td>'+name+'</td> <td>'+price
+'jd </td> <td><input value="1" onchange ="total('+ x +','+price+')" type="number" class="number"/></td> <td class="total"> '+price+' jd</td> <td onclick="dele('+ x +' )"><i class="material-icons">delete</i></td>';                   // Insert text
input.appendChild(btn); 
 
 q.innerHTML=++z;
 if(z>0){
 q.style.display = "block";}
 else
 {
    q.style.display = "none";  
 }
 alltotal();
}
function total(id,price) {
   let dam=id-5;
let io=document.getElementsByClassName("number")[dam].value;
if(Number(io)){
  document.getElementsByClassName("total")[dam].innerText=price*io; 
   document.getElementsByClassName("number")[dam].style.border="1px solid  #0000000a";
  alltotal() ;
}
else{

   document.getElementsByClassName("number")[dam].style.border="1px solid #d61c1c66";
    alert('الرجاء ادخال العدد بشكل صحيح');
}
 
}
function dele(ele) {
     q.innerHTML=--z;
    
     if(z>0){
 q.style.display = "block";}
 else
 {
    q.style.display = "none";  
 }
    var myobj = document.getElementById(ele);
myobj.remove();
 alltotal() ;
}
function hidd() {
     document.getElementById("myord").style.display="none"
}

function alltotal() {
  var tyui=0;
    for (i = 0; i <z ; i++) {
        var str =document.getElementsByClassName("total")[i].innerText;
         var res = str.replace("jd", "");
  
   tyui= Number(tyui)+ Number(res);
    
    }
    document.getElementById("tot").innerText= " jd "+tyui;
    
}

function mass() {
    alert(' الرجاء تصوير الشاشة و ارسالها عبر رسائل الفيسبوك  ');
      document.getElementById("mm").style.display="block" ;
}


 function mm(num) {
 
     if(document.getElementById(num).style.color=="#2196f3"){
       
     for (i = 1; i < 4; i++) {
      document.getElementById(i).style.color="#000000b0" ;

 }
      
     }
     
     else
     {  
     for (i = 1; i < 4; i++) {
      document.getElementById(i).style.color="#000000b0" ;
       document.getElementById(num).style.color="#2196f3" ;    

 }
         
     }
     
     
      if(num==1){
 var dis1=  document.getElementById("myord").style.display ;
 if(dis1=="none"){
    document.getElementById("myord").style.display="block" ; 
 }
 else{
    document.getElementById("myord").style.display="none"  
 }
 }
     if(num==2){
 var dis=  document.getElementById("mm").style.display ;
 if(dis=="none"){
    document.getElementById("mm").style.display="block" ; 
 }
 else{
    document.getElementById("mm").style.display="none"  
 }
 }}
 function my() {
var   input1 = document.getElementById("select").value;

 ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("card");
       pi = document.getElementsByClassName(input1);
     for (i = 0; i < li.length; i++) {
       li[i].style.display = "none";

 }
  for (i = 0; i < li.length; i++) {
       pi[i].style.display = "block";

 }

 }
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("card");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("card-title")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

  window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));