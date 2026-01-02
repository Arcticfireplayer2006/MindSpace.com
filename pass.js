function check() {
  var correctpass = "GetARealFeel"
  var password = document.getElementById("pass").value;
  if (password == correctpass) {
    window.location="https://themettalicbrain.neocities.org/"
  }
  else{
  document.getElementById("warn").style.display = "inline";
  }
}