/**
 * This file is used to detect if the app is running in development mode or production mode.
 * If you are developing the app, it will show on your browser
 * If it's loaded on fivem it will be hidden.
 */

window.addEventListener("load", () => {
  if (window.invokeNative) {
    document.getElementById("app-container")?.classList.add("app-prod");
    return;
  }

  document.getElementById("app-container")?.classList.add("app-dev");
  document.body.style.visibility = "visible";
});
