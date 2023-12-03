const apiKey = "AIzaSyD0uj8MiassYgwVe-fxCYLx98WNRgIO3Ls";

const baseKey = "https://www.googleapis.com/youtube/v3/search";


async function fetchData(searchValue, maxResult){
    const responce = await fetch(`${baseKey}?key=${apiKey}&q=${searchValue}&maxResults=${maxResult}&part=snippet`);
    const data = await responce.json();
     console.log(data.items);
     displayData(data)
}
fetchData('entertainment in telugu', 20);


 const MainContainerElement = document.getElementById("maincontainer");

function displayData(value){
  
    value.items.forEach(element => {
        
         const divElement = document.createElement("div");
        
        //  divElement.addEventListener("click", displayVideoCard(element));
         divElement.className="style";
        // console.log(divElement);
        divElement.innerHTML=`<a href="videoPlayer" class="image "><img src="${element.snippet.thumbnails.default.url}"></a>
                             <h4>${element.snippet.title}</h4>
                             <p>${element.snippet.channelTitle}</p>`;
                            //  containerElement.appendChild(divElement);
                            MainContainerElement.appendChild(divElement);
                         //    divElement.addEventListener("onclick", displayVideoCard(element));          
    });
     // MainContainerElement.appendChild(containerElement);
}
divElement.addEventListener("click", displayVideoCard(element));
function displayVideoCard(video){
     // location.href=`https://youtube.com/watch?v=${video.id.videoId}`;
     window.location.href="/videoPlayer.html";
}

