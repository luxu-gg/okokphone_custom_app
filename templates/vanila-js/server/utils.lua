---@param source number
---@param data DynamicIslandNotification
function notifyDI(source, data)
      TriggerClientEvent("okokPhone:client:NotifyDI", source, data)
end
