console.log("background.js ready");
// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DRAG_DATA") {
        // debugger;
        console.log("background.js 가 수신받은 메세지", message.payload);

        sendResponse({status: "success"});

        return true;
    } else {
        alert("드래그를 다시 시도해주세요.");
    }
});