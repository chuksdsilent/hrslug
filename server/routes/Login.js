
const router = express.Router();

router.post('/login', (req, res) => {
    res.send({"msg": "Welcome to login"})
});

module.exports = router;

