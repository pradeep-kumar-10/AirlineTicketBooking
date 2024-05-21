const {StatusCodes} = require('http-status-codes');

const {BookingService} = require('../services/index');
const bookingService = new BookingService();

const createBooking = async(req,res) => {
    try{
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({ 
            data: response,
            success: true,
            message: 'Successfully completed booking',
            err: {},
        });
        
    } catch(error){
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation,
        });
    }
}

module.exports = {
    createBooking
}