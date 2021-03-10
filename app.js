
const div1 = document.createElement("div");
div1.setAttribute("id", "test");
div1.className = "container";
document.body.appendChild(div1);


const form = document.createElement("form");
document.querySelector("#test").appendChild(form);
form.className = "form1";
form.innerHTML = "kullanici bilgileri";



///////////////////////////////////////////


const div2 = document.createElement("div");
div1.setAttribute("id", "test1");
div1.className = "container";
document.body.appendChild(div2);



const form1 = document.createElement("form");
document.querySelector("#test1").appendChild(form1);
form1.className = "form2";
form1.innerHTML = "e-mail";



const input1 = document.createElement("input");
document.querySelector("#form2")
form1.appendChild(input1);
input1.className = "e-mail";
input1.innerHTML = "email adresi";
input1.setAttribute("id", "email1");
input1.style.marginBottom = "15px";
input1.style.margin = "125px";
input1.style.color = "red";
input1.placeholder='e-mail adresi'




/////////////////////////////////////////

const div3 = document.createElement("div");
div1.setAttribute("id", "test2");
div1.className = "container";
document.body.appendChild(div3);


const form2 = document.createElement("form");
document.querySelector("#test2").appendChild(form2);
form2.className = "form3";
form2.innerHTML = "issim";


const input2 = document.createElement("input");
document.querySelector("#form3")
form2.appendChild(input2);
input2.className = "isim";
input2.innerHTML = "isim giriniz";
input2.setAttribute("id", "isim1");
input1.style.marginBottom = "15px";
input1.style.marginInlineStart = "15px";
input2.style.color = "red";
input2.placeholder='isim giriniz';



/////////////////////////////////////////////





const div4 = document.createElement("div");
div1.setAttribute("id", "test3");
div1.className = "container";
document.body.appendChild(div4);



const form3 = document.createElement("form");
document.querySelector("#test3").appendChild(form3);
form3.className = "form4";
form3.innerHTML = "s.isim";



const input3 = document.createElement("input");
document.querySelector("#form4")
form3.appendChild(input3);
input3.className = "soyisim";
input3.innerHTML = "soyisim giriniz";
input3.setAttribute("id", "soyisim");
input3.placeholder='soyisim giriniz'
input1.style.margin = "15px";

input3.style.backgroundColor='yellow'
input3.style.color = "red";







const div5 = document.createElement("div");
div5.setAttribute("id", "test4");
div5.className = "container";
document.body.appendChild(div5);



let button=document.createElement('button')
button.setAttribute('id','b1')
button.className=' btn btn=succes'
button.innerHTML='dogrula'

div5.appendChild(button)




const div6 = document.createElement("div");
div6.setAttribute("id", "test5");
div6.className = "container";
document.body.appendChild(div6);



const check_box=document.createElement('checkbox')
check_box.setAttribute('id','test6')
check_box.className='check me out'
check_box.innerHTML='check me out'

div6.appendChild(check_box)





//const form=document.createElement('form')

//div1.className='form1';





