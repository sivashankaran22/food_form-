// heading------------!
const heading = document.createElement("h1");
heading.innerText="Fill The Form";
heading.setAttribute("class","center");
heading.setAttribute("id","title");

//header------------!
const header = document.createElement("header");
header.setAttribute("id","header");
header.appendChild(heading) 
document.body.append(header);

// para--------------!
const para = document.createElement("p");
para.setAttribute("class","center");
para.setAttribute("id","description");
para.innerText = "Hi can you please fill the form .This information need for improve our service...😊";
document.body.append(para);

// firstname-----------!
const fname = document.createElement("label");
fname.innerText = "First Name ";
fname.setAttribute("id","fname");
fname.setAttribute("class","col-sm-2 col-form-label");

// firstname input----------!
const finput = document.createElement("input");
finput.setAttribute("id","first-name");
finput.setAttribute("class","form-control");
finput.setAttribute("type","text");
finput.setAttribute("required","");
finput.setAttribute("name","firstname");
finput.setAttribute("placeholder","Please Enter The FirstName");

// Div_Inner------------!
const inDiv4 = document.createElement("div");
inDiv4.setAttribute("class","col-sm-10");
inDiv4.appendChild(finput);

//div-------------------!
const div = document.createElement("div");
div.setAttribute("class","mb-3 row");
div.appendChild(fname);
div.appendChild(inDiv4);

// lastName------------!
const lname = document.createElement("label");
lname.innerText = "Last Name  ";
lname.setAttribute("class","col-sm-2 col-form-label");

// lastnameinput--------!
const linput = document.createElement("input");
linput.setAttribute("id","last-name");
linput.setAttribute("class","form-control");
linput.setAttribute("type","text");
linput.setAttribute("name","lastname");
linput.setAttribute("required","");
linput.setAttribute("placeholder","Please Enter The LastName");

// Div_Inner------------!
const inDiv5 = document.createElement("div");
inDiv5.setAttribute("class","col-sm-10");
inDiv5.appendChild(linput);

//div-------------------!
const div1 = document.createElement("div");
div1.setAttribute("class","mb-3 row");
div1.appendChild(lname);
div1.appendChild(inDiv5);

// Address--------!
const address = document.createElement("label");
address.setAttribute("id","addressEdit");
address.setAttribute("class","col-sm-2 col-form-label");
address.innerText="Address "; 

// Addressinput----!
const Ainput = document.createElement("input");
Ainput.setAttribute("id","you-address");
Ainput.setAttribute("class","form-control");
Ainput.setAttribute("type","textarea");
Ainput.setAttribute("name","youraddress");
Ainput.setAttribute("required","");

// Div_Inner------------!
const inDiv6 = document.createElement("div");
inDiv6.setAttribute("class","col-sm-10");
inDiv6.appendChild(Ainput);

//div-------------------!
const div2 = document.createElement("div");
div2.setAttribute("class","mb-3 row");
div2.appendChild(address);
div2.appendChild(inDiv6);

// Pincode--------!
const Pincode= document.createElement("label");
Pincode.setAttribute("id","pincodelab");
Pincode.setAttribute("class","col-sm-2 col-form-label");
Pincode.innerText="Pincode "; 

// pincodeinput-------!
const pininput = document.createElement("input");
pininput.setAttribute("id","you-pincode");
pininput.setAttribute("class","form-control")
pininput.setAttribute("type","number");
pininput.setAttribute("name","pincodearea");
pininput.setAttribute("required","");

// Div_Inner------------!
const inDiv7 = document.createElement("div");
inDiv7.setAttribute("class","col-sm-10");
inDiv7.appendChild(pininput);

//div-------------------!
const div3 = document.createElement("div");
div3.setAttribute("class","mb-3 row");
div3.appendChild(Pincode);
div3.appendChild(inDiv7);

// Gender-----!
const gender = document.createElement("label");
gender.setAttribute("id","gen");
gender.setAttribute("class","col-sm-2 col-form-label");
gender.innerText="Gender ";

// maleinput------!
const malein = document.createElement("input");
malein.setAttribute("type","radio");
malein.setAttribute("id","inmale");
malein.setAttribute("name","type1");
malein.setAttribute("value","Male");
malein.setAttribute("class","gender-sel");

// male-----!
const male = document.createElement("label");
male.setAttribute("id","male");
male.setAttribute("for","inmale");
male.setAttribute("class","ms-1");
male.textContent = "Male";

// femaleinput------!
const femalein = document.createElement("input");
femalein.setAttribute("type","radio");
femalein.setAttribute("id","infemale");
femalein.setAttribute("name","type1");
femalein.setAttribute("value","Female");
femalein.setAttribute("class","ms-4");

//female-----!
const female = document.createElement("label");
female.setAttribute("id","female");
female.setAttribute("for","infemale");
female.setAttribute("class","ms-1");
female.textContent = "Female";

// otherinput------!
const otherin = document.createElement("input");
otherin.setAttribute("type","radio");
otherin.setAttribute("id","inother");
otherin.setAttribute("name","type1");
otherin.setAttribute("value","Other");
otherin.setAttribute("class","ms-4");

