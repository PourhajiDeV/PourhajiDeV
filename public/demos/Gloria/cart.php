<?php include 'header.php'; ?>

<section class="shop-header-banner">
    <div class="container text-center">
        <span class="sub-heading">نهایی‌سازی سفارش</span>
        <h1>سبد روتین پوستی شما</h1>
        <p>ارسال در بسته‌بندی کادویی صورتی به همراه سمپل‌های رایگان گلوریا</p>
    </div>
</section>

<main class="container cart-aesthetic-layout">
    <section class="cart-items-column">
        <div class="cart-card-container">
            
            <div class="cart-item-aesthetic">
                <div class="cart-item-meta">
                    <img src="assets/ex-photo1.jpeg" alt="Serum">
                    <div>
                        <h4>سرم هیالورونیک اسید ۲٪ خالص + B5</h4>
                        <span>حجم: ۳۰ میلی‌لیتر | ساختار: سرم ابریشمی</span>
                    </div>
                </div>
                <div class="qty-pill">
                    <button onclick="decrementQty()">-</button>
                    <input type="text" value="1" readonly>
                    <button onclick="incrementQty()">+</button>
                </div>
                <div class="cart-item-price">۱,۲۵۰,۰۰۰ تومان</div>
                <button class="cart-del-btn" title="حذف از سبد">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>

            <div class="cart-item-aesthetic">
                <div class="cart-item-meta">
                    <img src="assets/ex-photo2.jpeg" alt="Cream">
                    <div>
                        <h4>کرم پپتاید سه‌گانه رفع تیرگی دور چشم</h4>
                        <span>حجم: ۱۵ میلی‌لیتر | ضدپف و روشن‌کننده</span>
                    </div>
                </div>
                <div class="qty-pill">
                    <button onclick="decrementQty()">-</button>
                    <input type="text" value="1" readonly>
                    <button onclick="incrementQty()">+</button>
                </div>
                <div class="cart-item-price">۸۹۰,۰۰۰ تومان</div>
                <button class="cart-del-btn" title="حذف از سبد">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>

        </div>
    </section>

    <aside class="cart-summary-column">
        <div class="summary-aesthetic-card">
            <h3>خلاصه سفارش</h3>
            
            <div class="sum-row">
                <span>مجموع ارزش محصولات:</span>
                <span>۲,۱۴۰,۰۰۰ تومان</span>
            </div>
            <div class="sum-row highlight">
                <span>بسته‌بندی کادویی + سمپل:</span>
                <span>رایگان</span>
            </div>
            <div class="sum-row highlight">
                <span>هزینه ارسال اکسپرس:</span>
                <span>رایگان</span>
            </div>

            <div class="coupon-aesthetic-wrap">
                <input type="text" placeholder="کد تخفیف زیبایی">
                <button class="btn-aesthetic-primary" style="padding: 8px 18px;">اعمال</button>
            </div>

            <div class="total-aesthetic-row">
                <span>مبلغ نهایی قابل پرداخت:</span>
                <span class="total-val">۲,۱۴۰,۰۰۰ تومان</span>
            </div>

            <button class="btn-aesthetic-primary" style="width: 100%; justify-content: center;" onclick="alert('پیش‌فاکتور شما صادر شد. با سپاس از اعتماد به گلوریا.')">
                تکمیل و ثبت نهایی سفارش
            </button>
        </div>
    </aside>
</main>

<?php include 'footer.php'; ?>