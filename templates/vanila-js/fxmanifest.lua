lua54 'yes'
fx_version 'cerulean'
game 'gta5'

author 'luxu.gg'
description 'okokPhone Custom App'

shared_scripts {
      "init.lua"
}

client_scripts {
      'client/utils.lua', -- This contains utility functions, so it should start first
      'client/client.lua'
}

server_scripts {
      'server/utils.lua', -- This contains utility functions, so it should start first
      'server/server.lua'
}

ui_page 'web/app.html'

files {
      'web/**/*'
}
