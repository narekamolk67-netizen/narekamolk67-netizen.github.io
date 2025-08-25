// ดึง navbar จาก DOM
const navbar = document.getElementById('navbar');

// ติดตามตำแหน่งการเลื่อนหน้าจอ
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // หากเลื่อนลง ซ่อน navbar
    navbar.classList.add('hidden');
  } else {
    // หากเลื่อนขึ้น แสดง navbar
    navbar.classList.remove('hidden');
  }

  // อัปเดตตำแหน่งการเลื่อนหน้าจอ
  lastScrollTop = scrollTop;
});