// Required ATTRIBUTES
document.getElementById("email").setAttribute("type", "email");
document.getElementById("tele").setAttribute("type", "tel");
document.querySelector("#clubsSelects").setAttribute("multiple", true);


//FORM VALIDATOR
function validationForm() {


  let name = document.getElementById("nom").value;
  let firstName = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let tele = document.getElementById("tele").value;

  let genreSelect = document.querySelectorAll('input[name="genre"]:checked');
  let groupSelect = document.querySelectorAll('input[name="group"]:checked');

  let phonePattern =
    /^[(]{0,1}[0]{1}[)]{0,1}[5-7]{0,1}[0-9]{3}[0-9]{0,1}[0-9]{4}$/;
  let emailPattern =
    /^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
  let namePattern = /^([ a-zA-Z]+)$/;


  let genreSelectValues = [];
  let groupSelectValues = [];
  genreSelect.forEach((checkbox) => {
    genreSelectValues.push(checkbox.value);
  });
  groupSelect.forEach((checkbox) => {
    groupSelectValues.push(checkbox.value);
  });
  let selected = [];
  for (var option of document.getElementById("clubsSelects").options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  
  let showRegistation = [] ;
   
  if (name.length == "" || name.length > 30 || namePattern.test(name) < 0) {
    document.getElementById("nameError").innerHTML ="Veuillez saisez votre name!!";
  }
  if (
    firstName.length == "" ||
    firstName.length > 30 ||
    namePattern.test(firstName) < 0
  ) {
    document.getElementById("firstNameError").innerHTML ="Veuillez saisir votre prenom!!";
  }
  if (email == "" || emailPattern.test(email) < 0) {
    document.getElementById("emailError").innerHTML ="Veuillez saisir une adresse e-mail valide";
  }
  if (tele == "" || !phonePattern.test(tele) ) {
    document.getElementById("phoneError").innerHTML =
      "Veuillez entrer valid format de telephone!!";
  }
  if (genreSelectValues == "") {
    document.getElementById("genreError").innerHTML ="Veuillez choisir votre Genre!!";
     
  }
  if (groupSelectValues == "") {
    document.getElementById("groupError").innerHTML ="Veuillez choisir votre Group!!";
   
  }
  if (selected == "") {
    document.getElementById("clubError").innerHTML =
      "Veuillez choisissez le choix du club!!";
      
  }
  if (selected.length > 3) {
    document.getElementById("clubError").innerHTML =
      "Veuillez choisir 3 clubs au Maximum!!";
      
  }
  
  if (
    name.length <= 30 &&
    namePattern.test(name) &&
    (firstName.length <= 30 && (namePattern.test(firstName))) &&
    emailPattern.test(email) &&
    ((tele.length == 10) && (phonePattern.test(tele))) &&
    genreSelectValues.length !== 0 &&
    groupSelectValues.length !== 0 &&
    (selected.length !== 0 && selected.length <=3) )
  {
      //Binding Data with second page : confirmation.html 
    
                //recieve data from confirmation.html
      var confirmationReturn= window.localStorage.getItem('confirmationBinding')
      // var resultBinding=  window.localStorage.getItem('resultBinding')

                //Assign values to this Data
      confirmationReturn ="votre Inscription est bien valider !!";
      showRegistation.push( 
        `<p>Vous etes bien enregistrer autant que: <strong>${name} </strong></p>
      <p>Votre Prénom est :<strong>${firstName} </strong></p>
      <p>Votre email est : <strong>${email } </strong></p>
      <p>Votre Télephone est :<strong>${tele} </strong></p>
      <p>Votre Genre est : <strong>${genreSelectValues} </strong></p> 
      <p>Votre Groupe choisi est :<strong>${groupSelectValues} </strong></p> 
      <p>Votre choix du Club(s) est : <strong>${selected} </strong></p> `)

      // console.log(showRegistation)
      // console.log(confirmationReturn)
    
      alert("Club  de votre choix est: " + selected);
      //save data in Localstorage
      window.localStorage.setItem('confirmationReturn',confirmationReturn)
      // window.localStorage.setItem('resultBinding',resultBinding)
      window.localStorage.setItem('showRegistation',showRegistation)
      window.open(href="confirmation.html", target='_blank');

  } else {
    document.getElementById("globalError").innerHTML =
      "Veuillez remplir votre formulaire!!";
     
  }
  //form Validation
  //   let formValid = true;
  //   if(name!= 30 || firstName!= 30 ||  tele.length != 10 || isNaN(tele) ||  isNaN (email) || genreSelectValues.length !== 0 ||groupSelectValues.length !== 0 || selected.length !== 0 || selected.length <=3) {
  //       formValid = false;
  //   }
  //   if(!formValid){
  //       e.preventDefault();
  //   }
}


// Name Validation
function validName() {
  let name = document.getElementById("nom");
  let namePattern = /^[a-zA-Z]+$/;
  if (name.value.length == "" || name.value.length > 30) {
    name.style.border = "2px solid red";
    name.style.background = "rgb(239 129 129 / 64%)";
  }
  if (name.value.length <= 30 && namePattern.test(name.value)) {
    name.style.border = "2px solid green";
    name.style.background = "#b5e15b61";
  }
}

//FIRST NAME Validation
function validPrenom() {
  let firstName = document.getElementById("prenom");
  let namePattern = /^[a-zA-Z ]+$/;
  if (firstName.value.length == "" || firstName.value.length > 30) {
    firstName.style.border = "2px solid red";
    firstName.style.background = "rgb(239 129 129 / 64%)";
  }
  if (firstName.value.length <= 30 && namePattern.test(firstName.value)) {
    firstName.style.border = "2px solid green";
    firstName.style.background = "#b5e15b61";
  }
}
 
//Phone Validation
function validTell() {
  let tele = document.getElementById("tele");
  let phonePattern =
    /^[(]{0,1}[0]{1}[)]{0,1}[5-7]{0,1}[0-9]{3}[0-9]{0,1}[0-9]{4}$/;
  tele.setAttribute("type", "tel");
  if (phonePattern.test(tele.value) && (tele.value.length) == 10) {
    tele.style.border = "2px solid green";
    tele.style.background = "#b5e15b61";
  } else {
    tele.style.border = "2px solid red";
    tele.style.background = "rgb(239 129 129 / 64%)";
  }
}

//Email Validation
function validEmail() {
  let email = document.getElementById("email");
  let emailPattern =
    /^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
  email.setAttribute("type", "email");
  //   console.log(emailPattern.test(email));

  if (emailPattern.test(email.value)) {
    email.style.border = "2px solid green";
    email.style.background = "#b5e15b61";
  } else {
    email.style.border = "2px solid red";
    email.style.background = "rgb(239 129 129 / 64%)";
  }
}

