let n1=1;
let n2=1;
let n3;
let total=0;
for (let i = 0; i < 20; i++) {
    document.write(`số Fibonacci thứ ${i+1} là ${n1} <br>`)
    n3 = n1 + n2
    n1 = n2
    n2 = n3
    total +=n2-n1
}
document.write(" Tổng của các số là " +total)