var num=prompt("숫자 입력하세요");
var i=1;

while(i<num)
{
    document.write(i+", ")
    i*=3;
}
res=num/3;
document.write("<p id="emp">"+"num+"까지 3의 배수의 개수 : "+res+"</p>);