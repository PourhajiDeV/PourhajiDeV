<?php include 'header.php'; ?>

<div class="shop-banner-header">
    <div class="container">
        <h1>فروشگاه رادیوم</h1>
        <p>مجموعه کامل استایل‌های مینیمال شهری، پوشاک فصلی و کتونی‌های روز</p>
    </div>
</div>

<main class="container shop-layout">
    <aside class="shop-sidebar">
        <div class="filter-box">
            <h3>دسته‌بندی محصولات</h3>
            <div class="custom-filter-group">
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="tshirt" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span>تیشرت و تاپ</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="jacket" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span>کاپشن و کت</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="hoodie" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span>هودی و دورس</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="shoes" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span>کتونی و کفش</span>
                </label>
                <label class="custom-checkbox">
                    <input type="checkbox" class="cat-filter" value="pants" onchange="applyAllFilters()">
                    <span class="checkmark"></span>
                    <span>شلوار و اسلش</span>
                </label>
            </div>
        </div>

        <div class="filter-box">
            <h3>محدوده قیمت (تومان)</h3>
            <div class="price-inputs">
                <input type="number" id="minPriceInput" placeholder="از ۵۰۰,۰۰۰" onkeyup="applyAllFilters()">
                <input type="number" id="maxPriceInput" placeholder="تا ۴,۰۰۰,۰۰۰" onkeyup="applyAllFilters()">
            </div>
            <button class="btn-filter-apply" onclick="applyAllFilters()">اعمال فیلتر قیمت</button>
        </div>
    </aside>

    <section class="shop-content">
        <div class="shop-toolbar">
            <span id="productCountText">نمایش ۶ محصول</span>
            <div class="sort-select">
                <label>مرتب‌سازی:</label>
                <select id="sortSelect" onchange="sortProducts()">
                    <option value="default">پیش‌فرض</option>
                    <option value="price-asc">ارزان‌ترین</option>
                    <option value="price-desc">گران‌ترین</option>
                </select>
            </div>
        </div>

        <div class="product-grid" id="productsContainer">
            
            <div class="product-card" data-title="تیشرت بیسیک سفید نخی" data-cat="tshirt" data-price="520000" onclick="openProductModal('تیشرت بیسیک سفید نخی', '۵۲۰,۰۰۰ تومان', 'assets/images/white-tshirt.jpeg', 'تیشرت نخی ۱۰۰٪ پنبه ارگانیک با دوخت دوبل، بدون پرزدهی و مناسب استایل‌های روزمره و مینیمال.')">
                <div class="card-image">
                    <span class="discount-tag">-۲۰%</span>
                    <img src="assets/images/white-tshirt.jpeg" alt="Tshirt">
                </div>
                <div class="card-info">
                    <span class="category-name">تیشرت</span>
                    <h3>تیشرت بیسیک سفید نخی</h3>
                    <div class="price-box">
                        <del>۶۵۰,۰۰۰</del>
                        <ins>۵۲۰,۰۰۰ تومان</ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="کاپشن پافر کلاه‌دار پاییزه" data-cat="jacket" data-price="1850000" onclick="openProductModal('کاپشن پافر کلاه‌دار پاییزه', '۱,۸۵۰,۰۰۰ تومان', 'assets/images/puffer.jpeg', 'پافر ضدآب با الیاف سبک گرمایشی، کلاه جداشونده و آستر تنفس‌پذیر جهت استفاده در فصول سرد.')">
                <div class="card-image">
                    <span class="new-tag">جدید</span>
                    <img src="assets/images/puffer.jpeg" alt="Jacket">
                </div>
                <div class="card-info">
                    <span class="category-name">کاپشن</span>
                    <h3>کاپشن پافر کلاه‌دار پاییزه</h3>
                    <div class="price-box">
                        <ins>۱,۸۵۰,۰۰۰ تومان</ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="کتونی نایک ایرفورس وان" data-cat="shoes" data-price="3200000" onclick="openProductModal('کتونی نایک ایرفورس وان', '۳,۲۰۰,۰۰۰ تومان', 'assets/images/nikeairforce.jpeg', 'کتونی ایرفورس وان کلاسیک با متریال چرم باکیفیت، زیره پی‌یو منعطف ضدسایش و راحتی فوق‌العاده پیاده‌روی.')">
                <div class="card-image">
                    <img src="assets/images/nikeairforce.jpeg" alt="Sneaker">
                </div>
                <div class="card-info">
                    <span class="category-name">کتونی</span>
                    <h3>کتونی نایک ایرفورس وان</h3>
                    <div class="price-box">
                        <ins>۳,۲۰۰,۰۰۰ تومان</ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="هودی مینیمال تو کرک" data-cat="hoodie" data-price="980000" onclick="openProductModal('هودی مینیمال تو کرک', '۹۸۰,۰۰۰ تومان', 'assets/images/hoodie-dors.jpeg', 'هودی اورسایز سه نخ توکرک با گرمای بالا، فرم ایستایی استاندارد و رنگ‌بندی خاص استایل خیابانی.')">
                <div class="card-image">
                    <span class="hot-tag">پرفروش</span>
                    <img src="assets/images/hoodie-dors.jpeg" alt="Hoodie">
                </div>
                <div class="card-info">
                    <span class="category-name">هودی</span>
                    <h3>هودی مینیمال تو کرک</h3>
                    <div class="price-box">
                        <ins>۹۸۰,۰۰۰ تومان</ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="شلوار کارگو شش جیب" data-cat="pants" data-price="1150000" onclick="openProductModal('شلوار کارگو شش جیب', '۱,۱۵۰,۰۰۰ تومان', 'assets/images/jeans.jpeg', 'شلوار کارگو کتان کش با جیب‌های عمیق کاربردی، بند تنظیم مچ پا و دوخت‌های تقویتی مقاوم.')">
                <div class="card-image">
                    <img src="assets/images/jeans.jpeg" alt="Pants">
                </div>
                <div class="card-info">
                    <span class="category-name">شلوار</span>
                    <h3>شلوار کارگو شش جیب</h3>
                    <div class="price-box">
                        <ins>۱,۱۵۰,۰۰۰ تومان</ins>
                    </div>
                    <button class="add-to-cart-btn">مشاهده و خرید</button>
                </div>
            </div>

            <div class="product-card" data-title="کت جین کلاسیک مردانه" data-cat="jacket" data-price="1470000" onclick="openProductModal('کت جین کلاسیک مردانه', '۱,۴۷۰,۰۰۰ تومان', 'assets/images/coat-jean.jpeg', 'کت جین سنگ‌شور شده کلاسیک با دکمه‌های فلزی ضدزنگ و تن‌خور استاندارد متناسب با فصول معتدل.')">
                <div class="card-image">
                    <span class="discount-tag">-۳۰%</span>
                    <img src="assets/images/coat-jean.jpeg" alt="Jacket">
                </div>
                <div class="card-info">
                    <span class="category-name">کت</span>
                    <h3>کت جین کلاسیک مردانه</h3>
                    <div class="price-box">
                        <del>۲,۱۰۰,۰۰۰</del>
                        <ins>۱,۴۷۰,۰۰۰ تومان</ins>
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
                    <img id="modalImg" src="" alt="Product">
                </div>
            </div>
            <div class="modal-info">
                <span class="modal-tag">ضمانت اصالت رادیوم</span>
                <h2 id="modalTitle">نام محصول</h2>
                <span class="modal-price" id="modalPrice">۰ تومان</span>
                <p class="modal-desc" id="modalDesc">توضیحات کامل محصول...</p>
                
                <div class="modal-actions">
                    <div class="quantity-box">
                        <button onclick="decrementQty()">-</button>
                        <input type="text" id="productQty" value="1" readonly>
                        <button onclick="incrementQty()">+</button>
                    </div>
                    <button class="btn-solid-glow" style="flex: 1; justify-content: center;" onclick="addToCartSuccess()">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>