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
a5.setAttribute("class","active");
a5.setAttribute("href","contact.html");
a5.innerHTML="Contact"
document.querySelector("#navbar-li5").append(a5);

var li6=document.createElement("li");
li6.setAttribute("id","navbar-li6");
document.querySelector("#navbar").append(li6);

var a6=document.createElement("a");
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


/*section contact form start*/
var section3=document.createElement("section");
    section3.setAttribute("id","contact-detail");
    section3.setAttribute("class","section-p1");
    document.querySelector("#Parent-section").append(section3);
     
var div=document.createElement("div");
    div.setAttribute("class","details")
    document.querySelector("#contact-detail").append(div);

var span=document.createElement("span");
  span.innerText="GET IN TOUCH";  
  
var h2=document.createElement("h2");
    h2.innerText="Visit one of our agency locations or contact us today";  

var h3=document.createElement("h3");
    h3.innerText="Head Office";
    
document.querySelector(".details").append(span,h2,h3);

     
var div=document.createElement("div");
    div.setAttribute("class","icons")
    document.querySelector(".details").append(div);

var li1=document.createElement("li");
    li1.setAttribute("class","li1")
    document.querySelector(".icons").append(li1);

var i1=document.createElement("i");
    i1.setAttribute("class","fa-solid fa-map");
    var p1=document.createElement("p");
        p1.innerText="56 Glassford Street Glasgow G1 1IUL New York";
document.querySelector(".li1").append(i1,p1);
 
var li2=document.createElement("li");
    li2.setAttribute("class","li2")
    document.querySelector(".icons").append(li2);

var i2=document.createElement("i");
    i2.setAttribute("class","far fa-envelope");
var p2=document.createElement("p");
    p2.innerText="contact@example.com";
    document.querySelector(".li2").append(i2,p2);


var li3=document.createElement("li");
    li3.setAttribute("class","li3")
    document.querySelector(".icons").append(li3);

var i3=document.createElement("i");
    i3.setAttribute("class","fa-solid fa-phone");
var p3=document.createElement("p");
    p3.innerText="contact@example.com";
    document.querySelector(".li3").append(i3,p3);

var li4=document.createElement("li");
    li4.setAttribute("class","li4")
    document.querySelector(".icons").append(li4);

var i4=document.createElement("i");
    i4.setAttribute("class","fa-regular fa-clock");
var p4=document.createElement("p");
    p4.innerText="Monday to satarday: 9:00 AM to 16:00PM";
    document.querySelector(".li4").append(i4,p4);

var div=document.createElement("div");
    div.setAttribute("class","map")
    document.querySelector("#contact-detail").append(div);

var iframe=document.createElement("iframe");
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.2666481903893!2d80.99704241497119!3d26.95845398310798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d74f586c77%3A0x4b4082bb8f3bef03!2sIntegral%20University!5e0!3m2!1sen!2sin!4v1674102862560!5m2!1sen!2sin")
    document.querySelector(".map").append(iframe);

    /*section form details*/

var section4=document.createElement("section");
    section4.setAttribute("id","form-details");
    document.querySelector("#Parent-section").append(section4);

var form=document.createElement("form");
    form.setAttribute("action"," ");
    form.setAttribute("id","form");
    document.querySelector("#form-details").append(form);

var span=document.createElement("span");
    span.innerText="Leave a Message";

var h2=document.createElement("h2");
    h2.innerText="We love to hear from you";

var input1=document.createElement("input");
        input1.setAttribute("type","text");
        input1.setAttribute("placeholder","Your Name");

var input2=document.createElement("input");
        input2.setAttribute("type","text");
        input2.setAttribute("placeholder","E-mail");

var input3=document.createElement("input");
        input3.setAttribute("type","text");
        input3.setAttribute("placeholder","Subject");

var textarea=document.createElement("textarea");
    textarea.setAttribute("placeholder","Your Message");
    textarea.setAttribute("rows","10");
    textarea.setAttribute("cols","30");

    
