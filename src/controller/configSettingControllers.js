import mongoose from "mongoose";
import { ConfigSettingSchema } from '../models/configSettingModel';


const ConfigSettingsModel = mongoose.model('Settings', ConfigSettingSchema);

export const addNewSetting = async (req, res) => {

    try {
        let newSetting = {};
        if (req.params.settingId)
            newSetting = await ConfigSettingsModel.findByIdAndUpdate(req.params.settingId, req.body, { setDefaultsOnInsert: true, upsert: true, new: true });
        else {
            newSetting = await ConfigSettingsModel.create(req.body);
            await newSetting.save();
        }

        res.status(200).send(newSetting);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getSetting = async (req, res) => {
    try {
        let SettingDocument = {};

        if (req.params.settingId) {
            SettingDocument = await ConfigSettingsModel.findById(req.params.settingId);
        }
        else {
            SettingDocument = await ConfigSettingsModel.find();
        }
        res.status(200).send(SettingDocument);

    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteSetting = async (req, res) => {
    try {
        const setting = await ConfigSettingsModel.findByIdAndDelete(req.params.settingId);
        res.status(200).send(setting);
    } catch (error) {
        res.status(500).send(error);
    }
}
