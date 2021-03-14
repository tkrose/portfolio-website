import renderProjects, {sortProjects} from '/projects.js'
import renderNews, {searchNews} from '/news.js'
import renderAbout from '/about.js'
import renderNavbar from '/navbar.js'
import renderFooter from '/footer.js'

export default function renderMainPage(data) {
  document.querySelector(".container").innerHTML = `
      ${renderNavbar("main", Object.keys(data))}
      ${renderAbout(data.about)}
      ${renderNews(data.news)}
      ${renderProjects(data.projects)}
      ${renderFooter()}
    `;
  searchNews(data);
  sortProjects(data);
}

