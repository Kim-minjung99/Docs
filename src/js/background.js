console.log("background.js ready");
// background.js

chrome.runtime.onConnect.addListener((port) => {
    if(port.name === 'DOCS-SIDEPANEL-PORT') { 
        console.log("port name", port.name);
        port.onDisconnect.addListener(() => { 

            // var isClosed = alert("정말로 패널을 닫으시겠어요? \n닫은 이후 정보가 남아있지 않아요.");
            // if(!!isClosed){
            //     // port.disconnect();
            //     console.log("sidePanel closed");
            // } 
        }); 
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DRAG_DATA") {
        console.log("background.js 가 수신받은 메세지", message.payload);

        sendResponse({status: "success"});

        return true;
    } else {
        alert("드래그를 다시 시도해주세요.");
    }
});