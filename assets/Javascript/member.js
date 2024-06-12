function toggleEditMode() {
    const name = document.getElementById('name');
    const birth = document.getElementById('birth');
    const telph = document.getElementById('tel');
    const address = document.getElementById('address');
    const check1 = document.getElementById('check');
    const editName = document.getElementById('editName');
    const editBirth = document.getElementById('editBirth');
    const cellph = document.getElementById('cell');
    const editAddress = document.getElementById('editAddress');
    const check3 = document.getElementById('check2');

    editName.value = name.textContent;
    editBirth.value = birth.textContent;
    cellph.value = telph.textContent;
    editAddress.value = address.textContent;
    check3.value = check1.textContent;
    // 頁面切換
    document.getElementById('profile').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';
}

function saveChanges(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const birth = document.getElementById('birth');
    const telph = document.getElementById('tel');
    const address = document.getElementById('address');
    const check1 = document.getElementById('check');
    const editName = document.getElementById('editName');
    const editBirth = document.getElementById('editBirth');
    const cellph = document.getElementById('cell');
    const editAddress = document.getElementById('editAddress');
    const check3 = document.getElementById('check2');
   
    
    name.textContent = editName.value;
    birth.textContent = editBirth.value;
    telph.textContent = cellph.value;
    address.textContent = editAddress.value;
    check1.textContent = check3.value;

    // 更新頁面
    profile.style.display = 'block';
    editForm.style.display = 'none';
}

function openForm() {
    
    var originalText = document.querySelector('.mes');
    originalText.style.display = 'none';

    // 顯示表單
    var form = document.getElementById('hiddenForm');
    form.style.display = 'block';
}



