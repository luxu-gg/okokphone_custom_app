--- Load the App
---@class okokApp
---@field id string @ App ID
---@field label string @ App name
---@field custom true @ Is this app custom?
---@field icon string @ Icon image file "icon.png"
---@field previewImagesCount number @ How many images does this app have (App Store)?
---@field notifications boolean @ Does this app have notifications?

local resourceName = GetCurrentResourceName()
local logoPath     = ("https://cfx-nui-%s/web/icon.png"):format(resourceName)

---@type okokApp
local appInfo      = {
      id = "customapp",
      label = "Custom App Name",
      custom = true,
      icon = logoPath,
      previewImagesCount = 3,
      notifications = true,
      resourceName = resourceName
}
--- Initialize the app
CreateThread(function()
      if GetResourceState("okokPhone") ~= "started" then return end
      exports["okokPhone"]:loadApp(appInfo)
end)

--- Load the app everytime the phone resource starts
AddEventHandler("onResourceStart", function(resource)
      if resource == "okokPhone" then
            Wait(1000)
            exports["okokPhone"]:loadApp(appInfo)
      end
end)
