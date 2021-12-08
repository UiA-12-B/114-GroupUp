# GroupUp - IS114

**GroupUp** er en app/web applikasjon som kan brukes av **studenter** til å finne eller å arrangere forskjellige **aktiviteter og arrangementer**, såkalte “events”. “Events” blir lagt ut i kategorier som tilsier hva slags aktiviteter skal skje på “eventen”.

Vårt prosjekt har gått ut på å lage en applikasjon for studenter. Applikasjonens hovedformål er å redusere ensomhet blant studenter, bakgrunnen for dette er en undersøkelse fra FHI som viser til økt ensomhet blant studenter (FHI.no, 2020).  
Gjennom vår applikasjon skal brukerne ha mulighet til å publisere forskjellige eventer som for eksempel et møte for en bok klubb, spille fotball eller fellestrening. Det skal også være mulig for brukerne å kunne melde seg på, dele og skape interesse rundt hendelser som andre brukere har publisert.

# Kode språk brukt

Teorien rundt programmerings- og markup språk ble sentrert rundt **HTML, CSS, MarkUp og JavaScript**. Dette er de språkene vi studerte mest, samtidig som at vi lærte oss teorien rundt **GIT og version-control**. Dette ble gjort gjennom forelesninger, samt som at mye av kunnskapen ble tilegnet gjennom digitale ressurser som **W3Schools, Mozilla Developer, Stackoverflow og youtube**.

## Fil oppsett

Vi satt opp prosjektet på en relativ enkel måte. Alle **hovedsidene**/sidene som funker forskjellige, ligger i hoved mappen. Mens sider som feks. alle sidene for hver kategori som i teorien er helt like, ligger i en engen mappe kalt **pages**. Dette gjelder også alle Javascript filene som ligger i **Javascript** mappen. **CSS** filene er satt opp slik at det er en hoved CSS fil kalt **Generic Styles** som er CSS for de fleste sidene, attpå til dette har vi også lagd en **Unique Styles** for de sidene som trenger noe mer unik css. 

## CSS - Cascading Style Sheets

Alt av CSS skal være kommentert i CSS dokumentene slik 
```css
/* Hoved farge på bakgrunn*/

html{

	background-color:#3352F3;

	font-family: 'Epilogue';

	text-decoration: none;

	margin:0;

	padding:0;

}

/* Styling for tittel tekst*/

.pageTitle{

	color: white;

	text-align: center;

	padding: 25px;

	font-weight: 700;

	font-size: 50px;

}
``` 
Og dette gjelder både GenericStyles og UniqueStyles. 

# JavaScript

## Navigasjon
```javascript
function  openNav() {

document.getElementById("myNav").style.display = "block";

}

function  closeNav() {

document.getElementById("myNav").style.display = "none";

}
```
Dette er en veldig enkel funksjon som når blir aktivert med en knapp som kaller funksjonen openNav() vil bytte ut style.display i css koden fra "none" som gjør den gjør at den ikke kan sees, til "block" som vil gjør den synlig og brukbar.
Navigasjonen lukkes igjen ved å kalle på closeNav(), som gjør det samme men andre veien.

# Create Event
Denne funksjonen ser kanskje avansert ut men er nokså enkel i prinsipp.
```javascript
const  button = document.getElementById('submit')

const  iname = document.getElementById('name')

const  idate = document.getElementById('date')

const  itime = document.getElementById('time')

const  islots = document.getElementById('slots')

const  icatagory = document.getElementById('catagory')

const  ilocation = document.getElementById('location')

const  idescription = document.getElementById('desc')

  

button.onclick = function (){

const  name = iname.value;

const  date = idate.value;

const  time = itime.value;

const  slots = islots.value;

const  catagory = icatagory.value;

const  location = ilocation.value;

const  desc = idescription.value;

const  id = Math.floor(Math.random() * 1000) + 1;

  

const  eventID = ("Event - ");

  

const  event = {

Name:  name,

Date:  date,

Time:  time,

Slots:  slots,

Catagory:  catagory,

Location:  location,

Description:  desc,

ID:  id,

};

  
  

if (name && date && time && slots && catagory && location && desc) {

localStorage.setItem(eventID+name,JSON.stringify(event));

} else {

alert("Not all fields are filled")

}

};
```
Denne lagrer kort sagt det som blir satt inn når man lager en event, og lagrer den ved bruk av localStorage();. Den skaper et par konstanter som den trekker ut av en form som blir referert til i toppen av koden.  Etter det tar den det den fikk fra formen og putter det i en JSON fil med stringify. Dette blir så lagret i nettleseren og kan sees ved å gå inn på inspect element -> Application under local storage.

# Kategori Selector
```javascript
var  btn = document.querySelectorAll("a.bx");
var  modals = document.querySelectorAll('.modal');
var  spans = document.getElementsByClassName("lukk");
for (var  i = 0; i < btn.length; i++) {

btn[i].onclick = function(e) {

e.preventDefault();

modal = document.querySelector(e.target.getAttribute("href"));

modal.style.display = "block";
}
}
for (var  i = 0; i < spans.length; i++) {

spans[i].onclick = function() {

for (var  index  in  modals) {

if (typeof  modals[index].style !== 'undefined') modals[index].style.display = "none";
}
}
}
window.onclick = function(event) {

if (event.target.classList.contains('modal')) {

for (var  index  in  modals) {

if (typeof  modals[index].style !== 'undefined') modals[index].style.display = "none";
}
}
}
for ( var  i = 0, len = localStorage.length; i < len; ++i ) {

console.log( localStorage.getItem( localStorage.key( i ) ) );

}
```

Dette er nokk den mest avanserte skriptet vi har på siden. Denne får tak i et par interaktive element som et par knapper og noen dots for å lage funksjon for å kunne gå gjennom en rekke kort på samme side. 



