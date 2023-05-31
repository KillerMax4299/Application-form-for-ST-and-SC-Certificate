var sub_div = {
  "Alipurduar": ["Alipurduar"],

  "Bankura": ["Bankura", "Bishnupur", "Khatra"],
  "Birbhum": ["Bolpur", "Rampurhat", "Suri"],
  "Cooch Behar": [
    "Cooch Behar",
    "Dinhata",
    "Mathabhanga",
    "Mekhiliganj",
    "Tufanganj",
  ],
  "Dakshin Dinajpur": ["Balurghat", "Gangarampur"],
  "Darjeeling": ["Darjeeling", "Kurseong", "Mirik", "Siliguri"],
  "Hooghly": ["Arambag", "Chandannagar", "Chinsurah", "Srirampur"],
  "Howrah": ["Howrah", "Uluberia"],
  "Jalpaiguri": ["Jalpaiguri", "Malbazar"],
  "Jhargram": ["Jhargram"],
  "Kalimpong": ["Kalimpong"],
  "Kolkata": ["Kolkata"],
  "Malda": ["Chanchal", "Malda"],
  "Murshidabad": ["Berhampore", "Domkal", "Jahgipur", "Kandi", "Lalbag"],
  "Nadia": ["Kalyani", "Krishnanagar", "Ranaghat", "Tehatta"],
  "North 24 Parganas": [
    "Bangaon",
    "Barasat",
    "Barrackpore",
    "Basirhat",
    "Bidhannagar",
  ],
  "Paschim Bardhaman": ["Asansol", "Durgapur"],
  "Paschim Medinipur": ["Ghatal", "Kharagpur", "Medinipur"],
  "Purba Bardhaman": ["Bardhaman North", "Bardhaman South", "Kalna", "Katwa"],
  "Purba Medinipur": ["Contai", "Egra", "Haldia", "Tamluk"],
  "Purulia": ["Jhalda", "Manbazar", "Purulia", "Raghunathpur"],
  "South 24 Parganas": [
    "Alipore Sadar",
    "Baruipur",
    "Canning",
    "Diamond Harbour",
    "Kakdwip",
  ],
  "Uttar Dinajpur": ["Islampur", "Raiganj"],
};
districts = [
  "Alipurduar",
  "Bankura",
  "Birbhum",
  "Cooch Behar",
  "Dakshin Dinajpur",
  "Darjeeling",
  "Hooghly",
  "Howrah",
  "Jalpaiguri",
  "Jhargram",
  "Kalimpong",
  "Kolkata",
  "Malda",
  "Murshidabad",
  "Nadia",
  "North 24 Parganas",
  "Paschim Bardhaman",
  "Paschim Medinipur",
  "Purba Bardhaman",
  "Purba Medinipur",
  "Purulia",
  "South 24 Parganas",
  "Uttar Dinajpur",
];
tribe_list = [
  "BAGDI",
  "BAHELIA",
  "BAITI",
  "BALMIKI",
  "BANTAR",
  "BAURI",
  "BELDAR",
  "BHANGI",
  "BHOGTA",
  "BHUIMALI",
  "BHUIYA",
  "BIND",
  "CHAIN",
  "CHAMAR",
  "CHARMAKAR",
  "CHAUPAL",
  "DABGAR",
  "DAMAI",
  "DHANGAD",
  "DHARHI",
  "DHARI",
  "DHOBA",
  "DHOBI",
  "DOAI",
  "DOM",
  "DOSADH",
  "DULEY",
  "DUSADH",
  "GHASI",
  "GONRHI",
  "HALALKHOR",
  "HARI",
  "JALIA KAIBARTTA",
  "JHALA MALO",
  "KADAR",
  "KAMI",
  "KANDRA",
  "KANJAR",
  "KAORA",
  "KARENGA",
  "KAUR",
  "KEOT",
  "KEYOT",
  "KHAIRA",
  "KHATIK",
  "KOCH",
  "KONAI",
  "KONWAR",
  "KORANGA",
  "KOTAL",
  "KURARIAR",
  "LALBEGI",
  "LOHAR",
  "MAHAR",
  "MAL",
  "MALLAH",
  "MALO",
  "MEHTAR",
  "METHOR",
  "MOCHI",
  "MUCHI",
  "MUSAHAR",
  "NAMASUDRA",
  "NAT",
  "NUNIYA",
  "PALIYA",
  "PAN",
  "PASI",
  "PATNI",
  "POD",
  "POUNDRA",
  "RABIDAS",
  "RAJBANSHI",
  "RAJWAR",
  "RISHI",
  "RUIDAS",
  "SARKI",
  "SAWASI",
  "SUNRI",
  "TIYAR",
  "TURI",
];
//

