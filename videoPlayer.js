const api_Key = "AIzaSyAzlNn9klbiobfdfyQRFqn0X1wqEvW3mok";

const base_Key = "https://www.googleapis.com/youtube/v3/search";


async function fetchData(searchValue, maxResult){
    const responce = await fetch(`${base_Key}?key=${api_Key}&q=${searchValue}&maxResults=${maxResult}&part=snippet`);
    const data = await responce.json();
  console.log(data);
    //  displayData(data)
     displayVideo(data)
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




// const apiKey = "AIzaSyAzlNn9klbiobfdfyQRFqn0X1wqEvW3mok";

// const baseKey = "https://www.googleapis.com/youtube/v3/videos";


// async function displayVideo(videoId){
//     const responce = await fetch(`${baseKey}?key=${apiKey}&part=statistics&id=${videoId.snippet.id}`);
//     const data = await responce.json();
//     console.log(data);

// }
// displayVideo();