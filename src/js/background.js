console.log("background.js");

// background.js

// chrome.runtime.onConnect.addListener((port) => {
    
//     console.log(`Port connected: ${port.name}`);

//     debugger;

//     port.onMessage.addListener((msg) => {
//         console.log(`Message received from ${port.name}:`, msg);

//         if (msg.type === "DRAG_DATA") {
//             console.log("Received data from content-script:", msg.payload);
    
//             // Forward the message to DevTools Panel
//             chrome.runtime.sendMessage({ type: "DATA_TO_DEVTOOLS", payload: msg.payload });
//         }
        
//     });

//     port.onDisconnect.addListener(() => {
//         console.log(`Port disconnected: ${port.name}`);
//     });
// });

// Listener for messages from content-script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DRAG_DATA") {
        console.log("Received data from content-script:", message.payload);

        sendResponse({response: "success responsed"});

        // Forward the message to DevTools Panel
        // chrome.runtime.sendMessage({ type: "DATA_TO_DEVTOOLS", payload: message.payload });
    }
});