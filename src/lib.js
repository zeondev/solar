var infoColor = "#576FD0";

function solog(message, title = "info") {
    console.log(`%c[${title}] %c${message}`, `color: ${infoColor};`, 'color: unset;');
}

function sogroup(name, message) {
    console.group(`%c[${name}] %c${message}`, `color: ${infoColor};font-weight:200;font-size:12px;`, 'color: unset;font-weight:200;font-size:12px;');
}

function sogroupend() {
    console.groupEnd();
}

module.exports = { solog, sogroup, sogroupend };