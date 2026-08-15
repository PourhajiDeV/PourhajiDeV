<?php include 'header.php'; ?>

<div class="page-header">
    <div class="container">
        <h1>سبد خرید شما</h1>
        <p>مدیریت و نهایی‌سازی سفارش‌های انتخاب شده</p>
    </div>
</div>

<main class="container">
    <div class="cart-layout">
        <section class="cart-items">
            <div class="cart-table-card">
                <div class="cart-item">
                    <div class="cart-product-info">
                        <img src="assets/images/products/ex-img1.jpeg" alt="Watch">
                        <div>
                            <h4 style="font-size: 0.95rem; color: var(--text-dark); font-weight: 700;">ساعت مچی عقربه‌ای رولکس ساب‌مارینر</h4>
                            <span style="font-size: 0.8rem; color: var(--text-light);">برند: Rolex</span>
                        </div>
                    </div>
                    <div class="quantity-box">
                        <button onclick="decrementQty()">-</button>
                        <input type="text" value="1" readonly>
                        <button onclick="incrementQty()">+</button>
                    </div>
                    <div class="cart-price">۲۱۲,۵۰۰,۰۰۰ تومان</div>
                    <button class="cart-delete-btn" title="حذف کالا">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>

                <div class="cart-item">
                    <div class="cart-product-info">
                        <img src="assets/images/products/ex-img4.jpeg" alt="Watch">
                        <div>
                            <h4 style="font-size: 0.95rem; color: var(--text-dark); font-weight: 700;">اپل واچ سری ۹ سایز ۴۵ میلی‌متری</h4>
                            <span style="font-size: 0.8rem; color: var(--text-light);">برند: Apple</span>
                        </div>
                    </div>
                    <div class="quantity-box">
                        <button onclick="decrementQty()">-</button>
                        <input type="text" value="1" readonly>
                        <button onclick="incrementQty()">+</button>
                    </div>
                    <div class="cart-price">۱۹,۸۰۰,۰۰۰ تومان</div>
                    <button class="cart-delete-btn" title="حذف کالا">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            </div>
        </section>

        <aside class="cart-summary">
            <h3 style="font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 20px; border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; font-weight: 800;">خلاصه فاکتور</h3>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; color: var(--text-gray); font-size: 0.9rem;">
                <span>مجموع قیمت کالاها:</span>
                <span>۲۳۲,۳۰۰,۰۰۰ تومان</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; color: var(--accent-color); font-size: 0.9rem; font-weight: 700;">
                <span>ارسال سفارش:</span>
                <span>رایگان</span>
            </div>
            
            <div style="margin: 20px 0; display: flex; gap: 8px;">
                <input type="text" placeholder="کد تخفیف" style="flex: 1; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-body); font-size: 0.85rem;">
                <button class="btn-filter-apply" style="width: auto; padding: 0 15px;">اعمال</button>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 25px; padding-top: 15px; border-top: 1px solid var(--border-color); font-weight: 900; font-size: 1.05rem; color: var(--primary-dark);">
                <span>مبلغ قابل پرداخت:</span>
                <span style="color: var(--primary-color);">۲۳۲,۳۰۰,۰۰۰ تومان</span>
            </div>

            <button class="btn-primary" style="width: 100%; border: none; cursor: pointer; text-align: center;" onclick="alert('پیش‌فاکتور صادر شد. جهت تکمیل خرید ثبت‌نام کنید.')">ادامه ثبت سفارش</button>
        </aside>
    </div>
</main>

<?php include 'footer.php'; ?>