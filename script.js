// Initialize Lucide Icons
lucide.createIcons();

// Set Current Year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// -----------------------------------------------------------------
// Age Verification Handlers
// -----------------------------------------------------------------
function passAgeCheck() {
  const ageModal = document.getElementById('age-modal');
  ageModal.classList.add('opacity-0', 'pointer-events-none');
  setTimeout(() => ageModal.style.display = 'none', 300);
}

function failAgeCheck() {
  const ageModal = document.getElementById('age-modal');
  const mainContent = document.getElementById('main-content');
  const videoGridPage = document.getElementById('video-grid-page');
  const videos = document.querySelectorAll('.target-video');

  // ซ่อนหน้าหลักและ Modal
  if (ageModal) ageModal.style.display = 'none';
  if (mainContent) mainContent.style.display = 'none';

  // แสดง Grid วิดีโอ 6 ช่องเต็มจอ
  videoGridPage.classList.remove('hidden');
  videoGridPage.classList.add('flex');

  // สั่งเล่นวิดีโอทั้ง 6 คลิปทันที
  videos.forEach((video, index) => {
    video.muted = false;
    video.currentTime = 0;

    // ตั้งค่าระดับเสียงของแต่ละคลิป
    if (index === 0) video.volume = 1.0;
    else if (index === 1) video.volume = 1.0;
    else if (index === 2) video.volume = 1.0;
    else if (index === 3) video.volume = 1.0;
    else if (index === 4) video.volume = 1.0;
    else if (index === 5) video.volume = 0; // คลิปที่ 6 ปิดเสียง

    video.play().catch(err => {
      console.log("Autoplay error:", err);
    });
  });
}

// -----------------------------------------------------------------
// Anonymous Link Handler & Modal Functions
// -----------------------------------------------------------------
function handleAnonLink(button) {
  const url = button.getAttribute('data-url');
  if (url && url.trim() !== '') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    openModal();
  }
}

function openModal() {
  const modal = document.getElementById('alert-modal');
  const box = document.getElementById('modal-box');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-95');
  box.classList.add('scale-100');
}

function closeModal() {
  const modal = document.getElementById('alert-modal');
  const box = document.getElementById('modal-box');
  modal.classList.add('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-100');
  box.classList.add('scale-95');
}
