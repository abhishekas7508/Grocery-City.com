const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const errorElement=document.getElementById('errorElement');

form.addEventListener('submit',(e)=>{
    
    if(username.value==='admin' && password.value==='password@'){
        window.location.href="./index.html";
    }
    e.preventDefault();
    if(username.value===''|| username.value==null){
        errorElement.innerHTML='username cannot be empty';
    }
    else{
        errorElement.innerHTML='Invalid username or password';
    }    

})


//signup
//let isValid=false;
// let contain=false;
//     let digit=false;
//     for (let index = 0; index < password.value.length; index++) {
//         const element = password.value[index];
//         if(isNaN(element)==false) {  
//             digit=true;
//             console.log(element);
//         }
//         if(element=='!'||element=='@'||element=='#'||element=='$'||element=='%'||element=='^'||element=='&'||element=='*')
//         contain=true;
//     }
//     if(password.value.length<6){
//         errorElement.innerHTML='password must contain alteast 6 characters';
//     }
//     if(digit==false){
//         errorElement.innerHTML='password must contain a number';
//     }
//     if(contain==false)
//         errorElement.innerHTML='password must contain a special character';