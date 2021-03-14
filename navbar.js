export default function renderNavbar(page) {
  return `
    <nav>
      <h1 class="animate__animated animate__shakeY">
        Hello there, my name is Talia!
        <img
          src="https://cdn.glitch.com/714a551e-3dfd-4e27-8c9f-f4e6dd091ec4%2Ffavicon-32x32.png?v=1613274759822/"
        />
      </h1>
      <strong>
        <ul class="flex-container">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#news">Highlights</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </strong>
    </nav>`;
}
