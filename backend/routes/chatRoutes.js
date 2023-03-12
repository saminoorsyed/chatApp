const express = require("express");
const router = express.Router();

//import Middleware
const {protect} = require('../middleware/authMiddleware');
// import controllers
const  {accessChat,
        fetchChats,
        createGroupChat,
        renameGroupChat,
        addToGroup,
        removeFromGroup
    } = require('../controllers/chatControllers');


router.route('/').post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect,createGroupChat);
router.route("/rename").put(protect, renameGroupChat);
router.route("/groupremove").put(protect,removeFromGroup);
router.route("/groupadd").put(protect,addToGroup);

module.exports = router;