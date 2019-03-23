const { User, Blog, Tag} = require('../sequelize');
class AecorController {
   

    static main(serverRequest, serverResponse) {
        return serverResponse.sendStatus(200).("200 OK"); 
    }
    static endpoints(apiRequest, apiResponse) {
        const aboutEndpoint = 'https://about.aecorgame.com';
        return apiResponse.sendFile(path.resolve('../../views/about.ejs'));
        console.log("User accessed main page");
    }
}
module.exports = AecorController;
