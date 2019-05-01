import { about_me_data } from './data/about_me_data.js';


about_me_data().links.forEach(link=>{
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