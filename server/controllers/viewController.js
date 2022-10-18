const DBConnection = require('../../configs/db_config')

let homeView = (req, res) => {
    res.render('home')
}
let my_profile = (req, res) => {
    res.render('my_profile')
}
let upcoming_events = (req, res) => {
    res.render('upcoming_events')
}
let rules = (req, res) => {
    res.render('rules')
}
let lore = (req, res) => {
    res.render('lore')
}
let paypal = (req, res) => {
    res.render('paypal')
}
let edit_profile = (req, res) => {
    res.render('edit_profile')
}
let forums = (req, res) => {
    res.render('forums')
}

module.exports = {
    homeView: homeView,
    my_profile: my_profile,
    upcoming_events: upcoming_events,
    rules: rules,
    lore: lore,
    paypal: paypal,
    edit_profile: edit_profile,
    forums: forums,
}