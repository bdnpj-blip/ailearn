// 移动端菜单切换
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'translateY(0)';
        }, 50);
    } else {
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            navLinks.style.opacity = '';
            navLinks.style.transform = '';
        }, 300);
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
            navLinks.style.opacity = '';
            navLinks.style.transform = '';
        }
    });
});

// 付费弹窗控制
const premiumModal = document.getElementById('premiumModal');
const upgradeBtns = document.querySelectorAll('#upgradeBtn, #premiumUpgradeBtn');
const closeModal = document.getElementById('closeModal');

// 打开弹窗
upgradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        premiumModal.style.display = 'flex';
        premiumModal.style.opacity = '0';
        premiumModal.querySelector('.modal-content').style.transform = 'scale(0.9)';
        setTimeout(() => {
            premiumModal.style.opacity = '1';
            premiumModal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 50);
    });
});

// 关闭弹窗
closeModal.addEventListener('click', () => {
    premiumModal.style.opacity = '0';
    premiumModal.querySelector('.modal-content').style.transform = 'scale(0.9)';
    setTimeout(() => {
        premiumModal.style.display = 'none';
        premiumModal.style.opacity = '';
        premiumModal.querySelector('.modal-content').style.transform = '';
    }, 300);
});

// 点击弹窗外关闭
window.addEventListener('click', (e) => {
    if (e.target === premiumModal) {
        premiumModal.style.opacity = '0';
        premiumModal.querySelector('.modal-content').style.transform = 'scale(0.9)';
        setTimeout(() => {
            premiumModal.style.display = 'none';
            premiumModal.style.opacity = '';
            premiumModal.querySelector('.modal-content').style.transform = '';
        }, 300);
    }
});

// 联系表单提交
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // 苹果风格轻提示
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';
    alertDiv.style.bottom = '40px';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.backgroundColor = 'var(--apple-dark-gray)';
    alertDiv.style.color = 'white';
    alertDiv.style.padding = '12px 24px';
    alertDiv.style.borderRadius = '9999px';
    alertDiv.style.fontSize = '14px';
    alertDiv.style.zIndex = '9999';
    alertDiv.textContent = 'Thank you for your message!';
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        alertDiv.style.transform = 'translateX(-50%) translateY(20px)';
        alertDiv.style.transition = 'all 0.3s';
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 300);
    }, 3000);
    
    contactForm.reset();
});