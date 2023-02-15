/* javascript Home page*/
/* section header */
var section1=document.createElement("section");
section1.setAttribute("id","header");
document.querySelector("#Parent-section").append(section1);

var header=document.createElement("a");
header.setAttribute("href","#");
header.setAttribute("id","a");
document.querySelector("#header").append(header);

var img=document.createElement("img");
img.setAttribute("src","img/logo.png");
document.querySelector("#a").append(img);

var div=document.createElement("div");
div.setAttribute("id","headdiv")
document.querySelector("#header").append(div);

var ul=document.createElement("ul");
ul.setAttribute("id","navbar");
document.querySelector("div").append(ul);

var li1=document.createElement("li");
li1.setAttribute("id","navbar-li1");
document.querySelector("#navbar").append(li1);

var a1=document.createElement("a");

a1.setAttribute("href","index.html");
a1.innerHTML="HOME"
document.querySelector("#navbar-li1").append(a1);

var li2=document.createElement("li");
li2.setAttribute("id","navbar-li2");
document.querySelector("#navbar").append(li2);

var a2=document.createElement("a");
a2.setAttribute("href","shop.html");
a2.innerHTML="Shop"
document.querySelector("#navbar-li2").append(a2);

var li3=document.createElement("li");
li3.setAttribute("id","navbar-li3");
document.querySelector("#navbar").append(li3);

var a3=document.createElement("a");
a3.setAttribute("href","blog.html");
a3.innerHTML="Blog"
document.querySelector("#navbar-li3").append(a3);

var li4=document.createElement("li");
li4.setAttribute("id","navbar-li4");
document.querySelector("#navbar").append(li4);

var a4=document.createElement("a");
a4.setAttribute("href","about.html");
a4.innerHTML="About"
document.querySelector("#navbar-li4").append(a4);

var li5=document.createElement("li");
li5.setAttribute("id","navbar-li5");
document.querySelector("#navbar").append(li5);

var a5=document.createElement("a");
a5.setAttribute("href","contact.html");
a5.innerHTML="Contact"
document.querySelector("#navbar-li5").append(a5);

var li6=document.createElement("li");
li6.setAttribute("id","navbar-li6");
document.querySelector("#navbar").append(li6);

var a6=document.createElement("a");
a6.setAttribute("class","active");
a6.setAttribute("id","lg-bag");
a6.setAttribute("href","cart.html");
document.querySelector("#navbar-li6").append(a6);

var icon1=document.createElement("i");
icon1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector("#lg-bag").append(icon1);

var a7=document.createElement("a");
a7.setAttribute("href","#");
a7.setAttribute("id","cross");
document.querySelector("#navbar").append(a7);

var icon2=document.createElement("i");
icon2.setAttribute("id","close");
icon2.setAttribute("class","fa fa-times");
document.querySelector("#cross").append(icon2);


var div=document.createElement("div");
    div.setAttribute("id","mobile")
    document.querySelector("#header").append(div);

var a7=document.createElement("a");
     a7.setAttribute("href","cart.html");
     a7.setAttribute("class","mobile-icon");
     document.querySelector("#mobile").append(a7);

var icon1=document.createElement("i");
    icon1.setAttribute("class","fa-solid fa-cart-shopping cart");
     document.querySelector(".mobile-icon").append(icon1);

var icon1=document.createElement("i");
    icon1.setAttribute("class","fas fa-outdent");
    icon1.setAttribute("id","bar");
     document.querySelector("#mobile").append(icon1);

/* section header  end */


/*section page header*/
var section2=document.createElement("section");
    section2.setAttribute("id","page-header");
    section2.setAttribute("class","about-header");
    document.querySelector("#Parent-section").append(section2);

var h2=document.createElement("h2");
h2.innerText="#let,s_talk";
var p=document.createElement("p");
p.innerText="Leave a Message, We love to hear from you";
document.querySelector("#page-header").append(h2,p);
/*section page header end*/


/*section cart start*/
var section3=document.createElement("section");
    section3.setAttribute("id","cart");
    section3.setAttribute("class","section-p1");
    document.querySelector("#Parent-section").append(section3);

