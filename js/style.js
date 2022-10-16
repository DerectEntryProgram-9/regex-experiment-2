const btnSave = document.getElementById('btn-save');
const btnClear = document.getElementById('btn-clear');
const btnNew = document.getElementById('btn-new');

const txtId = document.getElementById('txt-id');
const txtName = document.getElementById('txt-name');
const txtAddress = document.getElementById('txt-address');
const txtContact = document.getElementById('txt-contact');
const tblStudents = document.getElementById('tbl-students');

const regExp4Id = /^S\d{3}$/;
const regExp4Name = /^[A-Za-z ]+$/;
const regExp4Address = /^[A-Za-z0-9:.,/\- ]+$/;
const regExp4Contact = /^\d{3}-\d{7}$/;


for(var i = 1; i < tblStudents.rows.length; i++)
{
    tblStudents.rows[i].onclick = function()
    {
         txtId.value = this.cells[0].innerHTML;
         txtName.value = this.cells[1].innerHTML;
         txtAddress.value = this.cells[2].innerHTML;
         txtContact.value = this.cells[3].innerHTML;
    };
}

btnNew.addEventListener('click', ()=>{
    // alert('clicked');
    txtId.disabled = false;
    txtName.disabled = false;
    txtAddress.disabled = false;
    txtContact.disabled = false;
    btnSave.disabled = false;
    btnClear.disabled = false;
});

btnClear.addEventListener('click', ()=>{
    // alert('clicked');
    txtId.value = "";
    txtName.value = "";
    txtAddress.value = "";
    txtContact.value = "";
});

btnSave.addEventListener('click', ()=>{
    // alert('clicked');
    [txtId, txtName, txtAddress, txtContact]
        .forEach(input => input.classList.remove('is-invalid'));

    let invalidInput = null;

    if (!regExp4Id.test(txtId.value)){
        txtId.classList.add('is-invalid');
        invalidInput = txtId;
    }

    if (!regExp4Name.test(txtName.value.trim())){
        txtName.classList.add('is-invalid');
        if (!invalidInput) invalidInput = txtName;
    }

    if (!regExp4Address.test(txtAddress.value.trim())){
        txtAddress.classList.add('is-invalid');
        if (!invalidInput) invalidInput = txtAddress;
    }

    if (!regExp4Contact.test(txtContact.value)){
        txtContact.classList.add('is-invalid');
        if (!invalidInput) invalidInput = txtContact;
    }

    if (invalidInput) {
        invalidInput.select();
        return;
    }

    tblStudents.classList.remove('empty');
    const newRow = tblStudents.insertRow();

    const idCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const addressCell = newRow.insertCell();
    const contactCell = newRow.insertCell();

    idCell.innerText = txtId.value;
    nameCell.innerText = txtName.value;
    addressCell.innerText = txtAddress.value;
    contactCell.innerText = txtContact.value;
});