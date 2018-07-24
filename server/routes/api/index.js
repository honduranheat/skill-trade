const router = require("express").Router();
const listingRoutes = require("./Listing");
const profileRoutes = require("./Profile");
const reviewRoutes = require("./Review");
const userRoutes = require("./user");
const messageRoutes = require("./message")
// Book routes
router.use("/users", userRoutes);
router.use("/message", messageRoutes);

router.use("/user", userRoutes);


router.use("/listings", listingRoutes);

router.use("/profiles", profileRoutes);

router.use("/reviews", reviewRoutes);

module.exports = router;
