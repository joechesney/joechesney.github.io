
const portfolio_data = function() {
  return {
    "projects": [
      {
        "title": "JAMMR",
        "image": "./images/portfolio/jammr_home_wide.png",
        "deployed_anchor": "https://fec-jammr.firebaseapp.com/",
        "github_repo_anchor": "https://github.com/joechesney/Front-End-Capstone-JAMMR",
        "alt": "link to info about app called Jammr",
        "description": "Mobile, social media app built with AngularJS, Firebase, Google Maps API, custom-built private messaging system.",
      },
      {
        "title": "SCOOP",
        "image": "./images/portfolio/scoop_home.png",
        "deployed_anchor": "https://scoop-ac8d5.firebaseapp.com/",
        "github_repo_anchor": "https://github.com/joechesney/Scoop-Client",
        "alt": "link with info about app called Scoop",
        "description": "Web App built with ReactJS, NodeJS, Express, Reverb API, and custom javascript algorithms.",
      },
      {
        "title": "PogoTaskMap",
        "image": "./images/portfolio/pogotaskmap_home.png",
        "deployed_anchor": "https://pogotaskmap.firebaseapp.com/",
        "github_repo_anchor": "https://github.com/joechesney/PoGoTaskMap-Client",
        "alt": "link with info about app called PogoTaskMap",
        "description": "Web App built with jQuery, NodeJS, Express, MySQL.",
      },
    ],

  }
}

export { portfolio_data };