import mongoose from "mongoose"
const appUserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    toggle: { type: Boolean }
})
const appUser = mongoose.models.appusers || mongoose.model('appusers', appUserSchema)
export default appUser