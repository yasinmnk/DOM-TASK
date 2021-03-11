// "kullanici bilgileri"

const div1 = document.createElement("div");
div1.setAttribute("id", "test");
div1.className = "container";
document.body.appendChild(div1);

const form = document.createElement("form");
document.querySelector("#test").appendChild(form);

const headerForm = document.createElement("h2");
headerForm.innerHTML = "Kullanici Bilgileri";
headerForm.marginBottom = "25px";
headerForm.style.color = "red";
form.appendChild(headerForm);
form.className = "form1";
form.marginBottom = "25px";

//birinci veri

const div2 = document.createElement("div");
div2.setAttribute("id", "test1");
div2.className = "container";
document.body.appendChild(div2);

const form1 = document.createElement("form");
document.querySelector("#test1").appendChild(form1);
form1.className = "form2";
form1.innerHTML = "e-mail:";

const input1 = document.createElement("input");
document.querySelector("#form2");
form1.appendChild(input1);
input1.className = "e-mail";
input1.innerHTML = "email adresi";
input1.setAttribute("id", "email1");
input1.style.color = "red";
input1.style.border = "solid 2px";
input1.placeholder = "e-mail adresi";
input1.style.marginBottom = "15px";
input1.style.marginInlineStart = "15px";

//ikinci veri

const div3 = document.createElement("div");
div3.setAttribute("id", "test2");
div3.className = "container";
document.body.appendChild(div3);

const form2 = document.createElement("form");
document.querySelector("#test2").appendChild(form2);
form2.className = "form3";
form2.innerHTML = "isim:";

const input2 = document.createElement("input");
document.querySelector("#form3");
form2.appendChild(input2);
input2.className = "isim";
input2.innerHTML = "isim giriniz";
input2.setAttribute("id", "isim1");

input2.style.color = "red";
input2.style.border = "solid 2px";
input2.placeholder = "isim giriniz";
input2.style.marginInlineStart = "26px";

// ucuncu veri

const div4 = document.createElement("div");
div4.setAttribute("id", "test3");
div4.className = "container";
document.body.appendChild(div4);

const form3 = document.createElement("form");
document.querySelector("#test3").appendChild(form3);
form3.className = "form4";
form3.innerHTML = "s.isim:";

const input3 = document.createElement("input");
document.querySelector("#form4");
form3.appendChild(input3);
input3.className = "soyisim";
input3.innerHTML = "soyisim giriniz";
input3.setAttribute("id", "soyisim");
input3.placeholder = "soyisim giriniz";
input3.style.margin = "15px";
input3.style.border = "solid 2px";
input3.style.color = "red";

//dorduncu veri
const div5 = document.createElement("div");
div5.setAttribute("id", "test4");
div5.className = "container";
document.body.appendChild(div5);

const form4 = document.createElement("form");
document.querySelector("#test4").appendChild(form4);
form4.className = "form5";
form4.innerHTML = "sifre:";

const input4 = document.createElement("input");
document.querySelector("#for5");
form4.appendChild(input4);
input4.type = "password";
input4.className = "password";
input4.innerHTML = "password";
input4.setAttribute("id", "sifre");
input4.placeholder = "sifre giriniz";
input4.marginBottom = "19px";
input4.style.marginInlineStart = "23px";
input4.style.border = "solid 2px";
input4.style.color = "red";

//dogrulama

let button = document.createElement("button");
button.style.backgroundColor = "yellow";
button.innerHTML = "dogrula";
button.setAttribute("id", "b1");
button.style.marginInlineStart = "100px";
button.style.marginTop = "15px";
div5.appendChild(button);
