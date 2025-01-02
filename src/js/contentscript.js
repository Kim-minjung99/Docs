$(function(){
    console.log("jquery::",jQuery);
    init();
});

const elementList = [];
const port = chrome.runtime.connect({ name: "DOCS-PORT" });    // PORT

const init = () => {
    createDraggableElement();
    eventListener();
}

const createDraggableElement = () => {
    // create draggable content
    const elements = $("span");
    elements.each((idx, ele)=>{
        console.log("ele::", ele);
        $(ele).attr('draggable', 'true');
    })
}

const eventListener = () => {
    // this scope
    $('[draggable="true"]').on("dragstart", function (e) {
        // container add
        const dataToSend = { type: "DRAG_DATA", payload: this };
        // Send message to background script
        chrome.runtime.sendMessage(dataToSend, (response)=>{
            console.log("contentScript response:::", response);
        });

    });

    // chrome.runtime.onConnect.addListener((port) => {
    //     console.log(`Port connected: ${port.name}`);
    
    //     port.onMessage.addListener((msg) => {
    //         console.log(`Message received from ${port.name}:`, msg);
    //     });
    
    //     port.onDisconnect.addListener(() => {
    //         console.log(`Port disconnected: ${port.name}`);
    //     });
    // });
    
}

