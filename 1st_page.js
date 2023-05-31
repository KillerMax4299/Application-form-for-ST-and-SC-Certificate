var perm_add; var blood_rel; var mig; var formData;
function saveandcont() {
  // if(confirm("do you want to save and continue to next step?")){
  // console.log("municipality / block", document.getElementsByName("municipality").length);
  
  formData = $("#formdata").serialize();
  // console.log(typeof formData);
  // document.getElementById("form_data").value =  formData.replaceAll('=&','    ')

  // console.log(rest_data());
  formData = decodeURI(formData)+ rest_data()
  

  // }
  perm_add = document.getElementById("address_switch").checked
  blood_rel = document.getElementById("blood_switch").checked
  mig = document.getElementById("mig_switch").checked


  alldata()
  email()
  phone()
  let reds = document.getElementsByClassName("border-red-500").length
  if(reds ===0){
    if(confirm("Are you sure you want to?")){
      localStorage.setItem("first_page_data",formData)
    
      window.location.href = "second-page.html"
    }
  }

}
function alldata() {
  for (let i = 0; i < 6; i++) {
    if (document.getElementsByClassName("input-drop")[i].innerHTML == "Select from List" || document.getElementsByClassName("input-drop")[i].innerHTML == "District" || document.getElementsByClassName("input-drop")[i].innerHTML == "Sub-Division") {
      let a = document.getElementsByClassName("input-drop")[i].parentElement
      a.classList.remove("border-transparent")
      a.classList.add("border-red-500")

    }
  }
  let a = document.getElementsByClassName('input-text').length
  for (let i = 0; i < a; i++) {

    if (document.getElementsByClassName('input-text')[i].value == "") {
      document.getElementsByClassName('input-text')[i].classList.add("border-red-500")
    }
  }
  docreq()
  spec_remove()
  municipality()
  scst()
  permcheck()
  migration_check()
  blood_rel_check()

}
function inputfocus(e) {                // *? onfocus removes red border
  e.classList.remove("border-red-500")
}
function permcheck() {
  if (perm_add) {
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName('perm')[i].classList.remove("border-red-500")
    }
  }
}
function migration_check() {
  if (!mig) {
    for (let i = 0; i < 8; i++) {
      document.getElementsByClassName('mig')[i].classList.remove("border-red-500")
    }
  }
}
function blood_rel_check() {
  
  if (!blood_rel) {
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName('bloodrel')[i].classList.remove("border-red-500")
    }
  }
}

function municipality(){
  if(!document.getElementsByName("municipality")[0].checked && 
  !document.getElementsByName("municipality")[1].checked){
    document.getElementById("inlineRadio1").parentElement.parentElement.classList.add("border-red-500");
  } 
}

function scst(){
  if(!document.getElementsByName("scst")[0].checked && 
  !document.getElementsByName("scst")[1].checked){
    document.getElementById("inlineRadio3").parentElement.parentElement.classList.add("border-red-500");
  }
}


function spec_remove(){
  if(document.getElementsByClassName("input-drop")[3].innerHTML != "Others"){
    document.getElementsByName("religion_spec")[0].classList.remove("border-red-500")
  }
  if(document.getElementsByClassName("input-drop")[4].innerHTML != "Others"){
    document.getElementsByName("gender_spec")[0].classList.remove("border-red-500")
  }
  if(document.getElementsByClassName("input-drop")[5].innerHTML != "Others"){
    document.getElementsByName("blood_rel_spec")[0].classList.remove("border-red-500")
  }
}

function email(){
  let myemail = document.getElementsByName("email")[0].value
  let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

  let result = myemail.match(pattern)
  if(!result){
    document.getElementsByName("email")[0].classList.add("border-red-500")
  }
}
function phone(){
  let myemail = document.getElementsByName("mobile")[0].value
  let pattern = /\d{10}/g

  let result = myemail.match(pattern)
  if(!result){
    document.getElementsByName("mobile")[0].classList.add("border-red-500")
  }
}

function docreq(){
  let epic = document.getElementsByClassName("doc-req")[0].value
  epic = epic != "" ? true : false
  let aadhar = document.getElementsByClassName("doc-req")[1].value
  aadhar = aadhar != "" ? true : false
  let khadya = document.getElementsByClassName("doc-req")[2].value
  khadya = khadya != "" ? true : false
  let panNo = document.getElementsByClassName("doc-req")[3].value
  khadya = khadya != "" ? true : false
  if(epic || aadhar || khadya ||panNo){
    for(let i=0;i<4;i++){
      document.getElementsByClassName("doc-req")[i].classList.remove("border-red-500")
    }
  }
}

let rest_data = ()=>{
  str = "";
  let district = document.getElementsByClassName("input-drop")[0].innerHTML
  let subdiv = document.getElementsByClassName("input-drop")[1].innerHTML
  let tribe = document.getElementsByClassName("input-drop")[2].innerHTML
  let religion = document.getElementsByClassName("input-drop")[3].innerHTML
  let gender = document.getElementsByClassName("input-drop")[4].innerHTML
  let bloodrel = document.getElementsByClassName("input-drop")[5].innerHTML

  if(document.getElementsByClassName("input-drop")[5].disabled){
    str = `&district=${district}&subdiv=${subdiv}&tribe=${tribe}&religion=${religion}&gender=${gender}`
  }
  else{
    str = `&district=${district}&subdiv=${subdiv}&tribe=${tribe}&religion=${religion}&gender=${gender}&bloodrel=${bloodrel}`
  }
  
  return str;
}

