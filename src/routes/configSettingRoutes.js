import { addNewSetting, deleteSetting, getSetting } from "../controller/configSettingControllers";

const ConfigSettingRoutes = (app) => {
    
    app.route("/setting")
        .get(getSetting)

        .post(addNewSetting)

    app.route("/setting/:settingId")
        .put(addNewSetting)
        .delete(deleteSetting)
}

export default ConfigSettingRoutes;