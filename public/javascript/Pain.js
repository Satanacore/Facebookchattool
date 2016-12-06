/**
 * @file rickroll.js
 * Rickrolls the user. Used for initial testing.
 *
 */

module.exports = function rickroll(api, threadID) {
    var num = Math.random();
    if (num >= 0.420 && num <= 0.42069) {
        api.sendMessage("https://www.youtube.com/watch?v=-59jGD4WrmE", threadID);
    } else {
        api.sendMessage("https://www.youtube.com/watch?v=-59jGD4WrmE", threadID);
    }
    console.log("Rickrolled " + threadID);
}
