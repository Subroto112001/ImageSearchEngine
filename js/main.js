
    const ImageSearch__Input = document.querySelector(".ImageSearch__Input");
    const ImageSearch__Btn = document.querySelector(".ImageSearch__Btn");
    const ImageDisplay = document.querySelector(".ImageDisplay");
    const ShowMore = document.querySelector(".ShowMore");
    const ImageSearch__form = document.querySelector(".ImageSearch__form");
let keyword = "";
let page = 1;

const accessKey = "dMkJs_FiNx7XL4OOvITgXdiFVAUyh7ddDVLiO0lgSHg"
async function searchImage() {
  try {
    keyword = ImageSearch__Input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
      const data = await response.json();
      if (page === 1) {
    ImageDisplay.innerHTML ="";
}


      const rsults = data.results;

      rsults.map((result) => {
        const Image = document.createElement("img");
        Image.src = result.urls.small;
        const ImageLink = document.createElement("a");
        ImageLink.href = result.links.html;
        ImageLink.target = "_blank";
        ImageLink.appendChild(Image);
        ImageDisplay.appendChild(ImageLink);
      });

ShowMore.style.display = "block" ;
    console.log(data); // Replace with the logic to display images
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

    
ImageSearch__form.addEventListener("submit", (e)=>{

    e.preventDefault()
    page = 1;
    searchImage()
});
ShowMore.addEventListener('click', () => {
    page++
    searchImage();
});