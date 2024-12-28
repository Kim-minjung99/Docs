$(function(){
    init();
});

const init = () => {
    eventListener();
}

const eventListener = () => {
    $("#draw-container").on("dragover", (e) => {
        e.preventDefault();
        console.log("드래그 요소가 이 영역에 위에 계속 위치하면 발생하는 이벤트");
    });

    $("#draw-container").on("drop", function(){
        e.preventDefault();
        console.log("drop");
        console.log(e.dataTransfer); // 데이터를 가져옵니다.
    });
}