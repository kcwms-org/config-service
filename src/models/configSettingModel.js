import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConfigSettingSchema = new Schema({
    key: {
        type: String,
        required: 'the key is required',
    },
    value: {
        type: String,
        required: 'the value is required',
    },
    environment: {
        type: String,
        required: 'required dev|test|prod',
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
