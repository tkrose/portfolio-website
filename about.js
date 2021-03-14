export default function renderAbout(about) {
  return `
  <div class="row">
  <div class="col-5">
  <section id="about">
        <div>
              <h2>
                About Me
                <img
                  src="https://cdn.glitch.com/714a551e-3dfd-4e27-8c9f-f4e6dd091ec4%2Fsparklefavicon.png?v=1613279508001"
                />
              </h2>
              <img
                src="${about.photo}"
                alt="Portrait of Talia Kaplanian"
                class="profileImage"
              />
              <br />
              <h3>
                ${about.name}
              </h3>
              <span style="font-weight:bold"
                >${about.title}</span
              ><br />
              <a href="${about.email}"
                ><i class="fas fa-paper-plane"></i
              ></a>
              |
              <a
                href="${about.resume}"
                target="_blank"
                ><i class="fas fa-file-alt"></i
              ></a>
              |
              <a
                href="${about.linkedin}"
                target="_blank"
                ><i class="fab fa-linkedin"></i
              ></a>
              |
              <a href="${about.github}" target="_blank"
                ><i class="fab fa-github"></i
              ></a>
              |
              <a
                href="${about.facebook}"
                target="_blank"
                ><i class="fab fa-facebook-square"></i
              ></a>
              |
              <a href="${about.instagram}" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
              <br />
              <p>
                ${about.description}
              </p>
            </div> 
            </div>
      </section>`;
}