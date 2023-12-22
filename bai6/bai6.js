let num= +prompt("nhap so bat dau");
let count = +prompt("so luong");
let i = 1;
let total = 0;
while (i<= count) {
    if (num%7===0) {
        total = total+num;
        i++;
    }
    num+=1;

}
document.write(total);
