//  1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query
//         2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query
//         3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view
//         4) The Edit button should be replace with a "Hide" button.
//         5) When the hide button is pressed, the whole picture card disappears.
//         6) Replace the "9 mins" string in the card template with the ID of the Image
console.log("hello");

// $("svg").remove();
// let svg = document.getElementsByTagName("svg");
// console.log(svg);

// let img = document.createElement("img");
// img.src = "http://www.splashbase.co/api/v1/images/search?query=hill";
// img.width = "700px";
// img.height = "450px";
// img.classList = "bd-placeholder-img card-img-top";

// let cards = document.getElementsByClassName("card");
// console.log(cards.length);
const fetchData = async (query) => {
  try {
    const parent = document.querySelector(".images");
    parent.innerHTML = "";
    const response = await fetch(
      "http://www.splashbase.co/api/v1/images/search?query=" + query
    );
    const data = await response.json();
    console.log(data);
    data.images.forEach((image) => {
      const card = `    <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="${image.url}"
                 
                  aria-label="Placeholder: Thumbnail"
                />
                 
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`;
      parent.innerHTML += card;
    });
  } catch (error) {
    console.log(error);
  }
};
window.onload = async function () {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", async () => {
    await fetchData("hill");
  });
};
