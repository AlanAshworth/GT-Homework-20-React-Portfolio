const router = require("express").Router();
const configRoute = require("./config");
const assignmentRoutes = require("./assignments");

router.use("/config", configRoute);
router.use("/assignments", assignmentRoutes);

module.exports = router;