formdata = localStorage.getItem("first_page_data");
let applicationid = () => {
  var now = new Date();
  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, '0');
  var date = String(now.getDate()).padStart(2, '0');
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  var seconds = String(now.getSeconds()).padStart(2, '0');


  var longVariable = year + month + date + hours + minutes + seconds;
  return longVariable;
}

var image = "";
function submit() {
  // Prevent form submission
  

  let ardt = document.getElementsByClassName('input-drop')[0].innerHTML
  let ardd =  document.getElementsByClassName('input-text')[0].value

  let apdt = document.getElementsByClassName('input-drop')[1].innerHTML
  let apdd =document.getElementsByClassName('input-text')[1].value

  let pidt = document.getElementsByClassName('input-drop')[2].innerHTML
  let pidd =document.getElementsByClassName('input-text')[2].value

  let cdt = document.getElementsByClassName('input-drop')[3].innerHTML
  let cdd  =document.getElementsByClassName('input-text')[3].value

  let rWBdt = document.getElementsByClassName('input-drop')[4].innerHTML
  let rWBdd =document.getElementsByClassName('input-text')[4].value

  let lrdt = document.getElementsByClassName('input-drop')[5].innerHTML
  let lrdd =document.getElementsByClassName('input-text')[5].value

  let voterIdof = document.getElementsByClassName('input-drop')[6].innerHTML
  let voterNo =document.getElementsByClassName('input-text')[6].value
  let AssembNo =document.getElementsByClassName('input-text')[7].value
  let partNo =document.getElementsByClassName('input-text')[8].value
  let serialNo =document.getElementsByClassName('input-text')[9].value


  let datas = `&ardt=${ardt}&ardd=${ardd}&apdt=${apdt}&apdd=${apdd}&pidt=${pidt}&pidd=${pidd}&cdt=${cdt}&cdd=${cdd}&rWBdt=${rWBdt}&rWBdd=${rWBdd}&lrdt=${lrdt}&lrdd=${lrdd}&voterIdof=${voterIdof}&voterNo=${voterNo}&AssembNo=${AssembNo}&partNo=${partNo}&serialNo=${serialNo}&image=${image}`
  datas = `appNo=${applicationid()}&` +formdata + datas;
  // document.getElementById("text_value").value = datas;
    // $.ajax({
    //   type: "POST",
    //   url: "data.php",
    //   data: datas,
    //   success: function () {
        // Handle success
        // localStorage.setItem("alldata",datas)
        localStorage.setItem("appNo",applicationid());
        window.location.href = "lastpage.html"
      // },
      // error: function (xhr, status, error) {
      //   // Handle error
      //   alert("An error occurred while submitting the form.");
      //   console.log(error);
      //   console.log(status);
      // },
    // });
}


function getdata() {          // ? adds red border to all inputs when empty
  // console.log(document.getElementByIdr('image_btn').value);
  for (let i = 0; i < 10; i++) {

    if (document.getElementsByClassName('input-text')[i].value == "") {

      document.getElementsByClassName('input-text')[i].classList.add("border-red-500")
    }
  }
  for (let i = 0; i < 7; i++) {
    if (document.getElementsByClassName('input-drop')[i].innerHTML == "Select from List") {
      document.getElementsByClassName('input-drop')[i].parentElement.classList.remove("border-transparent")
      document.getElementsByClassName('input-drop')[i].parentElement.classList.add("border-red-500")
    }
  }
  if(document.getElementById("image_btn").files.length === 0)
    document.getElementById("image_btn").parentElement.classList.add("border-red-500")

  let vacant = document.getElementsByClassName("border-red-500").length
  
  if(vacant ===0){
    if(confirm("Are you sure you want to?")){
      submit();
    }
  }
}


function clickeed(e) {              // *TODO dropdown list name change 
  let value = e.innerHTML;
  e.parentElement.previousElementSibling.previousElementSibling.innerHTML = value;
}
// console.log(document.getElementById('image_btn').files);


function inputfocus(e) {                // *? onfocus removes red border
  e.classList.remove("border-red-500")
}

function convertToBase64() {                // *TODO converts image to base64 string
  var input = document.getElementById("image_btn");
  var file = input.files[0];
  if (file.size <= 153600) {
    var reader = new FileReader();

    reader.onloadend = function () {
      var base64String = reader.result;
      image = base64String;
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    document.getElementById("file-size").classList.remove("text-red-500")
    document.getElementById("file-size").classList.remove("text-3xl")
    document.getElementById("file-size").classList.add("text-blue-600")
    document.getElementById("image_btn").parentElement.classList.remove("border-red-500")
    document.getElementById("file-size").previousElementSibling.classList.remove("text-3xl")

  }else{
    document.getElementById("file-size").classList.remove("text-blue-600")
    document.getElementById("file-size").classList.add("text-red-500")
    document.getElementById("file-size").classList.add("text-3xl")
    document.getElementById("file-size").previousElementSibling.classList.add("text-3xl")
    document.getElementById("image_btn").parentElement.classList.add("border-red-500")
  }
  // e.disabled = true;
  // e.innerHTML = "Done"
}


