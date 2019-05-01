import { resource_links_data } from './data/resource_links_data.js';


resource_links_data().links.forEach(link=>{
  // <div class="services-block">
  let newLink = `
    <div class="col-4 centered">
      <i class="ion-ios-browsers-outline"></i>
      <span class="about-me-link-heading">${link.heading}</span>
      <p class="separator">
        <a href=${link.anchor} target="_blank">
          <img class="about-me-logo" src=${link.image} alt=${link.alt}>
        </a>
      </p>
    </div>
    `
  $(".services-carousel").append(newLink);

})

{/*
<div class="col-4 centered">
  <i class="ion-ios-browsers-outline"></i>
  <span class="about-me-link-heading">${link.heading}</span>
  <p class="separator">
    <a href=${link.anchor} target="_blank">
      <img class="about-me-logo" src=${link.image} alt=${link.alt}>
    </a>
  </p>
</div>
*/}