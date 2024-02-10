// 모든 입력이 되었는지 확인
    var uName = document.getElementById('uName').value;
    var uID = document.getElementById('uID').value;
    var uPWD = document.getElementById('uPWD').value;
    var uPWD_Confirm = document.getElementById('uPWD_Confirm').value;
    var work = document.getElementById('work').value;
    var sexMale = document.getElementById('s1').checked;
    var sexFemale = document.getElementById('s2').checked;
    var hobbyReading = document.getElementById('h1').checked;
    var hobbyHiking = document.getElementById('h2').checked;
    var hobbyFishing = document.getElementById('h3').checked;
    var motivation = document.getElementsByName('motivation')[0].value;
  
 if (uName.trim() === '') {
    document.getElementById('uNameError').innerText = '이름을 입력해주세요.';
    return false;
  } else {
    document.getElementById('uNameError').innerText = '';
  }
    // 아이디를 3자 ~ 7자 사이로 입력했는지 확인
    if (uID.length < 3 || uID.length > 7) {
      document.getElementById('uIDError').innerText = '아이디는 3자에서 7자 사이로 입력해주세요.';
      return false;
    } else {
      document.getElementById('uIDError').innerText = '';
    }
  
    // 비밀번호를 4자 ~ 10자 사이로 입력했는지 확인
    if (uPWD.length < 4 || uPWD.length > 10) {
      document.getElementById('uPWDError').innerText = '비밀번호는 4자에서 10자 사이로 입력해주세요.';
      return false;
    } else {
      document.getElementById('uPWDError').innerText = '';
    }
  
    // 입력한 비밀번호와 비밀번호 확인의 데이터가 같은지 확인
    if (uPWD !== uPWD_Confirm) {
      document.getElementById('uPWDConfirmError').innerText = '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
      return false;
    } else {
      document.getElementById('uPWDConfirmError').innerText = '';
    }
  
    // 직업을 선택했는지 확인
    if (work === '직업명') {
      document.getElementById('workError').innerText = '직업을 선택해주세요.';
      return false;
    } else {
      document.getElementById('workError').innerText = '';
    }
  
    // 성별을 선택 또는 체크 했는지 확인
    if (!sexMale && !sexFemale) {
      document.getElementById('sexError').innerText = '성별을 선택해주세요.';
      return false;
    } else {
      document.getElementById('sexError').innerText = '';
    }
  
    // 취미를 하나 이상 체크 했는지 확인
    if (!hobbyReading && !hobbyHiking && !hobbyFishing) {
      document.getElementById('hobbyError').innerText = '취미를 하나 이상 선택해주세요.';
      return false;
    } else {
      document.getElementById('hobbyError').innerText = '';
    }
  
    // 가입동기를 입력 했는지 확인
    if (motivation.trim() === '') {
      document.getElementById('motivationError').innerText = '가입동기를 입력해주세요.';
      return false;
    } else {
      document.getElementById('motivationError').innerText = '';
    }
  
    alert('가입완료')
    // 모든 유효성 검사 통과 시 true 반환
    return true;