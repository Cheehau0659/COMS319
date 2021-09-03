function validateFeedback(){
  //check email, like in hw2
  valEmailCheck = true;
  var resultEmailCheck = emailCheck(document.forms["fbSub"]["email"].value);
  var labelNotifyEmail = getNotificationEmail(Boolean(resultEmailCheck), "email");
  document.getElementById("emailPar").appendChild(labelNotifyEmail);

  //check feedback textbox
  valFbCheck = true;
  var resultFeedbackCheck = feedbackCheck(document.forms["fbSub"]["fbTB"].value);
  var labelNotifyFeedback = getNotificationFeedback(Boolean(resultFeedbackCheck), "fbTB");
  document.getElementById("fbPar").appendChild(labelNotifyFeedback);

}


function getNotificationFeedback(bool, ID){
  var label = document.getElementById("labelNotify" + ID);
  if(label == null) {
    label = document.createElement("LABEL");
    label.id = "labelNotify" + ID;
    label.setAttribute('class', 'errorMessage');
  }

  label.innerHTML = bool ? "Thank you for your feedback. We will process it and get back to you shortly!" : "No feedback received. :("
  return label;
}

function feedbackCheck(fbTextArea){
    if(document.getElementById("fbTB").value == "" || document.getElementById("fbTB").value == "What can we improve on? "){
      valFbCheck = false;
      return false;
    }

    return true;
}

function getNotificationEmail(bool, ID) {
  var label = document.getElementById("labelNotify" + ID);
  if(label == null) {
    label = document.createElement("LABEL");
    label.id = "labelNotify" + ID;
    label.setAttribute('class', 'errorMessage');
  }

  label.innerHTML = bool ? "Email accepted!" : "Email needs to be in the form of xxx@xxx.xxx, where each x is alphanumeric."
  return label;
}

function emailCheck(email) {
  atSplit = email.split('@');
  if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
    periodSplit = atSplit[1].split('.')
    if(periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
      return true;
    }
  }

  valEmailCheck = false;
  return false;
}

function alphaNumCheck(entry) {
  let regex = /^[a-z0-9]+$/i;
  if (entry != null && entry.match(regex)) {return true;}
  else {return false;}
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 JAn 1970 00:00:01 GMT;';
}
