const form = document.getElementById('form');
const submitButton = document.getElementById('submitButton');
const namecito = document.getElementById('name');
const email = document.getElementById('email');
const sexo = document.getElementById('sexo');
const conditions = document.getElementById('conditions');

const formIsValid = {
    namecito: false,
    email: false,
    sexo: false,
    conditions: false
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    validateForm();
});

namecito.addEventListener('change',(e)=> {
   if (e.target.value.trim().length > 0) formIsValid.namecito = true
   else formIsValid.namecito = false;
});

email.addEventListener('change',(e) => {
    if (e.target.value.trim().length > 0) formIsValid.email = true
    else formIsValid.email = false;
});

sexo.addEventListener('change',(e) => {
    if (e.target.checked == true) formIsValid.sexo = true
    else formIsValid.sexo = false;
});

conditions.addEventListener('change',(e) => {
    formIsValid.conditions = e.target.checked
    e.target.checked ? submitButton.removeAttribute('disabled'): submitButton.setAttribute('disabled', true);
});

const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Form invalid');
}