


// AI image generate API
function generateImg() {
    imagePrompt = document.getElementById('image-generate').value;
    const apiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(imagePrompt)}?width=1920&height=1080&model=flux`;
    const imgElement = document.getElementById('result');
    console.log(apiUrl);
    document.getElementById('result').innerHTML = `<img src="${apiUrl}" alt="Generated Image" width="500">`;
}

if ('serviceWorker' in navigator) {
  window.addEventListener("load",function(){
    navigator.serviceWorker
    .register("/JS/serviceWorker.js")
    .then(function(){
      console.log("Servis worker registerd ")
    })
    .catch(function(err){
      console.log("service worker not registerd")
    })
  })
}
