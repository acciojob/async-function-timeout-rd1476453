// Convert setTimeout into a Promise
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
    const text = document.getElementById("text").value;
    const delay = Number(document.getElementById("delay").value);
    const output = document.getElementById("output");

    // Clear previous output
    output.textContent = "";

    // Input validation
    if (!text || !delay) {
        output.textContent = "Please enter both message and delay!";
        return;
    }

    // Wait for given time
    await wait(delay);

    // Show message
    output.textContent = text;
}

// Attach event to button
document.getElementById("btn").addEventListener("click", showMessage);
