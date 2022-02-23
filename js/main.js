var info = prompt("Alisher sayohatga qancha puling bor so'mda kirit!");
var dollar = 9433.34;
var yevro = 10354.03;

var borish = 500 * dollar;
var mehmonxona = 250 * dollar;
var muzey = 120 * yevro;

x = borish+mehmonxona+muzey;

if (info >= x)
{
    console.log("Oq yo'l, Alisher!");
}
else
{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}