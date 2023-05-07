const NotFoundError = require("../../exceptions/NotFountError");
const sysDevice = require("../../services/sysDevice");
const validationHelper = require("../validationHelpers/validationHelper")

module.exports = function (req) {


    const requireReqData = [ "user-agent", "source","content-type", "permission", "language"]


    validationHelper.ObjExists(requireReqData, req.headers);
    validationHelper.isEmpty(Object.values(req.headers))

}