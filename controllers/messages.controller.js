const path = require('path');

function getMessages(req, res) {
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'favourableoutcomeplease.jpg'));
    res.render('messages', {
        title: 'Messages to Nikola!',
        friend: 'Nikola',
    })
};

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
};