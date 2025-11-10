let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
var tablinks =document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");


formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})

const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove( "active-link" );
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove( "active-tab" );
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}