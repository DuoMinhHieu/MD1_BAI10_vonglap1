let n=+prompt("Nhập số dãy Fibonacci cần hiển thị ")
let n1=1;
let n2=1;
let n3;
for (let i = 0; i < n; i++) {
    n3=n1+n2
    n1=n2
    n2=n3
    if (n1%5===0) {
        document.write(`Số đầu tiên chia hết cho 5 là ${n1} <br>`)
        break
    }
}