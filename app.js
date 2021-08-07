const ul = document.querySelector("ul");

function createListItem(rank, title, img) {
    const li = document.createElement("li");

    const html = `
        <p>${rank}. ${title}</p>
        <img src="${img}" alt="Image of ${title} anime">
    `;

    li.innerHTML = html;
    ul.appendChild(li);
}



fetch("https://api.jikan.moe/v3/top/anime/1/upcoming", {
    method: "GET"
})
  .then(res => res.json())
  .then(data => {
      data.top.forEach(element => {
          createListItem(element.rank, element.title, element.image_url)
      });
  })
  .catch(err => console.log(err))