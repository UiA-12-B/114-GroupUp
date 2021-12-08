 // Får tak i knappen som åpner modalen
 var btn = document.querySelectorAll("a.bx");

 // Får tak i alle modals
 var modals = document.querySelectorAll('.modal');

 // Får ta i span element
 var spans = document.getElementsByClassName("lukk");

 // Åpner modal referert i knapp
 for (var i = 0; i < btn.length; i++) {
     btn[i].onclick = function(e) {
         e.preventDefault();
         modal = document.querySelector(e.target.getAttribute("href"));
         modal.style.display = "block";
     }
 }

 // Lukker element når du trykker på x (Bruker ikke denne)
 for (var i = 0; i < spans.length; i++) {
     spans[i].onclick = function() {
         for (var index in modals) {
             if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
         }
     }
 }

 // Lukkes når du trykker utenfor modal
 window.onclick = function(event) {
     if (event.target.classList.contains('modal')) {
         for (var index in modals) {
             if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
         }
     }
 }


for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  console.log( localStorage.getItem( localStorage.key( i ) ) );
}