var table=document.createElement("table");
    table.setAttribute("id","table");
    table.setAttribute("width","100%");
    document.querySelector("#cart").append(table);

var thead=document.createElement("thead");
    thead.setAttribute("id","thead");
    document.querySelector("#table").append(thead);

var tr=document.createElement("tr");
    tr.setAttribute("id","tr");
    document.querySelector("#thead").append(tr);

var td1=document.createElement("td");
    td1.innerText="Remove";
    
var td2=document.createElement("td");
    td2.innerText="Image";
   
var td3=document.createElement("td");
    td3.innerText="product1";
   
var td4=document.createElement("td");
    td4.innerText="Price";
   
var td5=document.createElement("td");
    td5.innerText="Quantity";
       
var td6=document.createElement("td");
    td6.innerText="Subtotal";
    document.querySelector("#tr").append(td1,td2,td3,td4,td5,td6);


var tbody=document.createElement("tbody");
    tbody.setAttribute("id","tbody");
    document.querySelector("#table").append(tbody);

var tr=document.createElement("tr");
    tr.setAttribute("id","tr1");
    document.querySelector("#tbody").append(tr);

var td1=document.createElement("td");
    td1.setAttribute("id","td1");
    document.querySelector("#tr1").append(td1);

var i1=document.createElement("i");
    i1.setAttribute("class","far fa-times-circle");
    document.querySelector("#td1").append(i1);

var td2=document.createElement("td");
    td2.setAttribute("id","td2");
    document.querySelector("#tr1").append(td2);

var img1=document.createElement("img");
    img1.setAttribute("src","img/products/f1.jpg");
    document.querySelector("#td2").append(img1);

var td3=document.createElement("td");
    td3.innerText="Cartoon Astranaut T-shirt"
var td4=document.createElement("td");
    td4.innerText="$118.19"
    document.querySelector("#tr1").append(td3,td4);

var td5=document.createElement("td");
    td5.setAttribute("id","td5");
    document.querySelector("#tr1").append(td5);

var input1=document.createElement("input");
    input1.setAttribute("type","number");
    input1.setAttribute("value","1");
    document.querySelector("#td5").append(input1);

var td6=document.createElement("td");
    td6.innerText="$118.19"
    document.querySelector("#tr1").append(td6);


var tr=document.createElement("tr");
    tr.setAttribute("id","tr2");
    document.querySelector("#tbody").append(tr);

var td1=document.createElement("td");
    td1.setAttribute("id","td1-2");
    document.querySelector("#tr2").append(td1);

var i2=document.createElement("i");
    i2.setAttribute("class","far fa-times-circle");
    document.querySelector("#td1-2").append(i2);

var td2=document.createElement("td");
    td2.setAttribute("id","td2-2");
    document.querySelector("#tr2").append(td2);

var img2=document.createElement("img");
    img2.setAttribute("src","img/products/f2.jpg");
    document.querySelector("#td2-2").append(img2);

var td3=document.createElement("td");
    td3.innerText="Cartoon Astranaut T-shirt"
var td4=document.createElement("td");
    td4.innerText="$118.19"
    document.querySelector("#tr2").append(td3,td4);

var td5=document.createElement("td");
    td5.setAttribute("id","td5-2");
    document.querySelector("#tr2").append(td5);

var input2=document.createElement("input");
    input2.setAttribute("type","number");
    input2.setAttribute("value","1");
    document.querySelector("#td5-2").append(input2);

var td6=document.createElement("td");
    td6.innerText="$118.19"
    document.querySelector("#tr2").append(td6);


    
var tr=document.createElement("tr");
tr.setAttribute("id","tr3");
document.querySelector("#tbody").append(tr);

var td1=document.createElement("td");
td1.setAttribute("id","td1-3");
document.querySelector("#tr3").append(td1);

var i2=document.createElement("i");
i2.setAttribute("class","far fa-times-circle");
document.querySelector("#td1-3").append(i2);

var td2=document.createElement("td");
td2.setAttribute("id","td2-3");
document.querySelector("#tr3").append(td2);

