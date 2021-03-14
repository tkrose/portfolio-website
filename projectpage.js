import renderBackNavbar from '/backnavbar.js'
import renderFooter from '/footer.js'

export default function renderProjectPage(project) {
  document.querySelector(".container").innerHTML = `
      ${renderBackNavbar(1)}
      <div class="row">
      ${renderOneProject(project)}
      ${renderFooter()}
    `;
}

export function renderOneProject(project) {
  return `
    <section id="about">
        <h2>
          ${project.title}
          <img
            src="https://cdn.glitch.com/714a551e-3dfd-4e27-8c9f-f4e6dd091ec4%2Fsparklefavicon.png?v=1613279508001"
          />
        </h2>
        <h4>
          <a href="${project.organizationLink}" target="_blank"
            >${project.organization}</a
          >
          <div class="project-link">
        </div>
        </h4>
        <div class="row">
          <div class="col-4">
            <h3>
              ${project.sectionTitle[0]}
            </h3>
            <p>
              ${project.description[0]}
            </p>
          </div>
          <br />

          <div class="col-4">
            <h3>
              ${project.sectionTitle[1]}
            </h3>
            <p>
              ${project.description[1]}
            </p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-5">
            <img
              src="${project.image}"
              width="50%"
            />
          </div>
        </div>
      </section>
`;
}