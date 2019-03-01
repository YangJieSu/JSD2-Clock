// 取 DOM 元素
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');
function getDeg() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  // 每1小時，時針移動一格，因此每1小時時針轉動360 / 12度。
  // 每1分鐘，分針移動一格，因此每1分鐘分針轉動360 / 60度。
  // 每1秒鐘，秒針移動一格，因此每1秒鐘秒針轉動360 / 60度。
  const hourDeg = hour * 360 / 12 + min * 360 / (12 * 60);
  const minDeg = min * 360 / 60 + sec * 360 / (60 * 60);
  const secDeg = sec * 360 / 60;
  return [hourDeg, minDeg, secDeg];
}
function setClock() {
  const timeDeg = getDeg();
  hourHand.style.transform = `translateY(-85%) rotate(${-90 + timeDeg[0]}deg)`;
  minHand.style.transform = `translate(-50%,-100%) rotate(${0 + timeDeg[1]}deg)`;
  secHand.style.transform = `translateX(-50%) rotate(${0 + timeDeg[2]}deg)`;
}

setInterval(setClock, 1000);
