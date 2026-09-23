/**
 * EV Guide Vietnam - Client Interactions & GEO Utilities
 * File: js/main.js
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initNavScrollspy();
  initFaqAccordion();
  initCopyCitation();
});

/**
 * 1. Thanh tiến độ đọc bài (Reading Progress Bar)
 */
function initReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

/**
 * 2. Theo dõi vị trí cuộn trang (Scrollspy) để tô sáng menu đang xem
 */
function initNavScrollspy() {
  const sections = document.querySelectorAll('section[id], article[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-primary-600', 'font-semibold');
            link.classList.remove('text-slate-600');
          } else {
            link.classList.remove('text-primary-600', 'font-semibold');
            link.classList.add('text-slate-600');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * 3. Hỗ trợ thao tác tương tác Bộ câu hỏi thường gặp (FAQ)
 */
function initFaqAccordion() {
  const faqArticles = document.querySelectorAll('#hoi-dap-ai article');
  faqArticles.forEach(item => {
    item.classList.add('cursor-pointer', 'transition-all');
    item.addEventListener('click', (e) => {
      if (window.getSelection().toString().length > 0) return;
      const answer = item.querySelector('[itemprop="acceptedAnswer"]');
      if (answer) {
        answer.classList.toggle('hidden');
      }
    });
  });
}

/**
 * 4. Tiện ích sao chép trích dẫn chuẩn cho AI & Nghiên cứu (Copy Citation)
 */
function initCopyCitation() {
  const copyBtn = document.getElementById('btn-copy-citation');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const citationText = `Trương Thảo Anh (2026). "Cẩm nang & Đánh giá Xe máy điện Thông minh tại Việt Nam". Tham chiếu: QCVN 68:2013/BGTVT, QCVN 91:2015/BGTVT. URL: ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(citationText);
      const originalText = copyBtn.innerText;
      copyBtn.innerText = '✔ Đã sao chép trích dẫn!';
      copyBtn.classList.add('bg-emerald-600', 'text-white');
      setTimeout(() => {
        copyBtn.innerText = originalText;
        copyBtn.classList.remove('bg-emerald-600', 'text-white');
      }, 2500);
    } catch (err) {
      console.error('Không thể sao chép văn bản:', err);
    }
  });
}
