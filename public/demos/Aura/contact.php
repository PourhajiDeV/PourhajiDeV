<?php include 'header.php'; ?>

<div class="page-header">
    <div class="container">
        <h1>تماس با ما</h1>
        <p>همواره آماده پاسخگویی به سوالات و مشاوره خرید شما هستیم</p>
    </div>
</div>

<main class="container">
    <div class="contact-grid">
        <div class="contact-info">
            <h3 style="margin-bottom: 25px; color: var(--primary-dark); font-size: 1.3rem; font-weight: 800;">اطلاعات ارتباطی</h3>
            <div class="info-item">
                <div class="info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                    <strong style="display: block; font-size: 0.95rem; color: var(--text-dark);">آدرس دفتر مرکزی:</strong>
                    <p style="color: var(--text-gray); font-size: 0.9rem;">تهران، بلوار میرداماد، مجتمع پایتخت، طبقه دوم</p>
                </div>
            </div>
            <div class="info-item">
                <div class="info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                    <strong style="display: block; font-size: 0.95rem; color: var(--text-dark);">تلفن مشاوره:</strong>
                    <p style="color: var(--text-gray); font-size: 0.9rem;">۰۲۱-۸۸۸۸۸۸۸۸</p>
                </div>
            </div>
            <div class="info-item">
                <div class="info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                    <strong style="display: block; font-size: 0.95rem; color: var(--text-dark);">پست الکترونیک:</strong>
                    <p style="color: var(--text-gray); font-size: 0.9rem;">info@aurawatches.com</p>
                </div>
            </div>
        </div>

        <div class="contact-form">
            <h3 style="margin-bottom: 20px; color: var(--primary-dark); font-size: 1.3rem; font-weight: 800;">ارسال پیام مستقیم</h3>
            <form action="#" method="POST" onsubmit="event.preventDefault(); alert('پیام شما با موفقیت دریافت شد.');">
                <div class="form-group">
                    <label>نام و نام خانوادگی</label>
                    <input type="text" required placeholder="مثال: علی محمدی">
                </div>
                <div class="form-group">
                    <label>شماره تماس</label>
                    <input type="tel" required placeholder="۰۹۱۲۰۰۰۰۰۰۰">
                </div>
                <div class="form-group">
                    <label>متن پیام</label>
                    <textarea required placeholder="پیام یا درخواست مشاوره خود را بنویسید..."></textarea>
                </div>
                <button type="submit" class="btn-primary" style="width: 100%; border: none; cursor: pointer; text-align: center;">ارسال پیام</button>
            </form>
        </div>
    </div>
</main>

<?php include 'footer.php'; ?>