# okokPhone Custom App Development

Welcome, here you can find templates that you can use to build your Custom Apps for okokPhone.

At this moment, it doesn't contain all the functions, this is a work in progress, so it's a good idea to keep an eye on it 🤓

**Todo List**

- [ ] React Template
- [ ] Add Remaining Functions

## Workflow

Developing custom apps can be a smooth process.

These templates are built in a way that allows you to hot reload your app without needing to restart the okokPhone.

The Document Variable will be injected with a few properties.

```js
console.log(document.okokPhone); // See all the injected properties

document.okokPhone.appId; // Your app's id, defined in init.lua
document.okokPhone.resourceName; // An alternative to window.GetParentResourceName() since it doesn't exist inside the app container

// Used in utils.js
// Calling these functions directly is not recommended
// Use the wrapped functions inside utils.js
document.okokPhone.notifyIsland(data);
```

New Events

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
