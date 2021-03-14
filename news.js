export default function renderNews(news) {
  return `
  <section id="news">
              <div class="col-4">
                <h2>
                  Monthly Highlights
                  <img
                    src="https://cdn.glitch.com/714a551e-3dfd-4e27-8c9f-f4e6dd091ec4%2Fsparklefavicon.png?v=1613279508001"
                  />
                </h2>
                <div class="search">
                  <input type="search" name='news' placeholder="Search Highlights...">
                </div>
                </br>
                <div class = "news-list">
                  ${renderNewsItems(news)}
                </div>
              </div>
          </section>
        </div>`;
}

export function renderNewsItems(news) {
  return news
    .map(
      d => `
			<p>
        <strong>[ <a href="${d.link}" target="_blank">${d.month} ${d.year}</a> ]</strong> ${d.message}
      </p>
	`
    )
    .join("");
}

export function searchNews(data) {
  let input = document.querySelector("input[type=search]");
  input.addEventListener("input", event => {
    console.log(event.target.value);
    const filtered = data.news.filter(news =>
      news.message.toLowerCase().includes(event.target.value.toLowerCase())
    );
    document.querySelector(".news-list").innerHTML = renderNewsItems(filtered);
  });
}
