---@class DynamicIslandNotification
---@field title string
---@field text string
---@field app? string
---@field icon? string
---@field duration number

---@param data DynamicIslandNotification
function notifyDI(data)
      TriggerEvent("okokPhone:client:NotifyDI", data)
end
