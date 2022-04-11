var num=prompt("팩토리얼 숫자 입력하세요");
var res=1;
document.write(num+"! = ");
while(num>0)
{
    res*=num;
    num--;
}
document.write(res);