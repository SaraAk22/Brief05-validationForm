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
  
  let showRegistation = 
  "<h3>"+"Vous etes bien enregistrer autant que: "+name + "</h3>" +
  "<h3>"+"Votre Prénom est : "+firstName+ "</h3>" +
  "<h3>"+"Votre email est : "+email + "</h3>" +
  "<h3>"+"Votre Télephone est : "+tele + "</h3>" +
  "<h3>"+"Votre Genre est : "+genreSelectValues + "</h3>" +
  "<h3>"+"le Groupe choisi est : "+groupSelectValues + "</h3>" +
  "<h3>"+"Votre choix du Club(s) est : "+ "<bold>" +selected +"</bold>"+ "</h3>" ;
 
 

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
      return
  }
  if (selected.length > 3) {
    document.getElementById("clubError").innerHTML =
      "Veuillez choisir 3 clubs au Maximum!!";
      return
  }
  

  if (
    name.length <= 30 &&
    namePattern.test(name) &&
    (firstName.length <= 30 && (namePattern.test(firstName))) &&
    emailPattern.test(email) &&
    ((tele.length == 10) && (phonePattern.test(tele))) &&
    genreSelectValues.length !== 0 &&
    groupSelectValues.length !== 0 &&
    selected.length !== 0 
  ) {
    // window.location.replace("#showPage");
    
    // let confirmation =document.getElementById("confirmation").innerHTML
    // window.localStorage.setItem('data',confirmation)
    // window.localStorage.getItem('data')
    // document.getElementById('showPage').style.display='block';

    //Binding Data with second page : confirmation.html 
    
  //   "<h3>"+"Vous etes bien enregistrer autant que: "+name + "</h3>" +
  // "<h3>"+"Votre Prénom est : "+firstName+ "</h3>" +
  // "<h3>"+"Votre email est : "+email + "</h3>" +
  // "<h3>"+"Votre Télephone est : "+tele + "</h3>" +
  // "<h3>"+"Votre Genre est : "+genreSelectValues + "</h3>" +
  // "<h3>"+"le Groupe choisi est : "+groupSelectValues + "</h3>" +
  // "<h3>"+"Votre choix du Club(s) est : "+ "<bold>" +selected +"</bold>"+ "</h3>" ; 
  

    // window.localStorage.setItem('name',name)
    // window.localStorage.setItem('firstName',firstName)
    // window.localStorage.setItem('email',email)
    // window.localStorage.setItem('tele',tele)
    // window.localStorage.setItem('genreSelectValues',genreSelectValues)
    // window.localStorage.setItem('groupSelectValues',groupSelectValues)
    // window.localStorage.setItem('selected',selected)

    var confirmationReturn= window.localStorage.getItem('confirmationBinding')
    var resultBinding=  window.localStorage.getItem('resultBinding')
    confirmationReturn ="votre Inscription est bien valider !!";
    resultBinding= showRegistation;
    console.log(confirmationReturn)
    console.log(resultBinding)
    window.localStorage.setItem('confirmationReturn',confirmationReturn)
    window.localStorage.setItem('resultBinding',resultBinding)

  } else {
    document.getElementById("globalError").innerHTML =
      "Veuillez remplir votre formulaire!!";
     
  }
 
  alert("Club  de votre choix est: " + selected);
  //form Validation
  //   let formValid = true;
  //   if(name!= 30 || firstName!= 30 ||  tele.length != 10 || isNaN(tele) ||  isNaN (email) || genreSelectValues.length !== 0 ||groupSelectValues.length !== 0 || selected.length !== 0 || selected.length <=3) {
  //       formValid = false;
  //   }
  //   if(!formValid){
  //       e.preventDefault();
  //   }

  
  window.open(href="confirmation.html", target='_blank');
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

