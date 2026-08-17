<?php include 'header.php'; ?>

<div class="shop-banner-header">
    <div class="container">
        <h1>سبد خرید شما</h1>
        <p>بررسی و نهایی‌سازی سفارشات انتخاب شده</p>
    </div>
</div>

<main class="container cart-layout">
    <section class="cart-items">
        <div class="cart-table-card">
            
            <div class="cart-item">
                <div class="cart-product-info">
                    <img src="assets/images/nikeairforce.jpeg" alt="Sneakers">
                    <div>
                        <h4>کتونی نایک ایرفورس وان</h4>
                        <span>سایز: ۴۲ | رنگ: سفید</span>
                    </div>
                </div>
                <div class="quantity-box">
                    <button onclick="decrementQty()">-</button>
                    <input type="text" value="1" readonly>
                    <button onclick="incrementQty()">+</button>
                </div>
                <div class="cart-price">۳,۲۰۰,۰۰۰ تومان</div>
                <button class="cart-delete-btn" title="حذف کالا">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>

            <div class="cart-item">
                <div class="cart-product-info">
                    <img src="assets/images/white-tshirt.jpeg" alt="Tshirt">
                    <div>
                        <h4>تیشرت بیسیک سفید نخی</h4>
                        <span>سایز: L | رنگ: شیری</span>
                    </div>
                </div>
                <div class="quantity-box">
                    <button onclick="decrementQty()">-</button>
                    <input type="text" value="1" readonly>
                    <button onclick="incrementQty()">+</button>
                </div>
                <div class="cart-price">۵۲۰,۰۰۰ تومان</div>
                <button class="cart-delete-btn" title="حذف کالا">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>

        </div>
    </section>

    <aside class="cart-summary">
        <h3>خلاصه فاکتور</h3>
        
        <div class="summary-row">
            <span>مجموع خرید:</span>
            <span>۳,۷۲۰,۰۰۰ تومان</span>
        </div>
        <div class="summary-row highlight">
            <span>ارسال اکسپرس:</span>
            <span>رایگان</span>
        </div>
        
        <div class="coupon-box">
            <input type="text" placeholder="کد تخفیف">
            <button class="btn-filter-apply">اعمال</button>
        </div>

        <div class="total-row">
            <span>مبلغ قابل پرداخت:</span>
            <span>۳,۷۲۰,۰۰۰ تومان</span>
        </div>

        <button class="btn-solid-glow" style="width: 100%; justify-content: center;" onclick="alert('پیش‌فاکتور صادر شد.')">نهایی‌سازی سفارش</button>
    </aside>
</main>

<?php include 'footer.php'; ?>