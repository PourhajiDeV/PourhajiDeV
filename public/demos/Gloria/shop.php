<?php include 'header.php'; ?>

<section class="shop-header-banner">
    <div class="container text-center">
        <span class="sub-heading">کالکشن کامل روتین</span>
        <h1>فروشگاه محصولات مراقبتی گلوریا</h1>
        <p>فرمولاسیون‌های پیشرفته بالینی بر پایه بیوتکنولوژی پاک و عصاره‌های ناب گیاهی</p>
    </div>
</section>

<main class="container shop-layout-wrapper">
    <aside class="shop-sidebar-filter">
        <div class="filter-box-aesthetic">
            <h3>دسته‌بندی‌ها</h3>
            <div class="aesthetic-checkbox-group">
                <label class="glam-checkbox">
                    <input type="checkbox" class="cat-filter" value="serum" onchange="applyAllFilters()">
                    <span class="glam-check"></span>
                    <span>سرم‌ها و قطره‌های بالینی</span>
                </label>
                <label class="glam-checkbox">
                    <input type="checkbox" class="cat-filter" value="face" onchange="applyAllFilters()">
                    <span class="glam-check"></span>
                    <span>شوینده و پاک‌کننده صورت</span>
                </label>
                <label class="glam-checkbox">
                    <input type="checkbox" class="cat-filter" value="lip" onchange="applyAllFilters()">
                    <span class="glam-check"></span>
                    <span>بالم و مراقبت لب</span>
                </label>
                <label class="glam-checkbox">
                    <input type="checkbox" class="cat-filter" value="eye" onchange="applyAllFilters()">
                    <span class="glam-check"></span>
                    <span>کرم‌های دور چشم</span>
                </label>
            </div>
        </div>

        <div class="filter-box-aesthetic">
            <h3>محدوده قیمت (تومان)</h3>
            <div class="price-inputs-aesthetic">
                <input type="number" id="minPriceInput" placeholder="از ۲۰۰,۰۰۰" onkeyup="applyAllFilters()">
                <input type="number" id="maxPriceInput" placeholder="تا ۲,۰۰۰,۰۰۰" onkeyup="applyAllFilters()">
            </div>
            <button class="btn-aesthetic-primary" style="width: 100%; justify-content: center;" onclick="applyAllFilters()">اعمال فیلتر</button>
        </div>
    </aside>

    <section class="shop-content-area">
        <div class="shop-toolbar-aesthetic">
            <span id="productCountText">نمایش ۶ محصول درخشش</span>
            <div class="sort-aesthetic">
                <label>مرتب‌سازی:</label>
                <select id="sortSelect" onchange="sortProducts()">
                    <option value="default">پیش‌فرض</option>
                    <option value="price-asc">ارزان‌ترین</option>
                    <option value="price-desc">گران‌ترین</option>
                </select>
            </div>
        </div>

        <div class="aesthetic-product-grid" id="productsContainer">
            
            <div class="product-glam-card" data-title="سرم هیالورونیک اسید ۲٪ خالص" data-cat="serum" data-price="1250000">
                <div class="p-media">
                    <span class="p-badge best">پرفروش‌ترین</span>
                    <img src="assets/ex-photo1.jpeg" alt="Serum">
                    <button class="quick-bag-btn" onclick="openProductDrawer('سرم هیالورونیک اسید ۲٪ خالص + B5', '۱,۲۵۰,۰۰۰ تومان', 'assets/ex-photo1.jpeg', 'سرم آبرسان عمقی با وزن مولکولی ۳ گانه به همراه ویتامین B5 جهت پر کردن خطوط ریز ناشی از بی‌آبی پوست.', ['۳۰ میلی‌لیتر', '۶۰ میلی‌لیتر'], 'هیالورونیک اسید، ویتامین B5، عصاره خیار')">
                        مشاهده و انتخاب
                    </button>
                </div>
                <div class="p-details">
                    <span class="p-category">سرم صورت • ۳۰ میلی‌لیتر</span>
                    <h3>سرم هیالورونیک اسید ۲٪ خالص + ویتامین B5</h3>
                    <div class="p-price-row">
                        <div class="price-val">۱,۲۵۰,۰۰۰ <span>تومان</span></div>
                        <span class="stock-status">موجود در انبار</span>
                    </div>
                </div>
            </div>

            <div class="product-glam-card" data-title="کرم دور چشم پپتاید سه‌گانه" data-cat="eye" data-price="890000">
                <div class="p-media">
                    <span class="p-badge new">فرمول جدید</span>
                    <img src="assets/ex-photo2.jpeg" alt="Cream">
                    <button class="quick-bag-btn" onclick="openProductDrawer('کرم پپتاید سه‌گانه رفع تیرگی دور چشم', '۸۹۰,۰۰۰ تومان', 'assets/ex-photo2.jpeg', 'فرمولاسیون سبک با پپتایدهای مس و کافئین کپسوله شده جهت رفع قطعی تیرگی، پف و چروک‌های دور چشم.', ['۱۵ میلی‌لیتر'], 'پپتاید سه‌گانه، کافئین، نیاسینامید')">
                        مشاهده و انتخاب
                    </button>
                </div>
                <div class="p-details">
                    <span class="p-category">کرم دور چشم • ۱۵ میلی‌لیتر</span>
                    <h3>کرم پپتاید سه‌گانه رفع تیرگی و خطوط ریز</h3>
                    <div class="p-price-row">
                        <div class="price-val">۸۹۰,۰۰۰ <span>تومان</span></div>
                        <span class="stock-status">موجود در انبار</span>
                    </div>
                </div>
            </div>

            <div class="product-glam-card" data-title="تونر آبرسان گلبرگ گل سرخ" data-cat="face" data-price="650000">
                <div class="p-media">
                    <img src="assets/ex-photo3.jpeg" alt="Toner">
                    <button class="quick-bag-btn" onclick="openProductDrawer('تونر آبرسان گلبرگ گل سرخ و سنتلا', '۶۵۰,۰۰۰ تومان', 'assets/ex-photo3.jpeg', 'تونر بدون الکل حاوی گلبرگ‌های واقعی گل سرخ، عصاره سنتلا و نیاسینامید برای ایجاد شفافیت و لطافت مخملی.', ['۲۰۰ میلی‌لیتر', '۴۰۰ میلی‌لیتر'], 'عصاره گل سرخ، سنتلا آسیاتیکا، پانتنول')">
                        مشاهده و انتخاب
                    </button>
                </div>
                <div class="p-details">
                    <span class="p-category">تونر روزانه • ۲۰۰ میلی‌لیتر</span>
                    <h3>تونر آبرسان گلبرگ گل سرخ و سنتلا</h3>
                    <div class="p-price-row">
                        <div class="price-val">۶۵۰,۰۰۰ <span>تومان</span></div>
                        <span class="stock-status">موجود در انبار</span>
                    </div>
                </div>
            </div>

            <div class="product-glam-card" data-title="بالم پپتاید لب توت فرنگی" data-cat="lip" data-price="336000">
                <div class="p-media">
                    <span class="p-badge sale">-۲۰٪ تخفیف</span>
                    <img src="assets/ex-photo6.jpg" alt="Lip Balm">
                    <button class="quick-bag-btn" onclick="openProductDrawer('بالم پپتاید لب عصاره توت فرنگی و کارامل', '۳۳۶,۰۰۰ تومان', 'assets/ex-photo6.jpg', 'بالم مغذی با خاصیت براق‌کنندگی طبیعی، حجم‌دهی ملایم و بازسازی پوسته لب با پپتاید و شی‌باتر ارگانیک.', ['۱۰ گرم'], 'شی‌باتر، روغن بادام شیرین، پپتاید لب')">
                        مشاهده و انتخاب
                    </button>
                </div>
                <div class="p-details">
                    <span class="p-category">مراقبت لب • ۱۰ گرم</span>
                    <h3>بالم پپتاید لب عصاره توت فرنگی و کارامل</h3>
                    <div class="p-price-row">
                        <div class="price-val">
                            <del>۴۲۰,۰۰۰</del>
                            ۳۳۶,۰۰۰ <span>تومان</span>
                        </div>
                        <span class="stock-status sale-text">پیشنهاد ویژه</span>
                    </div>
                </div>
            </div>

            <div class="product-glam-card" data-title="فوم شستشوی روشن‌کننده ویتامین C" data-cat="face" data-price="580000">
                <div class="p-media">
                    <img src="assets/ex-photo5.jpeg" alt="Cleanser">
                    <button class="quick-bag-btn" onclick="openProductDrawer('فوم شستشوی روشن‌کننده ویتامین C', '۵۸۰,۰۰۰ تومان', 'assets/ex-photo5.jpeg', 'فوم شستشوی ابریشمی با پمپ ابری حاوی ویتامین C پایدار و چای سبز جهت پاکسازی چربی اضافی بدون ایجاد خشکی.', ['۱۵۰ میلی‌لیتر'], 'ویتامین C، عصاره چای سبز، آلوئه‌ورا')">
                        مشاهده و انتخاب
                    </button>
                </div>
                <div class="p-details">
                    <span class="p-category">شوینده صورت • ۱۵۰ میلی‌لیتر</span>
                    <h3>فوم شستشوی روشن‌کننده ویتامین C</h3>
                    <div class="p-price-row">
                        <div class="price-val">۵۸۰,۰۰۰ <span>تومان</span></div>
                        <span class="stock-status">موجود در انبار</span>
                    </div>
                </div>
            </div>

            <div class="product-glam-card" data-title="سرم نیاسینامید ۱۰٪ + زینک ۱٪" data-cat="serum" data-price="960000">
                <div class="p-media">
                    <span class="p-badge best">کنترل چربی</span>
                    <img src="assets/ex-photo4.jpg" alt="Niacinamide">
                    <button class="quick-bag-btn" onclick="openProductDrawer('سرم نیاسینامید ۱۰٪ خالص + زینک PCA', '۹۶۰,۰۰۰ تومان', 'assets/ex-photo4.jpg', 'درمان قوی منافذ باز، کنترل سبوم و جلوگیری از ایجاد جوش‌های سرسیاه به همراه درخشش طبیعی پوست.', ['۳۰ میلی‌لیتر'], 'نیاسینامید ۱۰٪، زینک PCA، عصاره تمشک')">
                        مشاهده و انتخاب
                    </button>
                </div>
                <div class="p-details">
                    <span class="p-category">سرم درمانی • ۳۰ میلی‌لیتر</span>
                    <h3>سرم نیاسینامید ۱۰٪ خالص + زینک PCA</h3>
                    <div class="p-price-row">
                        <div class="price-val">۹۶۰,۰۰۰ <span>تومان</span></div>
                        <span class="stock-status">موجود در انبار</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>

