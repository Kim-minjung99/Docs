$(function(){
    init();
});

chrome.runtime.connect({ name: "DOCS-SIDEPANEL-PORT" });    // PORT

const init = () => {
    eventListener();
}

const eventListener = () => {
    
    $("#draw-container").on("dragover", (e) => {
        e.dataTransfer = e.originalEvent.dataTransfer;
        e.preventDefault();
    });

    $("#draw-container").on("drop", (e) => {
        e.dataTransfer = e.originalEvent.dataTransfer;
        console.log("drop 이벤트 리스너의 데이터::", e.dataTransfer.getData("data")); // 데이터를 가져옵니다.
    });

    // Listener for messages from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "DRAG_DATA") {
            console.log("index.js 수신된 데이터", message.payload);

            sendResponse({status: "success"});

            // Update the DevTools UI
            const panelElement = $("#draw-container");
            if (panelElement) {
                panelElement.text = JSON.stringify(message.payload, null, 2);
            }
            return true;
        }
    });
}