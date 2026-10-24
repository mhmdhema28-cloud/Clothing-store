// 1. إخفاء شاشة الدخلة تلقائياً
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splashLoader');
        if (splash) splash.classList.add('fade-out');
    }, 2800);
});

// 2. تبديل لون ثيم النيون (أزرق - أحمر)
const themeToggleBtn = document.getElementById('themeToggleBtn');
const bodyElement = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('blue-theme')) {
            bodyElement.classList.remove('blue-theme');
            bodyElement.classList.add('red-theme');
        } else {
            bodyElement.classList.remove('red-theme');
            bodyElement.classList.add('blue-theme');
        }
    });
}

// 3. تشغيل العداد التنازلي لسكشن الخصومات
let totalSeconds = (8 * 3600) + (45 * 60) + 30;

function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    if (hoursElem && minutesElem && secondsElem) {
        hoursElem.textContent = hours < 10 ? '0' + hours : hours;
        minutesElem.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElem.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        totalSeconds = (8 * 3600);
    }
}
setInterval(updateTimer, 1000);

// 4. فلترة المنتجات حسب القسم
const tabBtns = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// 5. فتح وإغلاق النافذة المنبثقة التفاصيل (Modal) عند الضغط على الصورة أو زر التفاصيل
productCards.forEach(card => {
    const imgBox = card.querySelector('.product-img-box');
    const detailsBtn = card.querySelector('.details-btn');

    const openModal = () => {
        const title = card.querySelector('.product-name').textContent;
        const price = card.querySelector('.product-price').textContent;
        const imgSrc = card.querySelector('img').src;

        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalPrice').textContent = price;
        document.getElementById('modalImg').src = imgSrc;
        document.getElementById('productModal').classList.add('active');
    };

    if (imgBox) imgBox.addEventListener('click', openModal);
    if (detailsBtn) detailsBtn.addEventListener('click', openModal);
});

// إغلاق النافذة
document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('active');
});

// 6. قائمة الأسئلة الشائعة (FAQ Accordion)
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});