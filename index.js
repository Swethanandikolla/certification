function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === password && username.length > 1) {
    alert("Login Successful!");
    window.localStorage.setItem("loginStatus", true);
    window.location.href = "orders.html"; 
  } else {
    alert("Please enter valid credentials!");
    window.location.href = "index.html"; 



    
  }
}
