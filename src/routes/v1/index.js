const express = require('express');

const router = express.Router();

const {BookingController} = require('../../controllers/index');
const bookingController = new BookingController();

router.post('/bookings', bookingController.createBooking);
router.post('/publish', bookingController.sendMessageToQueue);

router.get('/info', (req,res) =>{
    return res.json({Message:'Response from routes'})
})

module.exports = router;