<?php include 'header.php'; ?>

<div class="page-header">
    <div class="container">
        <h1>فروشگاه تخصصی آورا واچ</h1>
        <p>مجموعه‌ای از برترین ساعت‌های مچی اورجینال، هوشمند و لوکس جهانی</p>
    </div>
</div>

<main class="container shop-layout">
    <aside class="shop-sidebar">
        <div class="filter-box">
            <h3>دسته‌بندی‌ها</h3>
            <div class="custom-filter-group">
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="smart" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">ساعت هوشمند</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="classic" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">کلاسیک مردانه</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="women" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">عقربه‌ای زنانه</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="sport" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">اسپرت و ورزشی</span>
                </label>
            </div>
        </div>

        <div class="filter-box">
            <h3>محدوده قیمت (تومان)</h3>
            <div class="price-inputs">
                <input type="number" id="minPriceInput" placeholder="از ۵,۰۰۰,۰۰۰" onkeyup="applyAllFilters()">
                <input type="number" id="maxPriceInput" placeholder="تا ۳۰۰,۰۰۰,۰۰۰" onkeyup="applyAllFilters()">
            </div>
            <button class="btn-filter-apply" onclick="applyAllFilters()">اعمال فیلتر قیمت</button>
        </div>

        <div class="filter-box">
            <h3>برندهای برتر</h3>
            <div class="custom-filter-group">
                <label class="custom-checkbox">
                    <input type="checkbox" class="brand-filter" value="rolex" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">رولکس (Rolex)</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="brand-filter" value="citizen" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">سیتیزن (Citizen)</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="brand-filter" value="casio" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">کاسیو (Casio)</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="brand-filter" value="apple" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">اپل (Apple)</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="brand-filter" value="samsung" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span class="label-text">سامسونگ (Samsung)</span>
                </label>
            </div>
        </div>
    </aside>

    <section class="shop-content">
        <div class="shop-toolbar">
            <span id="productCountText">نمایش ۸ محصول</span>
            <div class="sort-select">
                <label>مرتب‌سازی:</label>
                <select id="sortSelect" onchange="sortProducts()">
                    <option value="default">پیش‌فرض</option>
                    <option value="price-asc">ارزان‌ترین</option>
                    <option value="price-desc">گران‌ترین</option>
                </select>
            </div>
        </div>

        <div class="products-grid" id="productsContainer">
            <div class="product-card" data-title="ساعت مچی عقربه‌ای رولکس ساب‌مارینر" data-brand="rolex" data-cat="classic" data-price="212500000" onclick="openProductModal('رولکس ساب‌مارینر مشکی', '۲۱۲,۵۰۰,۰۰۰ تومان', 'assets/images/products/ex-img1.jpeg', 'ساعت مچی لوکس و آیکونیک رولکس با بدنه استیل ضد زنگ، مقاوم در برابر آب تا عمق ۳۰۰ متر و موتور اتوماتیک با رزرو شارژ ۷۰ ساعته.')">
                <div class="card-img">
                    <span class="discount-badge">-۱۵%</span>
                    <img src="assets/images/products/ex-img1.jpeg" alt="Watch 1">
                </div>
                <div class="card-body">
                    <span class="brand-name">Rolex</span>
                    <h4>ساعت مچی عقربه‌ای رولکس ساب‌مارینر</h4>
                    <div class="price-wrap">
                        <del>۲۵۰,۰۰۰,۰۰۰</del>
                        <ins>۲۱۲,۵۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="ساعت کرونوگراف مردانه اکودرایو" data-brand="citizen" data-cat="classic" data-price="18500000" onclick="openProductModal('سیتیزن اکودرایو', '۱۸,۵۰۰,۰۰۰ تومان', 'assets/images/products/ex-img2.jpeg', 'ساعت کرونوگراف مردانه سیتیزن مجهز به تکنولوژی شارژ خورشیدی اکودرایو بدون نیاز به تعویض باتری.')">
                <div class="card-img">
                    <span class="new-badge">جدید</span>
                    <img src="assets/images/products/ex-img2.jpeg" alt="Watch 2">
                </div>
                <div class="card-body">
                    <span class="brand-name">Citizen</span>
                    <h4>ساعت کرونوگراف مردانه اکودرایو</h4>
                    <div class="price-wrap">
                        <ins>۱۸,۵۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="ساعت جی‌شاک مدل GA-2100 مشکی" data-brand="casio" data-cat="sport" data-price="6200000" onclick="openProductModal('کاسیو جی‌شاک GA-2100', '۶,۲۰۰,۰۰۰ تومان', 'assets/images/products/ex-img3.jpeg', 'ساعت مقاوم و جان‌سخت جی‌شاک با طراحی مدرن هشت‌ضلعی، ساختار رزین تقویت شده با کربن.')">
                <div class="card-img">
                    <img src="assets/images/products/ex-img3.jpeg" alt="Watch 3">
                </div>
                <div class="card-body">
                    <span class="brand-name">Casio</span>
                    <h4>ساعت جی‌شاک مدل GA-2100 مشکی</h4>
                    <div class="price-wrap">
                        <ins>۶,۲۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="اپل واچ سری ۹ سایز ۴۵ میلی‌متری" data-brand="apple" data-cat="smart" data-price="19800000" onclick="openProductModal('اپل واچ سری ۹ سایز ۴۵', '۱۹,۸۰۰,۰۰۰ تومان', 'assets/images/products/ex-img4.jpeg', 'ساعت هوشمند پرچمدار اپل مجهز به پردازنده S9، صفحه نمایش فوق‌العاده روشن و سنسورهای پیشرفته سلامت.')">
                <div class="card-img">
                    <span class="discount-badge">-۱۰%</span>
                    <img src="assets/images/products/ex-img4.jpeg" alt="Watch 4">
                </div>
                <div class="card-body">
                    <span class="brand-name">Apple</span>
                    <h4>اپل واچ سری ۹ سایز ۴۵ میلی‌متری</h4>
                    <div class="price-wrap">
                        <del>۲۲,۰۰۰,۰۰۰</del>
                        <ins>۱۹,۸۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="ساعت رولکس دیت‌جاست طلایی" data-brand="rolex" data-cat="classic" data-price="185000000" onclick="openProductModal('رولکس کلاسیک دیت‌جاست', '۱۸۵,۰۰۰,۰۰۰ تومان', 'assets/images/banners/hero.jpeg', 'شاهکار زیبایی و اصالت با زهی شیاردار و بند جوبلی، گزینه‌ای بی‌نظیر برای استایل‌های رسمی.')">
                <div class="card-img">
                    <img src="assets/images/banners/hero.jpeg" alt="Watch 5">
                </div>
                <div class="card-body">
                    <span class="brand-name">Rolex</span>
                    <h4>ساعت رولکس دیت‌جاست طلایی</h4>
                    <div class="price-wrap">
                        <ins>۱۸۵,۰۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="سامسونگ گلکسی واچ ۶ کلاسیک" data-brand="samsung" data-cat="smart" data-price="13400000" onclick="openProductModal('سامسونگ گلکسی واچ ۶', '۱۳,۴۰۰,۰۰۰ تومان', 'assets/images/banners/hooshmands.jpeg', 'ساعت هوشمند سامسونگ با حاشیه چرخشی هوشمند، آنالیز دقیق ترکیب بدنی و پایش پیشرفته خواب.')">
                <div class="card-img">
                    <span class="new-badge">ویژه</span>
                    <img src="assets/images/banners/hooshmands.jpeg" alt="Watch 6">
                </div>
                <div class="card-body">
                    <span class="brand-name">Samsung</span>
                    <h4>سامسونگ گلکسی واچ ۶ کلاسیک</h4>
                    <div class="price-wrap">
                        <ins>۱۳,۴۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="ساعت مچی رومانسون مدل کلاسیک" data-brand="romanson" data-cat="women" data-price="9500000" onclick="openProductModal('ساعت کلاسیک رومانسون', '۹,۵۰۰,۰۰۰ تومان', 'assets/images/banners/oldmoney.jpeg', 'طراحی اصیل سوئیسی با صفحه مینیمال و شیشه کریستال ضد خش، مناسب برای استایل‌های مدرن.')">
                <div class="card-img">
                    <img src="assets/images/banners/oldmoney.jpeg" alt="Watch 7">
                </div>
                <div class="card-body">
                    <span class="brand-name">Romanson</span>
                    <h4>ساعت مچی رومانسون مدل کلاسیک</h4>
                    <div class="price-wrap">
                        <ins>۹,۵۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="ساعت مچی بند چرمی سوئیسی" data-brand="tissot" data-cat="classic" data-price="16200000" onclick="openProductModal('ساعت اسپرت چرمی لوکس', '۱۶,۲۰۰,۰۰۰ تومان', 'assets/images/categories/clasic.jpeg', 'ساعت عقربه‌ای چرمی با موتور اتوماتیک نمایان (اسکلتون) و مقاومت بالا در برابر نفوذ آب.')">
                <div class="card-img">
                    <img src="assets/images/categories/clasic.jpeg" alt="Watch 8">
                </div>
                <div class="card-body">
                    <span class="brand-name">Tissot</span>
                    <h4>ساعت مچی بند چرمی سوئیسی</h4>
                    <div class="price-wrap">
                        <ins>۱۶,۲۰۰,۰۰۰ <span>تومان</span></ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>
        </div>
    </section>
