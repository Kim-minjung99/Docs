$(function(){
    console.log("jquery::",jQuery);
    init();
});

const elementList = [];

const init = () => {
    createDraggableElement();
    eventListener();
}

const createDraggableElement = () => {
    // create draggable content
    const elements = $("div");
    elements.each((idx, ele)=>{
        console.log("ele::", ele);
        $(ele).attr('draggable', 'true');
    })
}

const eventListener = () => {
    // container2.addEventListener("dragover", (e) => {
    //     console("드래그 요소가 이 영역에 위에 계속 위치하면 발생하는 이벤트");
        
    //   });
}

