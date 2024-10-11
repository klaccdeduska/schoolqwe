async function getMessages() {
  const url = "https://api.sampleapis.com/cartoons/cartoons3D";
  const response = await fetch(url);
  const data = await response.json();

  const element = document.querySelector(".work");
  element.innerHTML = "";
  
  for (const item of data) {
    const work = item.work;
    const image = item.image;
    element.innerHTML += "<p>" + work + ": " + image + "</p>";
}
getMessages();
