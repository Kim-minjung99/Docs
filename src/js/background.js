console.log("background.js");

// background.js

// Listener for messages from content-script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DATA_FROM_CONTENT") {
        console.log("Received data from content-script:", message.payload);

        // Forward the message to DevTools Panel
        chrome.runtime.sendMessage({ type: "DATA_TO_DEVTOOLS", payload: message.payload });
    }
});