religion = [
  "Buddhism",
  "Christianity",
  "Hinduism",
  "Islam",
  "Jainism",
  "Jewism",
  "Meiteism",
  "Parsi",
  "Sikhism",
  "Zoroastism",
  "No Religion",
  "Others",
];
genders = ["Male", "Female", "Transgender", "Others"];

var dis_subdiv = [];
var district_li = () => {
  let str = `<li onclick="clicked(this)" value="" class="dropdown-item disabled">District</li>`;
  districts.forEach((element) => {
    str += `<li onclick="clicked(this)" value="${element}" class="dropdown-item">${element}</li>`;
  });
  // console.log(str);
  return str;
};
// district()
document.getElementById("dist").innerHTML = district_li();

function clicked(e) {
  let value = e.innerHTML;
  e.parentElement.previousElementSibling.previousElementSibling.innerHTML =
    value;
  dis_subdiv = sub_div[value];
  document.getElementById("subdiv_disp").innerHTML = "Sub-Division";
  document.getElementById("sub-div").innerHTML = sub_div_li();
}
var sub_div_li = () => {
  let str = "";
  dis_subdiv.forEach((e) => {
    str += `<li onclick="clickeed(this)" value="${e}" class="dropdown-item">${e}</li> `;
  });
  return str;
};
var religion_li = () => {
  let str = "";
  religion.forEach((e) => {
    str += `<li onclick="clickeeed_r(this)" value="${e}" class="dropdown-item">${e}</li>`;
  });
  return str;
};
var gender_li = () => {
  let str = "";
  genders.forEach((e) => {
    str += `<li onclick="clickeeed_g(this)" value="${e}" class="dropdown-item">${e}</li>`;
  });
  return str;
};

document.getElementById("religion").innerHTML = religion_li();
document.getElementById("gender").innerHTML = gender_li();

function clickeed(e) {
  let value = e.innerHTML;
  e.parentElement.previousElementSibling.previousElementSibling.innerHTML =
    value;
}
function clickeed_re(e) {
  let value = e.innerHTML;
  e.parentElement.previousElementSibling.previousElementSibling.innerHTML = value;
  specify_re(value);
}

function radios(e) {
  let value = e.value;
  e.parentElement.parentElement.nextElementSibling.firstElementChild.innerHTML = `${value} <span class="text-red-600"> *</span>`;
  
  if (value == "Gram Panchayet") {
    e.parentElement.parentElement.nextElementSibling.nextElementSibling.type = "text";
  } else if (value == "Ward Number") {
    e.parentElement.parentElement.nextElementSibling.nextElementSibling.type = "number";
  }
  e.parentElement.parentElement.nextElementSibling.nextElementSibling.disabled = false
}

let tribes = () => {
  let str = "";

  tribe_list.forEach((e) => {
    str += `<li onclick="clickeed(this)" value="${e}" class="dropdown-item">${e}</li> `;
  });
  return str;
};

function tribe(e) {
  document.getElementById("catgr_disp").innerHTML = "Select from List";
  document.getElementById("tribe").innerHTML = tribes();
}

