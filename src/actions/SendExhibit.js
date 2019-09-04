/**
 * @title send exhibit to
 * @category LindseyDialogue
 * @author OnisBrown.
 */
/** const virtual_machine = (bp: SDK, user, session, temp, bot, event, args) => { */

const axios = require('axios');
var msg = args;

const callApi = async () => {
  // We call the Github API
  const { data } = await axios.get('https://api.github.com/orgs/botpress/repos')

  // We assign the response to the session variable so we can use it later
  session.response = data
}

// Actions are async, so make sure to return a promise
return callApi()




/** } */