var img2=document.createElement("img");
img2.setAttribute("src","img/products/f3.jpg");
document.querySelector("#td2-3").append(img2);

var td3=document.createElement("td");
td3.innerText="Cartoon Astranaut T-shirt"
var td4=document.createElement("td");
td4.innerText="$118.19"
document.querySelector("#tr3").append(td3,td4);

var td5=document.createElement("td");
td5.setAttribute("id","td5-3");
document.querySelector("#tr3").append(td5);

var input2=document.createElement("input");
input2.setAttribute("type","number");
input2.setAttribute("value","1");
document.querySelector("#td5-3").append(input2);

var td6=document.createElement("td");
td6.innerText="$118.19"
document.querySelector("#tr3").append(td6);

/*section cart end*/

/*section coupan start*/
var section4=document.createElement("section");
    section4.setAttribute("id","cart-add");
    section4.setAttribute("class","section-p1");
    document.querySelector("#Parent-section").append(section4);

var div=document.createElement("div");
    div.setAttribute("id","coupan");
    document.querySelector("#cart-add").append(div);

var h3=document.createElement("h3");
     h3.innerText="Apply coupan";
    

var div=document.createElement("div");
    div.setAttribute("id","coupan1");
    document.querySelector("#coupan").append(h3,div);

var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Enter Your Coupan");   
    
var btn=document.createElement("button");
    btn.setAttribute("class","normal");
     btn.innerText="Apply"; 
document.querySelector("#coupan1").append(input,btn);


var div=document.createElement("div");
    div.setAttribute("id","subtotal");
    document.querySelector("#cart-add").append(div);

var h3=document.createElement("h3");
     h3.innerText="Cart Total";
     document.querySelector("#subtotal").append(h3);


var table=document.createElement("table");
     table.setAttribute("id","table-coupan");
     document.querySelector("#subtotal").append(table);
 
 var tr=document.createElement("tr");
     tr.setAttribute("id","tr-coupan");
     document.querySelector("#table-coupan").append(tr); 
          
var td3=document.createElement("td");
    td3.innerText="Cart Subtotal"
    var td4=document.createElement("td");
    td4.innerText="$335"
    document.querySelector("#tr-coupan").append(td3,td4);

var tr=document.createElement("tr");
     tr.setAttribute("id","tr-coupan1");
     document.querySelector("#table-coupan").append(tr); 
          
var td3=document.createElement("td");
    td3.innerText="Shipping"
    var td4=document.createElement("td");
    td4.innerText="Free"
    document.querySelector("#tr-coupan1").append(td3,td4);

var tr=document.createElement("tr");
     tr.setAttribute("id","tr-coupan2");
     document.querySelector("#table-coupan").append(tr); 
          
var td3=document.createElement("td");
    td3.innerHTML="<strong>Total</strong>"
    var td4=document.createElement("td");
    td4.innerHTML="<strong>$ 335</strong>"
    document.querySelector("#tr-coupan2").append(td3,td4);

var btn=document.createElement("button");
    btn.setAttribute("class","normal");
     btn.innerText="Proced to check"; 
document.querySelector("#subtotal").append(btn);

/*section coupan end*/

/*
  <section id="cart-add" class="section-p1">
       

        <div id="subtotal">
            <h3>Cart Total</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$335</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$ 335</strong></td>
                </tr>
            </table>
            <button class="normal">Proced to check</button>
        </div>
      </section> 


*/

/*section footer start*/

var footer=document.createElement("footer");
    footer.setAttribute("class","section-p1 ftr");
    document.querySelector("#Parent-section").append(footer);
    
var ftrdiv1=document.createElement("div");
    ftrdiv1.setAttribute("class","col");
    document.querySelector(".ftr").append(ftrdiv1);

var ftrimg1=document.createElement("img");
    ftrimg1.setAttribute("class","logo");
    ftrimg1.setAttribute("src","img/logo.png");
    document.querySelector(".col").append(ftrimg1);

