let nhietDo;
for (let i = 0; i < 3; i++) {
    let nhietDohaha = prompt("Nhập nhiệt độ hiện tại:");
    nhietDo = parseFloat(nhietDohaha);

    if (nhietDo > 100) {
        let thongBao = confirm("Nhiệt độ quá cao, bạn cần giảm nhiệt độ");
        if (thongBao) {
            break;
        }
    } else if (nhietDo < 20) {
        let thongBao = confirm("Nhiệt độ quá thấp, bạn cần tăng nhiệt độ");
        if (thongBao) {
            break;
        }
    } else {
        break;
    }
}