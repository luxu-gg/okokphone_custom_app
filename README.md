# okokPhone Custom App Development

Welcome, here you can find templates that you can use to build your Custom Apps for okokPhone.

At this moment, it doesn't contain all the functions, this is a work in progress, so it's a good idea to keep an eye on it 🤓

## Workflow

Developing custom apps can be a smooth process.

These templates are built in a way that allows you to hot reload your app without needing to restart the okokPhone.

The Document Variable will be injected with a few properties.

```js
console.log(window.okokPhone); // See all the injected properties

window.okokPhone.appId; // Your app's id, defined in init.lua
window.okokPhone.resourceName; // Alternative to window.GetParentResourceName(), use what you want

// Since v0.2.4
window.GetParentResourceName(); // Is now available inside the app container

// Example: Check if dark mode is enabled
const isDark = window.okokPhone.isDarkMode();
console.log("Is dark mode enabled?", isDark);

// Since v1.0.1

// Example: Access phoneData from the injected object
const myPhoneData = window.okokPhone.phoneData;
/*
  myPhoneData: {
    imei: string;
    phoneNumber: string;
    contacts: Contact[];
    email: string | undefined;
    ...
  }
*/

// Example: Use openGallery to select an image or video
window.okokPhone.openGallery((media) => {
  if (media) {
    // media: GalleryMedia
    console.log("Selected media:", media.src);
    if (media.type === "image") {
      // Handle image
    } else if (media.type === "video") {
      // Handle video
    }
  } else {
    console.log("User cancelled gallery");
  }
}, "images"); // or "videos"

// Example: Call a number
window.okokPhone.callNumber("123-456-7890");

// Example: Call a service by job name
window.okokPhone.callService("ambulance");

// Example: Send a Dynamic Island Notification
window.okokPhone.notifyIsland({
  title: "New Message",
  text: "You have a new message!",
  app: "messages",
  duration: 3000,
});

// Upload media via api configured in the phone, returns data if succesful.
window.okokPhone.uploadMedia(type: 'image' | 'video', blob: Blob):Promise<{
  src: string;
  timestamp: string;
  type: 'image' | 'video';
  id: string;
  width: number;
  height: number;
  }>

// Save media url to the gallery
 window.okokPhone.saveToGallery(url: string):Promise<boolean>
 
 
 //Example usage
 const result = await window.okokPhone.uploadMedia("image", blob)
 if (result){
   await window.okokPhone.saveToGallery(result.src)
 }
 

// Example: Disable controls
window.okokPhone.disableControls(true); // disables controls
window.okokPhone.disableControls(false); // enables controls

// Example: Use Contact type
/** @typedef {import('./templates/types').Contact} Contact */

/**
 * @type {Contact}
 */
const exampleContact = {
  name: "Jane Doe",
  phoneNumber: "987-654-3210",
  company: "Acme Corp.",
  email: "jane@example.com",
  avatar: "/avatars/jane.png",
  favorite: true,
  timestamp: Date.now(),
};
```

### Events

```js
// Handle Dark Mode Toggle
document.addEventListener("darkMode", (e) => {
  const isDark = e.detail;
  if (isDark) {
    console.log("Dark Mode is enabled");
  } else {
    console.log("Dark Mode is disabled");
  }
});

document.addEventListener("loadedPhoneFunctions", () => {
  console.log("props", document.okokPhone);
});
```

## Customizing your app information

#### Open `init.lua` and change the app info

```lua
local appInfo      = {
      id = "customapp", -- Your app id (keep it short, the user won't see it)
      label = "Custom App Name", -- Your app display name
      description = "Your app store description",
      custom = true, --❌ Don't touch this
      icon = logoPath, --❌ You Don't need to touch this
      previewImagesCount = 3, -- Depends on the number of images present on web/app-store
      notifications = true, --❌ Don't touch this
      resourceName = resourceName, --❌ Don't touch this
      webUrl = webUrl, -- ❌ Don't touch this
}
```

#### Changing the app logo

- Open web folder
- Replace icon.png

## Templates

### Vanilla JS

This is a very basic template for those of you that don't use any framework.

You can copy the functions and use it however you like, I added JSDoc types so you can enjoy type safety.

It contains **tailwind cdn** and a list of functions found on `web/assets/utils.js`.

You can just open `app.html` in your browser and start developing your app inside the development container like any other project.

Please don't delete the `style.css` if you don't know what you are doing. Read the comments.