</main>

<div class="product-modal-overlay" id="productModal">
    <div class="product-modal-card">
        <button class="close-modal-btn" onclick="closeProductModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div class="modal-grid">
            <div class="modal-gallery">
                <div class="modal-main-img">
                    <img id="modalImg" src="" alt="Product Main Image">
                </div>
                <div class="modal-thumbs">
                    <img id="thumb1" src="" class="active" onclick="switchModalImage(this.src, this)">
                    <img id="thumb2" src="assets/images/banners/hero.jpeg" onclick="switchModalImage(this.src, this)">
                    <img id="thumb3" src="assets/images/categories/clasic.jpeg" onclick="switchModalImage(this.src, this)">
                </div>
            </div>
            <div class="modal-info">
                <div class="modal-badge-wrapper">
                    <span class="modal-tag">اصالت تضمین شده</span>
                    <span class="modal-tag gold">گارانتی ۲۴ ماهه آورا</span>
                </div>
                <h2 id="modalTitle">نام محصول</h2>
                <div class="modal-price-wrap">
                    <span class="modal-price" id="modalPrice">۰ تومان</span>
                </div>
                <p class="modal-desc" id="modalDesc">توضیحات کامل محصول در این بخش قرار می‌گیرد.</p>
                
                <div class="modal-features">
                    <div class="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>موتور اتوماتیک سوئیسی</span>
                    </div>
                    <div class="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        <span>مقاومت ۳۰۰ متر در آب</span>
                    </div>
                </div>

                <div class="modal-actions">
                    <div class="quantity-box">
                        <button onclick="decrementQty()">-</button>
                        <input type="text" id="productQty" value="1" readonly>
                        <button onclick="incrementQty()">+</button>
                    </div>
                    <button class="btn-primary-modal" onclick="addToCartSuccess()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>