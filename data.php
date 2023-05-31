<?php



$municipality    = $_POST['municipality']; $gpward  = $_POST['gpward'];$scst  = $_POST['scst'];$name = $_POST['name']; $father_name = $_POST['father_name'];
$birth_date = $_POST['birth_date'];   $mobile = $_POST['mobile'];   $email  = $_POST['email'];   $epicNumber = $_POST['epicNumber']; $AadharNumber = $_POST['AadharNumber'];  
$Khadyasathi = $_POST['Khadyasathi']; $presentAddress = $_POST['presentAddress'];     $presentCity = $_POST['presentCity']; $presentPs = $_POST['presentPs'];
$presentDistrict = $_POST['presentDistrict'];   $presentWardGP = $_POST['presentWardGP'];    $presentPIN = $_POST['presentPIN'];   $permAddress = $_POST['permAddress'];    
$permCity = $_POST['permCity'];  $permPS = $_POST['permPS'];$permDistrict = $_POST['permDistrict'];      $permWardGP  = $_POST['permWardGP'];      $permPIN = $_POST['permPIN'];
$religion = $_POST['religion'];  $religion_spec  = $_POST['religion_spec'];$gender = $_POST['gender'];$gender_spec = $_POST['gender_spec'];$blood_rel_name = $_POST['blood_rel_name'];   
$blood_rel_cert_no = $_POST['blood_rel_cert_no']; $blood_rel_issue_date = $_POST['blood_rel_issue_date'];$blood_rel_issue_auth = $_POST['blood_rel_issue_auth'];
$bloodrel = $_POST['bloodrel'];$blood_rel_spec = $_POST['blood_rel_spec']; $local1name = $_POST['local1name'];  $local1address = $_POST['local1address'];
$local2name = $_POST['local2name'];    $local2address = $_POST['local2address']; $migcertNo = $_POST['migcertNo'];$migIssuedate = $_POST['migIssuedate']; 
$migCountry = $_POST['migCountry'];$migState = $_POST['migState'];$migDist = $_POST['migDist']; $migPS = $_POST['migPS'];  $migVill = $_POST['migVill'];$district = $_POST['district']; 
$subdiv = $_POST['subdiv'];  $tribe = $_POST['tribe']; $panNo = $_POST['panNo'];

$imag = $_POST['image'];
$image = str_replace(" ","+",$imag);
$ardt = $_POST['ardt'];$ardd  = $_POST['ardd'];$apdt = $_POST['apdt'];$apdd = $_POST['apdd'];$pidt = $_POST['pidt'];$pidd = $_POST['pidd'];$cdt = $_POST['cdt'];$cdd = $_POST['cdd'];
$rWBdt = $_POST['rWBdt'];$rWBdd = $_POST['rWBdd'];$lrdt = $_POST['lrdt'];$lrdd = $_POST['lrdd'];$voterIdof = $_POST['voterIdof'];$voterNo = $_POST['voterNo'];
$AssembNo = $_POST['AssembNo'];$partNo = $_POST['partNo'];$serialNo = $_POST['serialNo'];$appNo = $_POST['appNo'];  


$ide = str_shuffle(str_shuffle(uniqid()));



$conn = new mysqli('localhost', 'root', '', 'test');


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
  $stmt = $conn->prepare("INSERT INTO `obc_database`(`Application Number`, `unique_id`, `District`, `Sub Division`, `Municipality`, `Ward / GP`, `Category`, `Tribe`,
   `Applicant's Name`, `Father Name`, `Date of Birth`, `Mobile`, `Email`, `Epic Number`, `Aadhar Number`, `Khadyasathi Number`, `Present Address`, `Present CIty`,
    `Present Police Station`, `Present District`, `Present Ward / GP`, `Present Pin code`, `Permanent Address`, `Permanent City`, `Permanent Police Station`, `Permanent District`,
     `Permanent Ward / GP`, `Permanent Pin code`, `Religion`, `Religion Specified`, `Gender`, `Gender Specified`, `Blood Relation Name`, `Blood Relation Cert no`,
      `Blood Relation Issue Date`, `Blood Relation Issue Authority`, `Blood Relation type`, `Blood Relation specified`, `Local Referee1 name`, `Local Referee1 Address`, 
      `Local Referee2 name`, `Local Referee2 Address`, `Migration Cert No`, `Migration Cert Issue Date`, `Migration Country`, `Migration State`, `Migration District`, 
      `Migration Police Station`, `Migration Village`, `image`, `applicant relation doc type`, `applicant relation doc details`, `age proof doc type`, `age proof doc details`, 
      `photo identity doc type`, `photo identity doc details`, `citizenship doc type`, `citizenship doc details`, `residence in WB doc type`, `residence in WB doc details`, 
      `local residence doc type`, `local residence doc details`, `voter Id info of`, `voter Id number`, `Assembly No/Name`, `part no`, `serial number`,`Pan Number`) 
         VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,
           ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? ,  ? , ? )");
          $stmt->bind_param("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"  , 
          $appNo  , $ide  , $district  , $subdiv , $municipality , $gpward  , $scst  , $tribe ,  $name , $father_name , $birth_date , $mobile  , $email , $epicNumber , $AadharNumber , $Khadyasathi ,
          $presentAddress , $presentCity , $presentPs ,$presentDistrict , $presentWardGP, $presentPIN, $permAddress, $permCity , $permPS  , $permDistrict , $permWardGP, $permPIN ,
          $religion , $religion_spec , $gender , $gender_spec , $blood_rel_name , $blood_rel_cert_no , $blood_rel_issue_date , $blood_rel_issue_auth , $bloodrel , $blood_rel_spec,
          $local1name, $local1address , $local2name , $local2address , $migcertNo , $migIssuedate , $migCountry ,$migState , $migDist , $migPS , $migVill ,$image  , $ardt  , 
          $ardd  , $apdt  , $apdd  , $pidt  , $pidd  , $cdt  , $cdd  , $rWBdt  , $rWBdd  , $lrdt  , $lrdd  , $voterIdof  , $voterNo  , $AssembNo  , $partNo  , $serialNo, $panNo);
          $stmt->execute();

        // echo "<script>alert('Data saved')</script>";
          $stmt->close();
          $conn->close();
}