var ftrhead1=document.createElement("h4");
    ftrhead1.innerText="Contact";
    document.querySelector(".col").append(ftrhead1); 

var ftrp1=document.createElement("p");
    ftrp1.innerText="Address:Lucknow uttar pradesh";
    document.querySelector(".col").append(ftrp1); 

 var ftrp2=document.createElement("p");
    ftrp2.innerText="Phones:7408983897";
    document.querySelector(".col").append(ftrp2); 

var ftrp3=document.createElement("p");
    ftrp3.innerText="Hours:10:00 to 06:00";
    document.querySelector(".col").append(ftrp3); 

 var ftrdiv2=document.createElement("div");
    ftrdiv2.setAttribute("class","follow");
    document.querySelector(".col").append(ftrdiv2); 

var ftrhead2=document.createElement("h4");
    ftrhead2.innerText="Follow Us";
    document.querySelector(".follow").append(ftrhead2);   
    
 var ftrdiv3=document.createElement("div");
    ftrdiv3.setAttribute("class","icon");
    document.querySelector(".follow").append(ftrdiv3);
    
    
 var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-facebook"); 
    document.querySelector(".icon").append(ftricon);

var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-twitter"); 
    document.querySelector(".icon").append(ftricon);

var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-instagram"); 
    document.querySelector(".icon").append(ftricon);

var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-youtube"); 
    document.querySelector(".icon").append(ftricon);

var ftrdiv3=document.createElement("div");
    ftrdiv3.setAttribute("class","col about");
    document.querySelector(".ftr").append(ftrdiv3);  
    
   var ftrhead3=document.createElement("h4");
   ftrhead3.innerText="About Us";
   document.querySelector(".about").append(ftrhead3); 
  
   var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Delievry Information";
       document.querySelector(".about").append(ftrlink1); 

   var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Privacy Policy";
       document.querySelector(".about").append(ftrlink1);

       
   var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Term & Condition";
       document.querySelector(".about").append(ftrlink1);

  var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Contact Us";
       document.querySelector(".about").append(ftrlink1);



  var ftrdiv4=document.createElement("div");
       ftrdiv4.setAttribute("class","col account");
       document.querySelector(".ftr").append(ftrdiv4);  
       
      var ftrhead4=document.createElement("h4");
      ftrhead4.innerText="My Account";
      document.querySelector(".account").append(ftrhead4); 
     
      var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="Sign IN";
          document.querySelector(".account").append(ftrlink1); 
   
      var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="View Cart";
          document.querySelector(".account").append(ftrlink1);
   
          
      var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="My wishlist";
          document.querySelector(".account").append(ftrlink1);
   
     var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="Track My Order";
          document.querySelector(".account").append(ftrlink1);

     var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="Helps";
          document.querySelector(".account").append(ftrlink1);
      
    var ftrdiv5=document.createElement("div");
          ftrdiv5.setAttribute("class","col install");
          document.querySelector(".ftr").append(ftrdiv5);  

     var ftrhead4=document.createElement("h4");
          ftrhead4.innerText="Install App";
          document.querySelector(".install").append(ftrhead4);  

    var ftrp=document.createElement("p");
        ftrp.innerText="From App Store or Google Play";
          document.querySelector(".install").append(ftrp); 
          
          
    var ftrdiv5=document.createElement("div");
          ftrdiv5.setAttribute("class","row");
          document.querySelector(".install").append(ftrdiv5); 

    var ftrimg1=document.createElement("img");
        ftrimg1.setAttribute("src","img/pay/app.jpg");
        document.querySelector(".row").append(ftrimg1);  
        
    var ftrimg2=document.createElement("img");
        ftrimg2.setAttribute("src","img/pay/app.jpg"); 
        document.querySelector(".row").append(ftrimg2); 

    var ftrp=document.createElement("p");
        ftrp.innerText="Secured Payment Gateways";
        document.querySelector(".install").append(ftrp); 

    var ftrimg2=document.createElement("img");
        ftrimg2.setAttribute("src","img/pay/pay.png"); 
        document.querySelector(".install").append(ftrimg2); 

   
/*section footer end*/
// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}