// other-----!
const other = document.createElement("label");
other.setAttribute("id","other");
other.setAttribute("for","inother");
other.setAttribute("class","ms-1");
other.textContent = "Other";

//div-------------------!
const div4 = document.createElement("div");
div4.setAttribute("class","d1");
div4.appendChild(gender);
div4.appendChild(malein);
div4.appendChild(male);
div4.appendChild(femalein);
div4.appendChild(female);
div4.appendChild(otherin);
div4.appendChild(other);

// State--------!
const state= document.createElement("label");
state.setAttribute("id","hNoEdit");
state.setAttribute("class","col-sm-2 col-form-label");
state.innerText="State "; 

// Stateinput------!
const stateinput = document.createElement("input");
stateinput.setAttribute("id","you-state");
stateinput.setAttribute("class","form-control");
stateinput.setAttribute("type","text");
stateinput.setAttribute("name","yourstate");
stateinput.setAttribute("required","");

// Div_Inner------------!
const inDiv8 = document.createElement("div");
inDiv8.setAttribute("class","col-sm-10");
inDiv8.appendChild(stateinput);

//div-------------------!
const div5 = document.createElement("div");
div5.setAttribute("class","mb-3 row");
div5.appendChild(state);
div5.appendChild(inDiv8);

// country--------!
const country= document.createElement("label");
country.setAttribute("id","hNoEdit");
country.setAttribute("class","col-sm-2 col-form-label");
country.innerText="Country "; 

// country-------!
const countryinput = document.createElement("input");
countryinput.setAttribute("id","you-country");
countryinput.setAttribute("class","form-control");
countryinput.setAttribute("type","text");
countryinput.setAttribute("name","yourcountry");
countryinput.setAttribute("required","");

// Div_Inner------------!
const inDiv9 = document.createElement("div");
inDiv9.setAttribute("class","col-sm-10");
inDiv9.appendChild(countryinput);

//div-------------------!
const div6 = document.createElement("div");
div6.setAttribute("class","mb-3 row");
div6.appendChild(country);
div6.appendChild(inDiv9);

// Food-------------!
const food = document.createElement("label");
food.setAttribute("id","foodEdit");
food.setAttribute("class","col-sm-2 col-form-label");
food.innerText="Food ";

// food select---------!
// itlyfood-----!
const itlyinput = document.createElement("input");
itlyinput.setAttribute("class","food-sel");
itlyinput.setAttribute("type","checkbox");
itlyinput.setAttribute("value","itly");
itlyinput.setAttribute("id","itly-break-fast");
itlyinput.setAttribute("name","typed");

// itly----!
const itly= document.createElement("label");
itly.setAttribute("class","ms-1");
itly.setAttribute("id","itly");
itly.setAttribute("for","itly-break-fast");
itly.innerText="Itly"; 

// dosafood------!
const Dosainput = document.createElement("input");
Dosainput.setAttribute("class","ms-4");
Dosainput.setAttribute("type","checkbox");
Dosainput.setAttribute("value","dosa");
Dosainput.setAttribute("id","dosa-break-fast");
Dosainput.setAttribute("name","typed");

// dosa----!
const dosa= document.createElement("label");
dosa.setAttribute("class","ms-1");
dosa.setAttribute("for","dosa-break-fast");
dosa.setAttribute("id","dosa");
dosa.innerText="Dosa"; 

// sapathifood----!
const sapathiinput = document.createElement("input");
sapathiinput.setAttribute("class","ms-4");
sapathiinput.setAttribute("type","checkbox");
sapathiinput.setAttribute("value","sapathi");
sapathiinput.setAttribute("id","sapathi-break-fast");
sapathiinput.setAttribute("name","typed");

// sapathi----!
const sapathi= document.createElement("label");
sapathi.setAttribute("class","ms-1");
sapathi.setAttribute("for","sapathi-break-fast");
sapathi.setAttribute("id","sapathi");
sapathi.innerText="Sapathi"; 

// purifood----------!
const puriinput = document.createElement("input");
puriinput.setAttribute("class","ms-4");
puriinput.setAttribute("type","checkbox");
puriinput.setAttribute("value","puri");
puriinput.setAttribute("id","puri-break-fast");
puriinput.setAttribute("name","typed");

// puri----!
const puri= document.createElement("label");
puri.setAttribute("class","ms-1");
puri.setAttribute("for","puri-break-fast");
puri.setAttribute("id","puri");
puri.innerText="Puri"; 

// pongalfood------!
const pongalinput = document.createElement("input");
pongalinput.setAttribute("class","ms-4");
pongalinput.setAttribute("type","checkbox");
pongalinput.setAttribute("value","pongal");
pongalinput.setAttribute("id","pongal-break-fast");
pongalinput.setAttribute("name","typed");

// pongal----!
const pongal= document.createElement("label");
pongal.setAttribute("class","ms-1");
pongal.setAttribute("for","pongal-break-fast");
pongal.setAttribute("id","pongal");
pongal.innerText="Pongal"; 

