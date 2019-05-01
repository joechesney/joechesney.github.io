import { technologies_data } from './data/technologies_data.js';

technologies_data().technologies.forEach(tech=>{
  let techIcon = `
    <div class="col-lg-1 col-md-2 col-3 technology-thumbnail all ${tech.classes}">
        <img src="images/technologies/${tech.location}" alt="img">
        <span class="technology-name">${tech.name}</span>
    </div>
    `
  $(".technology-container").append(techIcon);

})


{/* <a class="popup-img" href="images/technologies/${tech.location}">
</a> */}
