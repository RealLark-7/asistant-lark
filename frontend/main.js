const commandInput = document.getElementById("command-input");
const output = document.getElementById("output");

commandInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const command = commandInput.value.trim();
    commandInput.value = "";
    addOutput(`> ${command}`);
    const response = await processCommand(command);
    if (response) addOutput(response);
  }
});

function addOutput(text) {
  const line = document.createElement("div");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

async function processCommand(command) {
  try {
    const response = await fetch(`http://localhost:8000/api?command=${command}`);
    if (response.ok) {
      const data = await response.json();
      return data.result;
    } else {
      return "Komut işlenemedi.";
    }
  } catch (error) {
    return "Sunucuya bağlanılamadı.";
  }
}