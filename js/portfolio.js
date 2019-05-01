import { portfolio_data } from './data/portfolio_data.js';


portfolio_data().projects.forEach(project=>{
  let projectIcon = `
    <div class="col-lg-6 col-12">
      <div class="journal-info">

        <a href="blog-single.html">
        </a>
        <a href=${project.deployed_anchor} target="_blank">
          <img src=${project.image} class="img-responsive portfolio-image" alt=${project.alt}>
        </a>
        <div class="journal-txt">

          <a href="blog-single.html">
          </a>
          <h4>${project.title}</h4>

          <p class="separator">${project.description} </p>
          <p class="separator">
            <a href=${project.deployed_anchor} target="_blank">
              \> Visit Site here \<
            </a>
          </p>

          <p class="separator">
            <a href=${project.github_repo_anchor} target="_blank">
              View Repo
            </a>
          </p>
        </div>

      </div>
    </div>
    <hr>
    `
  $("#portfolio-container").append(projectIcon);

})