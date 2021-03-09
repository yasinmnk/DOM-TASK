// document.title='WEEK5-DOM-TASK';



// // console.dir(document.domain)
// // console.log(document.URL)

// // console.log(document.body)


// //console.log(document.getElementById());


// var items=document.getElementsByClassName('form-label');
// console.log(items);

// console.log(items[1]);

// items[0].textContent='e mail adresi';
// items[1].textContent='sifreniz';

// const div1 = document.createElement("div");

// div1.className = "container";

// div1.textContent='lutfen bir sayi giriniz';

//     div1.setAttribute("id","cont_1");
//     document.body.appendChild(div1);
//     div1.style.marginLeft = "5%";
//     div1.style.float = "left";
//     div1.style.marginTop = "20px";


// const form = document.createElement("form");
//     document.querySelector("#cont_1").appendChild(form);
//     form.className = ("form1");
//     form.innerHTML = "Hesap Makinesi";
    

// const input1 = document.createElement("input");
//     document.querySelector(".form1").appendChild(input1);
//     input1.setAttribute("class","inputs");
//     input1.setAttribute("id", "input1");
//     input1.style.marginBottom = "5px";
//     input1.style.marginTop = "5px";




// const input2 = document.createElement("input");

//     document.querySelector(".form1").appendChild(input2);
//     input2.setAttribute("class","inputs");
//     input2.setAttribute("id", "input2");
    

// const buton1 = document.createElement("input");
//     document.querySelector(".form1").appendChild(buton1);
//     buton1.setAttribute("type","button");
//     buton1.setAttribute("id","topla");
//     buton1.setAttribute("value", "+");
//     buton1.className = "islem";
//     buton1.addEventListener("click", function topla() {
//         let s1=document.getElementById("input1").value;     
//         let s2=document.getElementById("input2").value;
//  	    result.value=parseInt(s1)+parseInt(s2);
//     });

// const buton2 = document.createElement("input");
//     document.querySelector(".form1").appendChild(buton2);
//     buton2.setAttribute("type","button");
//     buton2.setAttribute("id","cikar");
//     buton2.setAttribute("value", "-");
//     buton2.className = "islem";
//     buton2.addEventListener("click", function cikar() {
//         let s1=document.getElementById("input1").value;  
//         let s2=document.getElementById("input2").value;
//         result.value=parseInt(s1)-parseInt(s2);
//     });

// const buton3 = document.createElement("input");
//     document.querySelector(".form1").appendChild(buton3);
//     buton3.setAttribute("type","button");
//     buton3.setAttribute("id","carp");
//     buton3.setAttribute("value", "*");
//     buton3.className = "islem";
//     buton3.addEventListener("click", function carp() {
//         let s1=document.getElementById("input1").value;  
// 	let s2=document.getElementById("input2").value;
// 	result.value=parseInt(s1)*parseInt(s2);
//     });

// const buton4 = document.createElement("input");
//     document.querySelector(".form1").appendChild(buton4);
//     buton4.setAttribute("type","button");
//     buton4.setAttribute("id","bol");
//     buton4.setAttribute("value", "/");
//     buton4.className = "islem";
//     buton4.addEventListener("click", function bol() {
//         let s1=document.getElementById("input1").value;   
//         let s2=document.getElementById("input2").value; 
//         if(s2==0) {
//             alert("2.sayıyı 'Sıfır' girmeyiniz");
//         }else {
//             result.value=parseInt(s1)/parseInt(s2)
//         }
//     });

// let result = document.createElement("input");
//     document.querySelector(".form1").appendChild(result);
//     result.className = "inputs";
//     result.setAttribute("type","text");
//     result.setAttribute("id","result"); 
//     result.style.display = "block";



var itemList=document.querySelector('#list-group');


console.log(itemList.children);