import * as sdk from 'botpress/sdk'

const onServerStarted = async (bp: typeof sdk) => {}
const onServerReady = async (bp: typeof sdk) => {}

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  definition: {
    name: 'LindseyDialogue',
    menuIcon: 'none',
    menuText: 'Lindsey',
    noInterface: true,
    fullName: 'Lindsey',
    homepage: 'https://botpress.io'
  }
}

export default entryPoint
