   const staticNav = document.querySelector("body");
   
   function openNav() {
      document.querySelector(".sideNav").style.width = "70%";
      staticNav.style.overflow = "hidden";
   }

      function closeNav() {
      document.querySelector(".sideNav").style.width = "0%";
      staticNav.style.overflow = "auto";
   }



