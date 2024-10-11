async function getMessages() {
  const url = "https://api.sampleapis.com/cartoons/cartoons3D";
  const response = await fetch(url);
  const data = await response.json();

  const element = document.querySelector(".work");
  element.innerHTML = "";

}
getMessages();
