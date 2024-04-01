const { getAllUsers ,signup, login, logout, resetPassword, verifyOtp, getUser } = require("../controllers/AuthController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

// AUTH ROUTES
router.post("/signup", signup)
router.post("/login",login)
router.get("/logout", logout)
router.put("/reset-password", resetPassword)
router.put("/verify-otp", verifyOtp)
router.get("/get-user",verifyToken,getUser)
router.get('/getAllUsers',verifyToken ,getAllUsers);



module.exports = router;
