const Quote = require('../models/quote');

exports.index = async (req, res, next) => {
    try {
        const quotes = await Quote.find();
        res.status(200).json(quotes);

    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        const { author, quote, date } = req.body;
        const qt = await Quote.create({
            author, // shorthand for author: author
            quote,
            date: new Date(date)
        });

        res.status(200).json({ message: "Quote created successfully", quote: qt });

    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const { _id, author, quote, date } = req.body;
        const qt = await Quote.findOneAndUpdate( _id, {
            author,
            quote,
            date: new Date(date)
        });

        res.status(200).json({ message: "Quote updated successfully", quote: qt });

    } catch (error) {
        next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
        const { _id } = req.body;
        await Quote.findOneAndDelete( _id ); // could also be ({ _id: id })
        
        res.status(200).json({ message: "Quote deleted successfully" });

    } catch (error) {
        next(error);
    }
};