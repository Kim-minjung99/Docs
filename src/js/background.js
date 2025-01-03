console.log("background.js ready");
// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DRAG_DATA") {
        debugger;
        console.log("Received data from content-script:", message.payload);

        sendResponse({status: "success"});

        return true;

    }
});