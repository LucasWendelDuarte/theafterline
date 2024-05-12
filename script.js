  //nav bar preta a scrol
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", "");
      }
  }