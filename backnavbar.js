export default function renderBackNavbar(page) {
  return `
    <nav style="background-color: #99ccff;">
      <h1>So you want to learn more about...</h1>
      <strong>
        <ul class="back-button-container">
          <li>
            <a href="/index.html"
              ><i class="fas fa-arrow-alt-circle-left"></i
            ></a>
          </li>
        </ul>
      </strong>
    </nav>`;
}