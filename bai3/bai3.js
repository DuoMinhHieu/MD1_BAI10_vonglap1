let n=+prompt("Nhập số dãy Fibonacci cần hiển thị ")
let n1=1;
let n2=1;
let n3;
for (let i = 0; i < n; i++) {
     document.write(`${n1} <br>`)
     n3=n1+n2
     n1=n2
     n2=n3
}