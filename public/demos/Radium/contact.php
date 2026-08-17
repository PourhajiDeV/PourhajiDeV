<?php include 'header.php'; ?>

<section class="contact-hero">
    <div class="container">
        <span class="hero-tag">همراه شما هستیم</span>
        <h1>ارتباط با تیم رادیوم</h1>
        <p>جهت مشاوره انتخاب سایز، پیگیری سفارش‌ها یا همکاری با ما در ارتباط باشید.</p>
    </div>
</section>

<main class="container contact-container">
    <div class="contact-grid-modern">
        
        <div class="contact-panel-info">
            <div class="status-indicator">
                <span class="status-dot"></span>
                <span>پشتیبانی هم‌اکنون آنلاین و پاسخگو است</span>
            </div>

            <h2>اطلاعات تماس و شوروم</h2>
            <p>می‌توانید جهت تست حضوری لباس‌ها یا تحویل اکسپرس به شوروم مرکزی رادیوم مراجعه نمایید.</p>

            <div class="contact-cards-list">
                <div class="c-card">
                    <div class="c-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                        <strong>آدرس شوروم مرکزی</strong>
                        <span>تهران، سعادت‌آباد، مجتمع رویال، طبقه اول، واحد ۴</span>
                    </div>
                </div>

                <div class="c-card">
                    <div class="c-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                        <strong>شماره تماس مستقیم</strong>
                        <span>۰۲۱-۲۲۲۲۳۳۳۳ (شنبه تا پنج‌شنبه ۱۰ الی ۲۲)</span>
                    </div>
                </div>

                <div class="c-card">
                    <div class="c-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                        <strong>ایمیل رسمی و پیگیری</strong>
                        <span>support@radiumboutique.ir</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-panel-form">
            <form action="#" method="POST" onsubmit="event.preventDefault(); alert('پیام شما دریافت شد. در کمتر از ۲ ساعت با شما تماس می‌گیریم.');">
                <h3>ارسال پیام سریع</h3>
                
                <div class="topic-selector">
                    <label class="topic-chip">
                        <input type="radio" name="topic" checked>
                        <span>مشاوره ست و سایز</span>
                    </label>
                    <label class="topic-chip">
                        <input type="radio" name="topic">
                        <span>پیگیری سفارش</span>
                    </label>
                    <label class="topic-chip">
                        <input type="radio" name="topic">
                        <span>پیشنهاد و انتقاد</span>
                    </label>
                </div>

                <div class="form-row">
                    <div class="form-field">
                        <label>نام و نام خانوادگی</label>
                        <input type="text" required placeholder="مثال: علی محمدی">
                    </div>
                    <div class="form-field">
                        <label>شماره تماس</label>
                        <input type="tel" required placeholder="۰۹۱۲۰۰۰۰۰۰۰">
                    </div>
                </div>

                <div class="form-field">
                    <label>متن پیام شما</label>
                    <textarea required placeholder="پیام یا سوال خود را اینجا بنویسید..."></textarea>
                </div>

                <button type="submit" class="btn-solid-glow" style="width: 100%; justify-content: center;">ثبت و ارسال پیام</button>
            </form>
        </div>

    </div>
</main>

<?php include 'footer.php'; ?>