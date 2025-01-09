$(function(){
    console.log("jquery::",jQuery);
    init();
})

const elementList = [];
var elementNum = 0;

const init = () => {
    createDraggableElement();
    eventListener();
}

const createDraggableElement = () => {
    // create draggable content
    const elements = $("span");
    elements.each((idx, ele)=>{
        // console.log("ele::", ele);
        $(ele).attr('draggable', 'true');
    })
}

// data to base64
const toDataURL = (url) => 
    fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject)=>{
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }));


const eventListener = () => {

    $('[draggable="true"]').on("dragstart", function (e) {

        let sendData = '';

        this.id = `draggedCont${elementNum}`
        elementNum++;

        if($(this).prop('nodeName') === "IMG"){
            sendData = $(this).attr("src");
        }else{
            sendData = $(this).text();
        }
        
        // container add
        const dataToSend = { type: "DRAG_DATA", payload: sendData };
        // Send message to background script
        chrome.runtime.sendMessage(dataToSend, (response)=>{

            console.log("sendMessage");
            
            // error
            if(chrome.runtime.lastError){
                alert("메세지 에러 발생::", chrome.runtime.lastError.message);
                return;
            }

            if(response.status == "success"){
                console.log("contentScript response:::", response);
            }
        });

    });

}

