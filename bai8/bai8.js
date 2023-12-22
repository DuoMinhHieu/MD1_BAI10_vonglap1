function startGame() {
    let num = +prompt("nhập số khoảng muốn đoán");
    for (let i = 0; i < 3; i++) {
        let numRandom = Math.floor(Math.random()*num);
        let numInput = +prompt("Nhập số bạn đoán");
        if (numInput==numRandom) {
            alert("Bạn đã đoán đúng");
            break;
        } else {
            alert("Bạn đoán sai");
        }
        if (i===2) {
            alert("hết số lần đoán");
        }
    }
}


