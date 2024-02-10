/*
             문제. 자바스크립트 문법을 사용하여 회원가입 폼의 유효성을 검사하는 코드입니다.
             위의  HTML태그 내용과 같은 회원가입 폼이 있다고 했을 때  자바스크립트 문법 만을 이용해서 
             모든 입력이 되었는지,  
             아이디를 3자 ~ 7자 사이로 입력했는지,  
             비밀번호를 4자 ~ 10자 사이로 입력했는지,  
             입력한 비밀번호와 비밀번호 확인의 데이터가 같은지, 
             직업을 선택했는지,  
             성별을 선택 또는 체크 했는지,  
             취미를 하나 이상 체크 했는지, 
             가입동기를 입력 했는지 유효성 검사 하는 코드를 전체 작성 해 주고  각 줄에 주석을 다시오.
    */

function validateForm() {
// 입력받은 항목의 값들을 변수로 저장
  let uName = document.getElementById('uName').value;
  let uID = document.getElementById("uID").value;
  let uPWD = document.getElementById('uPWD').value;
  let uPWD_Confirm = document.getElementById('uPWD_Confirm').value;
  let work = document.getElementById('work').value;
  let sexMale = document.getElementById('s1').checked;
  let sexFemale = document.getElementById('s2').checked;
  let hobbyBook = document.getElementById('h1').checked;
  let hobbyMountain = document.getElementById('h2').checked;
  let hobbyFishing = document.getElementById('h3').checked;
  // id가 없어 name으로 해당 태그를 가져온다 
  // getElementsByName으로 가져와서 그 중에 0번 index에 해당하는 가입동기 부분을 선택
  // 왜 id가 아니냐고 
  let motivation = document.getElementsByName('motivation')[0].value;
// 입력받은 이름이 공백이라면 error메시지띄우고 함수 종료 하고 false 리턴
  if(uName.trim()===''){
  document.getElementById('uNameError').innerText = "이름을 입력하세요";
  return false
  // 입력을 제대로 했다면 error메시지 삭제 or 공백으로 넘어감
  }else{
  document.getElementById('uNameError').innerText = "";
  }
  // 입력한 ID가 3~7자 사이가 아니면 에러메시지 띄우고 정상이면 에러메시지 삭제or공백으로 넘어감
  if(uID.length<3 || uID.length>7){
  document.getElementById('uIDError').innerText = "아이디를 3~7자 사이로 입력하세요";
  return false;
  }else{
  document.getElementById('uIDError').innerText = "";
  }
  //입력한 비밀번호가 4~10자 사이가 아니면 에러메시지 띄우고 정상이면 ~ 
  if(uPWD.length<4 || uPWD.length>10){
    document.getElementById('uPWDError').innerText = "비밀번호를 4~10자 사이로 입력하세요";
    return false;
  }else{
    document.getElementById('uPWDError').innerText = ""
  }

  //비밀번호와 비밀번호 입력 부분이 같은지 유효성 검사 및 에러메시지 
if(uPWD !== uPWD_Confirm){
  document.getElementById('uPWDConfirmError').innerText = '비밀번호가 일치하지 않습니다'
  return false;
}else{
  document.getElementById('uPWDConfirmError').innerText = ''
}
// 직업명에 대한 유효성검사
if(work === '직업명'){
  document.getElementById('workError').innerText = '직업을 선택하세요'
  return false;
}else{
  document.getElementById('workError').innerText = ''
}
// 성별 체크에 대한 유효성 검사
if(!sexFemale && !sexMale){
  document.getElementById('sexError').innerText = '성별을 선택하세요'
  return false;
}else{
  document.getElementById('sexError').innerText = ''
}
// 취미에 대한 유효성 검사 
if(!hobbyBook && !hobbyFishing && !hobbyMountain){
  document.getElementById('hobbyError').innerText = '취미를 선택하세요'
  return false;
}else{
  document.getElementById('hobbyError').innerText = ''
}
// 동기에 대한 유효성검사
if(motivation.trim() === ''){
  document.getElementById('motivationError').innerText = '동기를 입력하세요'
  return false
}else{
  document.getElementById('motivationError').innerText = ''
}




alert('가입완료');
  return true;
}

