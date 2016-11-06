/* Lock the computer */
module.exports = () => require('child_process').execSync('rundll32.exe user32.dll, LockWorkStation')