<div class="drawer-overlay" id="productDrawerOverlay" onclick="closeProductDrawer()"></div>
<aside class="luxury-product-drawer" id="luxuryProductDrawer">
    <div class="drawer-header">
        <span class="drawer-badge">مشخصات بالینی محصول</span>
        <button class="drawer-close-btn" onclick="closeProductDrawer()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
    </div>
    
    <div class="drawer-body">
        <div class="drawer-image-box">
            <img id="drawerImg" src="" alt="Product Showcase">
        </div>
        
        <div class="drawer-info-content">
            <h2 id="drawerTitle">نام محصول</h2>
            <div class="drawer-price" id="drawerPrice">۰ تومان</div>
            
            <div class="drawer-block">
                <label>معرفی و عملکرد:</label>
                <p id="drawerDesc">توضیحات تخصصی محصول...</p>
            </div>

            <div class="drawer-block" id="drawerVariantsBlock">
                <label>انتخاب حجم / سایز:</label>
                <div class="drawer-variants" id="drawerVariantsContainer"></div>
            </div>

            <div class="drawer-block">
                <label>ترکیبات کلیدی فعال:</label>
                <div class="drawer-ingredients-tag" id="drawerIngredients"></div>
            </div>
        </div>
    </div>

    <div class="drawer-footer">
        <div class="qty-pill">
            <button onclick="decrementQty()">-</button>
            <input type="text" id="productQty" value="1" readonly>
            <button onclick="incrementQty()">+</button>
        </div>
        <button class="btn-aesthetic-primary" style="flex: 1; justify-content: center;" onclick="addToCartSuccess()">
            افزودن به سبد خرید
        </button>
    </div>
</aside>

<?php include 'footer.php'; ?>