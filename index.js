import renderProjectPage from '/projectpage.js'
import renderMainPage from '/main.js'

fetch("data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    console.log("projects.param", params.get("project"));
    if (params.get("project") === null) {
      renderMainPage(data);
    } else {
      console.log("renderProjects");
      let id = params.get("project");
      console.log(id);
      if (id === "riboswitches") {
        renderProjectPage(data.projects[0]);
      } else if (id === "ehi-hackathon") {
        renderProjectPage(data.projects[1]);
      } else if (id === "hth-hackathon") {
        renderProjectPage(data.projects[2]);
      } else if (id === "fashion-project") {
        renderProjectPage(data.projects[3]);
      }
    }
  });