---@param data {force: number}
RegisterNUICallback("jump", function(data, cb)
      local forceTypes = {
            MinForce = 0,
            MaxForceRot = 1,
            MinForce2 = 2,
            MaxForceRot2 = 3,
            ForceNoRot = 4,
            ForceRotPlusForce = 5
      }

      local entity = PlayerPedId()
      local forceType = forceTypes.MaxForceRot2
      -- sends the entity straight up into the sky:
      local direction = vector3(0.0, 0.0, 15.0)
      local rotation = vector3(0.0, 0.0, 0.0)
      local boneIndex = 0
      local isDirectionRel = false
      local ignoreUpVec = true
      local isForceRel = true
      local p12 = false
      local p13 = true

      ApplyForceToEntity(
            entity,
            forceType,
            direction.x, direction.y, direction.z,
            rotation.x, rotation.y, rotation.z,
            boneIndex,
            isDirectionRel,
            ignoreUpVec,
            isForceRel,
            p12,
            p13
      )

      cb(true)
end)
