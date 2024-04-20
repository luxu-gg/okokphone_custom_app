function jump() {
  fetchNui("jump", { force: 1000 });
  notifyIsland({
    title: "Jump",
    app: "customapp",
    text: "You have jumped!",
    duration: 3000,
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