//div-------------------!
const div7 = document.createElement("div");
div7.setAttribute("class","d1");
div7.appendChild(food);
div7.appendChild(itlyinput);
div7.appendChild(itly);
div7.appendChild(Dosainput);
div7.appendChild(dosa);
div7.appendChild(sapathiinput);
div7.appendChild(sapathi);
div7.appendChild(puriinput);
div7.appendChild(puri);
div7.appendChild(pongalinput);
div7.appendChild(pongal);

//Submit----!
const button = document.createElement("button");
button.setAttribute("class","btn btn-primary ms-4")
button.setAttribute("id","submit");
button.setAttribute("type","submit");
button.textContent = "Submit";

//div-------------------!
const div8 = document.createElement("div");
div8.setAttribute("class","text-center");
div8.appendChild(button);


//Form-------!
const Form = document.createElement("form");
Form.setAttribute("class","m-4 p-2");
Form.setAttribute("id","form");
Form.setAttribute("name","menu");
Form.setAttribute("onsubmit","submitfunction()");
Form.appendChild(div);
Form.appendChild(div1);
Form.appendChild(div2);
Form.appendChild(div3);
Form.appendChild(div4);
Form.appendChild(div5);
Form.appendChild(div6);
Form.appendChild(div7);
Form.appendChild(div8);

document.body.append(Form);
// form end-------------------------!

//table start-----------------------!
// table----------------------------!
const table = document.createElement("table");
table.setAttribute("id","tab-container");
table.setAttribute("class","table table-sm");

// tablerow-----------------------!
const tablerow = document.createElement("tr");
tablerow.setAttribute("class","tab-row")
tablerow.setAttribute("id","tablerow");
table.appendChild(tablerow)

// tablehead----------------------!
const tablehead = document.createElement("th");
tablehead.setAttribute("class","tablehead");
tablehead.setAttribute("id","tb");
tablehead.innerText ="Firstname"
tablerow.appendChild(tablehead)

const tablehead1 = document.createElement("th");
tablehead1.setAttribute("class","tablehead");
tablehead1.setAttribute("id","tb1");
tablehead1.innerText ="Lastname"
tablerow.appendChild(tablehead1)

const tablehead2 = document.createElement("th");
tablehead2.setAttribute("class","tablehead");
tablehead2.setAttribute("id","tb2");
tablehead2.innerText ="Address"
tablerow.appendChild(tablehead2)

const tablehead3 = document.createElement("th");
tablehead3.setAttribute("class","tablehead");
tablehead3.setAttribute("id","tb3");
tablehead3.innerText ="Pincode"
tablerow.appendChild(tablehead3)

const tablehead4 = document.createElement("th");
tablehead4.setAttribute("class","tablehead");
tablehead4.setAttribute("id","tb4");
tablehead4.innerText ="Gender"
tablerow.appendChild(tablehead4)

const tablehead5 = document.createElement("th");
tablehead5.setAttribute("class","tablehead");
tablehead5.setAttribute("id","tb5");
tablehead5.innerText ="State"
tablerow.appendChild(tablehead5)

const tablehead6 = document.createElement("th");
tablehead6.setAttribute("class","tablehead");
tablehead6.setAttribute("id","tb6");
tablehead6.innerText ="Country"
tablerow.appendChild(tablehead6)

const tablehead7 = document.createElement("th");
tablehead7.setAttribute("class","tablehead");
tablehead7.setAttribute("id","tb7");
tablehead7.innerText ="Food"
tablerow.appendChild(tablehead7)

document.body.append(table);

// table end--------------------------!


// functions--------------------------!

let btn = document.getElementById("submit");
let fomtab = document.getElementById("tab-container");


btn.addEventListener("click",(event)=>{
    event.preventDefault();
let fomtab = document.getElementById("tab-container");
let row = fomtab.insertRow();
let cel1 = row.insertCell();
let cel2 = row.insertCell();
let cel3 = row.insertCell();
let cel4 = row.insertCell();
let cel5 = row.insertCell();
let cel6 = row.insertCell();
let cel7 = row.insertCell();
let cel8 = row.insertCell();


cel1.innerHTML = document.getElementById("first-name").value;
cel2.innerHTML = document.getElementById("last-name").value;
cel3.innerHTML = document.getElementById("you-address").value;
cel4.innerHTML = document.getElementById("you-pincode").value;

// ------radio button  value get the table----
const cell5 = document.getElementsByName("type1");
 for(var i = 0; i < cell5.length; i++) {
            if(cell5[i].checked)
            cel5.innerHTML = (cell5[i].value);
        }
cel6.innerHTML = document.getElementById("you-state").value;
cel7.innerHTML = document.getElementById("you-country").value;

// ---Checkbox value get the table------
const cell6 = document.getElementsByName("typed"); 
          let result  = "";
           
                 for(var i = 0; i < cell6.length; i++) {
                  if(cell6[i].checked){
                    result +=cell6[i].value+",";
                  }
                  cel8.innerHTML =(result.slice(0,-1));
                }           
 
// ----This code after enter the submit button automatically clear the innput value----------

 document.getElementById("form").reset(); 

})

       
    


