const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        output.textContent += `\nSOLAR-CMD> ${command}`;
        handleCommand(command);
        input.value = '';
    }
});

function handleCommand(cmd) {
    if (cmd === "help") {
        output.textContent += `\nAvailable commands: help, sysinfo, clock, player, secret, shutdown`;
    } else if (cmd === "sysinfo") {
        output.textContent += `\nSolarOS 3.0X (2009) — Multi-language simulation`;
    } else if (cmd === "shutdown") {
        output.textContent += `\nShutting down...`;
    } else {
        output.textContent += `\nUnknown command: ${cmd}`;
    }
}
