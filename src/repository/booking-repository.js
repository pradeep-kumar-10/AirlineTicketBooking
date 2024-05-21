const {StatusCodes} = require('http-status-codes');
const {Booking} = require('../models/index');
const {AppError, ValidationError} = require('../utils/errors/index');

class BookingRepository{
    async createBooking(data){
        try{
            const booking = await Booking.create(data);
            return booking;
        } catch(error){
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError', 
                'Can not create booking', 
                'There was some issue while creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = BookingRepository;