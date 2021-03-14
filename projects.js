export default function renderProjects(projects) {
  return `
    <section id="projects">
        <h2 class="title">
          Current Projects
          <img
            src="https://cdn.glitch.com/714a551e-3dfd-4e27-8c9f-f4e6dd091ec4%2Fsparklefavicon.png?v=1613279508001"
          />
        </h2>
        <div class="filter">
          <label>
            <input type="radio" name="filter" value="all" checked>
            All
          </label>
          <label>
            <input type="radio" name="filter" value="cs">
            Computer Science
          </label>
          <label>
            <input type="radio" name="filter" value="biology">
            Biology
          </label>
          <label>
            <input type="radio" name="filter" value="research">
            Research
          </label>
          <label>
            <input type="radio" name="filter" value="hackathon">
            Hackathon
          </label>
          <label>
            <input type="radio" name="filter" value="other">
            Other
          </label>
        </div>
        <div class="row">
          <div class="project-list">
            <div class="row">
              ${renderProjectItems(projects)}
            </div>
          </div>
        </div>
    </section>`;
}

export function renderProjectItems(projects) {
  return projects.map(d => `
      <div class="col-7">
        <h3 class="project-title">
          <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        </h3>
				<div class="project-description">
          <p>
            ${d.teaser}<br>
          </p>
        </div>
        <div class="project-link">
          <a href="${d.materials.path}" target="_blank"
                  >${d.materials.label}</a
                >
        </div>
        </br>
        <img src="${d.image}" width="50%">
		</div>
	`).join("");
}

export function sortProjects(data) {
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change',function(event){
    let tag = event.target.value;
    console.log(event.target.value);
    if (tag === "all") {
      document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects);
    }
    else {
      const filtered = data.projects.filter(projects=>((projects.tags[0].toLowerCase()===(event.target.value.toLowerCase()) || (projects.tags[1].toLowerCase()===(event.target.value.toLowerCase())) || (projects.tags[2].toLowerCase()===(event.target.value.toLowerCase())))));
      document.querySelector('.project-list').innerHTML = renderProjectItems(filtered);
    }
  }));
}