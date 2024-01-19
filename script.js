// const apiKey = "AIzaSyD0uj8MiassYgwVe-fxCYLx98WNRgIO3Ls";
let apiKey = "AIzaSyAEwL1eIor7nqinmj8SME7BlN6wQbr56pY";

const baseKey = "https://www.googleapis.com/youtube/v3/search";

async function fetchData(maxResult) {
  const responce = await fetch(
    `${baseKey}?key=${apiKey}&maxResults=${maxResult}&part=snippet`
  );
  const data = await responce.json();
  console.log(data.items);
   displayData(data);
}
fetchData(20);


const SearchIcon = document.getElementById("icon");
const inputElement = document.getElementById("inputButton");

let searchLink = "https://www.youtube.com/results?search_query=";

SearchIcon.addEventListener("click", () => {
  if (inputElement.value.length) {
    location.href = searchLink + inputElement.value;
  }
});



const MainContainerElement = document.getElementById("maincontainer");

function displayData(value) {
  value.items.forEach((element) => {
    const divElement = document.createElement("div");

    divElement.className = "style";
     console.log(divElement);
    

    divElement.innerHTML = `

                              <a href="videoPlayer" class="image "><img src="${element.snippet.thumbnails.medium.url}"></a>
                             <h4>${element.snippet.title}</h4>
                             <p>${element.snippet.channelTitle}</p>
                         
                             `;
    //  containerElement.appendChild(divElement);
     
    MainContainerElement.appendChild(divElement);
    //    divElement.addEventListener("onclick", displayVideoCard(element));
  });
}