function check_box(e) {
  if (e.checked) {
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("perm")[i].classList.remove("border-red-500")
      document.getElementsByClassName("perm")[i].value = "";
      document.getElementsByClassName("perm")[i].disabled = true;
      document.getElementsByClassName("perm")[i].placeholder =
        document.getElementsByClassName("pres")[i].value;
    }
  } else if (!e.checked) {
    let place_holder = [
      "Adress line 1",
      "City / Town",
      "Police Station",
      "District",
      "Ward Number / Gram Panchayet",
      "Pin Code",
    ];
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("perm")[i].disabled = false;
      document.getElementsByClassName("perm")[i].placeholder = place_holder[i];
      
    }
  }
}
function specify_r(e) {
  
  if (e != "Others") {
    
    document.getElementsByClassName("religion")[0].value = "";
    document.getElementsByClassName("religion")[0].style.visibility = "hidden";   // *TODO: religion[0]    
    document.getElementsByClassName("religion")[0].disabled = true
  } else {
    document.getElementsByClassName("religion")[0].disabled = false
    document.getElementsByClassName("religion")[0].style.visibility = "visible";  // *? religion_spec
  }
}
function specify_re(e) {
  
  if (e != "Others") {
    document.getElementsByClassName("blood")[6].value = "";
    document.getElementsByClassName("blood")[6].style.visibility = "hidden";    // *TODO: blood[6]
    document.getElementsByClassName("blood")[6].disabled = true
    
  } else {
    document.getElementsByClassName("blood")[6].style.visibility = "visible";   // *? blood_rel_spec
    document.getElementsByClassName("blood")[6].disabled = false
  }
}
function specify_g(e) {
  
  if (e != "Others") {
    document.getElementsByClassName("gender")[0].disabled = true
    document.getElementsByClassName("gender")[0].value = "";
    document.getElementsByClassName("gender")[0].style.visibility = "hidden";   // *TODO: gender[0]
  } else {
    document.getElementsByClassName("gender")[0].disabled = false
    document.getElementsByClassName("gender")[0].style.visibility = "visible";  // *? gender_spec
  }
}

function clickeeed_r(e) {
  let value = e.innerHTML;
  e.parentElement.previousElementSibling.previousElementSibling.innerHTML =
    value;
    
  specify_r(value);
}
function clickeeed_g(e) {
  let value = e.innerHTML;
  e.parentElement.previousElementSibling.previousElementSibling.innerHTML =
    value;
  specify_g(value);
}

function check_b(e) {
  for(let i = 0; i < 6;i++){
    document.getElementsByClassName("bloodrel")[i].classList.remove("border-red-500")
  }
  for(let i=0;i<5 ;i++){
    document.getElementsByClassName("blood-text")[i].value = "";
  }
  
  if (e.checked) {
    
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("blood")[i].disabled = false;
      document.getElementById("blood_re_div").classList.remove("text-slate-500");
    }
  } else if (!e.checked) {
    document.getElementsByName("blood_rel_spec")[0].style.visibility = "hidden"
    document.getElementsByName("blood_rel_spec")[0].classList.remove("border-red-500")
    document.getElementById("rel_stat").innerHTML = "Select from List";
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("blood")[i].classList.remove("border-red-500")
      document.getElementsByClassName("blood")[i].disabled = true;
      document.getElementById("blood_re_div").classList.add("text-slate-500");
    }
  }
}
function check_mig(e) {
  if (e.checked) {
    e.parentElement.nextElementSibling.nextElementSibling.classList.remove(
      "text-slate-500"
    );
    e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "text-slate-500"
    );
    for (let i = 0; i < 8; i++) {
      document.getElementsByClassName("mig")[i].disabled = false;
      
    }
  } else if (!e.checked) {
    e.parentElement.nextElementSibling.nextElementSibling.classList.add(
      "text-slate-500"
    );
    e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "text-slate-500"
    );
    for (let i = 0; i < 8; i++) {
      document.getElementsByClassName("mig")[i].disabled = true;
      document.getElementsByClassName("mig")[i].value = "";
      document.getElementsByClassName('mig')[i].classList.remove("border-red-500")
    }
  }
}

function reset_data() {
  // Send an AJAX request using jQuery
  location.reload();
}




