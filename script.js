const launchTitle = document.getElementById('launch-title');
const launchTime = document.getElementById('launch-time');
const launchTimer = document.getElementById('launch-timer');

// 발사 시간
const LAUNCH_TIME = "February 2 2026, 10:00:00"

launchTime.innerText = LAUNCH_TIME;

const launchDate = new Date(LAUNCH_TIME).getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  let distance = launchDate - now;
  let sign = ''

  // 발사시간이 지난 상태면 멘트 변경
  if (distance < 0) {
    distance = distance * -1;
    launchTitle.innerText = 'Mission Elapsed Time ⏱️';
    sign = '+';
  } else sign = '-'

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  const lMinusString = `T${sign}${d.toString().padStart(2, '0')}D ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  launchTimer.innerText = lMinusString;
}, 1000);