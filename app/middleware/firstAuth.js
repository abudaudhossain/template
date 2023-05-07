const DeviceInfoError = require("../exceptions/DeviceInfoError");
const handlers = require("../exceptions/handlers");



module.exports = async (req, res, next) => {
    try {
        req.nativeRequest = {};
        req.nativeRequest.requestTime = new Date().toUTCString();
        // @validation



        // @service add nativeRequestData req
     

        // console.log(req.nativeRequest, "first Auth l:12")

        next();
    } catch (error) {
        console.log(error);
        handlers({
            errorLog: {
                location: req.originalUrl.slice(1).split("/").join("::"),
                query: "SYSTEM FIRST AUTH MIDDLEWARE",
                details: `Error: ${error}`
            },
            error
        }, req, res)
    }
}