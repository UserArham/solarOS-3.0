// Select terminal elements
const input = document.getElementById('input');
const output = document.getElementById('output');

// Focus input on click anywhere
document.addEventListener('click', () => input.focus());

// Command history
let history = [];
let historyIndex = -1;

// Handle key events
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        if (!command) return;
        history.push(command);
        historyIndex = history.length;
        output.textContent += `\nSOLAR-CMD> ${command}`;
        handleCommand(command);
        input.value = '';
    } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) historyIndex--;
        input.value = history[historyIndex] || '';
    } else if (e.key === 'ArrowDown') {
        if (historyIndex < history.length - 1) historyIndex++;
        input.value = history[historyIndex] || '';
    }
});

// Handle commands
function handleCommand(cmd) {
    switch(cmd.toLowerCase()) {
        case 'help':
            output.textContent += `
Available commands:
  help       - Show this help screen
  sysinfo    - System information
  clock      - Display real-time clock
  player     - Simulated media player
  secret     - Hidden Easter egg
  shutdown   - Close SolarOS terminal
            `;
            break;

        case 'sysinfo':
            output.textContent += `
SolarOS 3.0 X (2009) — Multi-language simulation
Kernel: SolarKernel 2.7-r5
Memory: 128MB Virtual
UI: Retro Terminal Web Edition
            `;
            break;

        case 'clock':
            runClock();
            break;

        case 'player':
            output.textContent += `\nPlaying 'Retro Tune.mp3'... (simulated)\n`;
            break;

        case 'secret':
            output.textContent += `
🔒 You found the hidden 2009 developer Easter egg!
Try typing: 'shutdown' when ready.
            `;
            break;

        case 'shutdown':
            output.textContent += `\nShutting down SolarOS...\n`;
            input.disabled = true;
            break;

        default:
            output.textContent += `\nUnknown command: ${cmd}`;
    }
}

// Run live clock
function runClock() {
    output.textContent += "\nClock running (Ctrl+click to stop)...\n";
    const clockInterval = setInterval(() => {
        const time = new Date().toLocaleTimeString();
        output.textContent = output.textContent.replace(/Current Time: .*/, `Current Time: ${time}`);
    }, 1000);

    // Stop clock on Ctrl+click
    output.addEventListener('click', function stopClock(e) {
        if (e.ctrlKey) {
            clearInterval(clockInterval);
            output.textContent += "\nClock stopped.\n";
            output.removeEventListener('click', stopClock);
        }
    });
}
