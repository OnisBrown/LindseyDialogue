"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = async bp => {
  /**
   * This is an example route to get you started.
   * Your API will be available at `http://localhost:3000/api/v1/bots/BOT_NAME/mod/LindseyDialogue`
   * Just replace BOT_NAME by your bot ID
   */
  const router = bp.http.createRouterForBot('LindseyDialogue'); // Link to access this route: http://localhost:3000/api/v1/bots/BOT_NAME/mod/LindseyDialogue/my-first-route

  router.get('/my-first-route', async (req, res) => {
    // Since the bot ID is required to access your module,
    const botId = req.params.botId;
    /**
     * This is how you would get your module configuration for a specific bot.
     * If there is no configuration for the bot, global config will be used. Check `config.ts` to set your configurations
     */

    const config = await bp.config.getModuleConfigForBot('LindseyDialogue', botId);
    res.sendStatus(200);
  });
};

exports.default = _default;
//# sourceMappingURL=api.js.map
