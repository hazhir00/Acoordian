const headers = document.querySelectorAll(".accordion-header");
const icons = document.querySelectorAll(".accordion-header i");

headers.forEach((header, index) => {
   const body = header.nextElementSibling;
   const icon = icons[index];

   header.addEventListener("click", () => {
      header.classList.toggle("border-bottom");
      body.classList.toggle("show");
      icon.classList.toggle("rotate");
   });
});

// const headers = document.querySelectorAll(".accordion-header");
// const icons = document.querySelectorAll(".accordion-header i");

// headers.forEach((header, index) => {
//    const body = header.nextElementSibling;
//    const icon = icons[index];

//    header.addEventListener("click", () => {
//       // Close all other accordions
//       headers.forEach((otherHeader, otherIndex) => {
//          if (otherHeader !== header) {
//             otherHeader.classList.remove("border-bottom");
//             otherHeader.nextElementSibling.classList.remove("show");
//             icons[otherIndex].classList.remove("rotate");
//          }
//       });

//       // Toggle the clicked accordion
//       header.classList.toggle("border-bottom");
//       body.classList.toggle("show");
//       icon.classList.toggle("rotate");
//    });
// });