var btn=document.createElement("button");
   btn.setAttribute("class","normal");
    btn.innerText="Submit";

    document.querySelector("#form").append(span,h2,input1,input2,input3,textarea,btn);
 
     /*section form details end*/
     
      /*section form people*/

var  div=document.createElement("div");
      div.setAttribute("class","people")
      document.querySelector("#form-details").append(div); 

var  div=document.createElement("div");
     div.setAttribute("class","div-people")
     document.querySelector(".people").append(div); 

var img1=document.createElement("img");
    img1.setAttribute("src","img/people/1.png");
    document.querySelector(".div-people").append(img1); 

var p1=document.createElement("p");
    p1.setAttribute("id","para"); 
    p1.innerHTML="<span>John Doe</span>Senior Marketing Manager <br> phone: +000 123 000 77 88 <br> Email: contact@example.com"
    document.querySelector(".div-people").append(p1);  
  
    
var  div1=document.createElement("div");
     div1.setAttribute("class","div-people1")
     document.querySelector(".people").append(div1); 

var img1=document.createElement("img");
    img1.setAttribute("src","img/people/2.png");
    document.querySelector(".div-people1").append(img1); 

var p1=document.createElement("p");
    p1.setAttribute("id","para"); 
    p1.innerHTML="<span>John Doe</span>Senior Marketing Manager <br> phone: +000 123 000 77 88 <br> Email: contact@example.com"
    document.querySelector(".div-people1").append(p1);  
 
        
var  div2=document.createElement("div");
     div2.setAttribute("class","div-people2")
     document.querySelector(".people").append(div2); 

var img1=document.createElement("img");
img1.setAttribute("src","img/people/3.png");
document.querySelector(".div-people2").append(img1); 

var p1=document.createElement("p");
p1.setAttribute("id","para"); 
p1.innerHTML="<span>John Doe</span>Senior Marketing Manager <br> phone: +000 123 000 77 88 <br> Email: contact@example.com"
document.querySelector(".div-people2").append(p1);  
    

/*
  <section id="form-details">
           

        <div class="people">
            <div>
                <img src="img/people/1.png" alt="">
                <p><span>John Doe</span>Senior Marketing Manager <br> phone: +000 123 000 77 88 <br> Email: contact@example.com</p>
            </div>
            <div>
                <img src="img/people/2.png" alt="">
                <p><span>John Doe</span>Senior Marketing Manager <br> phone: +000 123 000 77 88 <br> Email: contact@example.com</p>
            </div>
            <div>
                <img src="img/people/3.png" alt="">
                <p><span>John Doe</span>Senior Marketing Manager <br> phone: +000 123 000 77 88 <br> Email: contact@example.com</p>
            </div>
        </div>
     </section>

 */





/*section9 news letter*/
var section9=document.createElement("section");
    section9.setAttribute("id","newsletter");
    section9.setAttribute("class","section-p1 section-m1");
    document.querySelector("#Parent-section").append(section9);

    var newsdiv1=document.createElement("div");
    newsdiv1.setAttribute("class","newstext");
    document.querySelector("#newsletter").append(newsdiv1);

    var newshead1=document.createElement("h4");   
        newshead1.innerText="Singup for Newsletter";
    document.querySelector(".newstext").append(newshead1);

    var newsp1=document.createElement("h4");   
        newsp1.innerText="Get Email updates about our latest shop and special offer.";
        document.querySelector(".newstext").append(newsp1);

    var newsdiv2=document.createElement("div");
        newsdiv2.setAttribute("class","form");
        document.querySelector("#newsletter").append(newsdiv2); 
        
    var newsinput=document.createElement("input");
         newsinput.setAttribute("type","text");
         newsinput.setAttribute("placeholder", "your email address"); 
         document.querySelector(".form").append(newsinput); 

  var newsbtn=document.createElement("button");
         newsbtn.setAttribute("class","normal"); 
         newsbtn.innerText="Sing Up"; 
         document.querySelector(".form").append(newsbtn); 
        
/*section9 news letter end*/

/*footer start*/

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
