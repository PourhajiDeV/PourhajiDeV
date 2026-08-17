<?php include 'header.php'; ?>

<main>
    <section class="hero-fullscreen">
        <div class="hero-parallax-bg">
            <img src="assets/images/hero.jpeg" alt="Hero Background">
            <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-content-wrapper container">
            <div class="hero-text-block">
                <span class="hero-tag">کالکشن انحصاری تابستان</span>
                <h1 class="hero-title">استایلت رو<br>بدون مرز بساز.</h1>
                <p class="hero-desc">جدیدترین لاین پوشاک و کتونی‌های اورجینال با طراحی مینیمال. وقتشه قوانین استایل شهری رو بازنویسی کنی.</p>
                <div class="hero-cta">
                    <a href="shop.php" class="btn-solid-glow">
                        کشف کالکشن 
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </a>
                    <a href="shop.php?cat=shoes" class="btn-glass">
                        مشاهده کتونی‌ها
                    </a>
                </div>
            </div>

            <div class="hero-stats-glass">
                <div class="stat-item">
                    <span class="stat-num">+۲۵۰</span>
                    <span class="stat-text">مدل فعال</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <span class="stat-num">۱۰۰٪</span>
                    <span class="stat-text">تضمین اصالت</span>
                </div>
            </div>
        </div>

        <div class="scroll-indicator">
            <div class="mouse"></div>
            <span>اسکرول کنید</span>
        </div>
    </section>

    <section class="categories-bento container">
        <div class="section-head">
            <div>
                <h2>دسته‌بندی‌های منتخب</h2>
                <p>مستقیم به لاین استایل مد نظرت دسترسی پیدا کن</p>
            </div>
            <a href="shop.php">
                مشاهده همه 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </a>
        </div>
        
        <div class="bento-grid">
            <a href="shop.php?cat=jacket" class="bento-item item-main">
                <img src="assets/images/puffer.jpeg" alt="Jackets">
                <div class="bento-gradient-overlay"></div>
                <div class="bento-content">
                    <span class="bento-tag">پوشاک فصل</span>
                    <h3>کاپشن، پافر و کت</h3>
                    <span>+۸۵ مدل اوورسایز و فیت</span>
                </div>
            </a>

            <a href="shop.php?cat=shoes" class="bento-item item-wide">
                <img src="assets/images/snickers.jpeg" alt="Sneakers">
                <div class="bento-gradient-overlay"></div>
                <div class="bento-content">
                    <span class="bento-tag">ترند خیابانی</span>
                    <h3>کتونی و اسنیکرز اورجینال</h3>
                    <span>جدیدترین مدل‌های ۲۰۲۷ نایک، آدیداس و اسیکس</span>
                </div>
            </a>

            <a href="shop.php?cat=hoodie" class="bento-item item-small-1">
                <img src="assets/images/hoodie-dors.jpeg" alt="Hoodies">
                <div class="bento-gradient-overlay"></div>
                <div class="bento-content">
                    <span class="bento-tag">توکرک و پنبه</span>
                    <h3>هودی و دورس</h3>
                </div>
            </a>

            <a href="shop.php?cat=pants" class="bento-item item-small-2">
                <img src="assets/images/jeans.jpeg" alt="Pants">
                <div class="bento-gradient-overlay"></div>
                <div class="bento-content">
                    <span class="bento-tag">شش‌جیب و راسته</span>
                    <h3>شلوار کارگو و اسلش</h3>
                </div>
            </a>
        </div>
    </section>

    <section class="lookbook-immersive container">
        <div class="lookbook-stage">
            <div class="lookbook-info-pane">
                <span class="pill-badge">لوک‌بوک استایل دارک ۲۰۲۷</span>
                <h2>ترکیب لایه‌های مدرن خیابانی</h2>
                <p>در استایل رادیوم، هر آیتم با دقت بالا طراحی شده تا با ترکیب هودی‌های سنگین، شلوارهای کارگو ارگونومیک و کتونی‌های چانکی، هویتی جسورانه به حضور شما ببخشد.</p>
                
                <div class="lookbook-items-list">
                    <div class="lb-item-row" onclick="openProductModal('کاپشن پافر کلاه‌دار پاییزه', '۱,۸۵۰,۰۰۰ تومان', 'assets/images/puffer.jpeg', 'پافر ضدآب با الیاف سبک گرمایشی، کلاه جداشونده و آستر تنفس‌پذیر.')">
                        <div class="lb-icon">۰۱</div>
                        <div>
                            <strong>پافر ضدآب مشکی مات</strong>
                            <span>الیاف سبک با تنفس‌پذیری بالا</span>
                        </div>
                        <div class="lb-price">۱,۸۵۰,۰۰۰ تومان</div>
                    </div>
                    
                    <div class="lb-item-row" onclick="openProductModal('شلوار کارگو شش جیب', '۱,۱۵۰,۰۰۰ تومان', 'assets/images/jeans.jpeg', 'شلوار کارگو کتان کش با جیب‌های عمیق کاربردی و دوخت‌های تقویتی.')">
                        <div class="lb-icon">۰۲</div>
                        <div>
                            <strong>شلوار کارگو اسلیت گری</strong>
                            <span>پارچه کتان سنگشور با فیت اختصاصی</span>
                        </div>
                        <div class="lb-price">۱,۱۵۰,۰۰۰ تومان</div>
                    </div>

                    <div class="lb-item-row" onclick="openProductModal('کتونی نایک ایرفورس وان', '۳,۲۰۰,۰۰۰ تومان', 'assets/images/nikeairforce.jpeg', 'کتونی ایرفورس وان کلاسیک با متریال چرم باکیفیت و زیره منعطف.')">
                        <div class="lb-icon">۰۳</div>
                        <div>
                            <strong>کتونی نایک ایرفورس وان</strong>
                            <span>چرم مات طبیعی همراه با زیره ضدسایش</span>
                        </div>
                        <div class="lb-price">۳,۲۰۰,۰۰۰ تومان</div>
                    </div>
                </div>

                <a href="shop.php" class="btn-solid-glow" style="margin-top: 15px;">خرید کامل این استایل</a>
            </div>

            <div class="lookbook-visual-pane">
                <div class="interactive-model-card">
                    <img src="assets/images/lookbook.jpeg" alt="Model Showcase">
                </div>
            </div>
        </div>
    </section>

    <section class="products-section">
        <div class="container">
            <div class="section-head">
                <div>
                    <h2>تازه‌های بوتیک</h2>
                    <p>منتخبی از محبوب‌ترین لباس‌ها و کتونی‌های این هفته</p>
                </div>
            </div>

            <div class="product-grid">
                
                <div class="product-card" onclick="openProductModal('تیشرت بیسیک سفید نخی', '۵۲۰,۰۰۰ تومان', 'assets/images/white-tshirt.jpeg', 'تیشرت نخی ۱۰۰٪ پنبه ارگانیک با دوخت دوبل، بدون پرزدهی و مناسب استایل‌های روزمره و مینیمال.')">
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

                <div class="product-card" onclick="openProductModal('کاپشن پافر کلاه‌دار پاییزه', '۱,۸۵۰,۰۰۰ تومان', 'assets/images/puffer.jpeg', 'پافر ضدآب با الیاف سبک گرمایشی، کلاه جداشونده و آستر تنفس‌پذیر جهت استفاده در فصول سرد.')">
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

                <div class="product-card" onclick="openProductModal('کتونی نایک ایرفورس وان', '۳,۲۰۰,۰۰۰ تومان', 'assets/images/nikeairforce.jpeg', 'کتونی ایرفورس وان کلاسیک با متریال چرم باکیفیت، زیره پی‌یو منعطف ضدسایش و راحتی فوق‌العاده پیاده‌روی.')">
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

                <div class="product-card" onclick="openProductModal('هودی مینیمال تو کرک', '۹۸۰,۰۰۰ تومان', 'assets/images/hoodie-dors.jpeg', 'هودی اورسایز سه نخ توکرک با گرمای بالا، فرم ایستایی استاندارد و رنگ‌بندی خاص استایل خیابانی.')">
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

                <div class="product-card" onclick="openProductModal('شلوار کارگو شش جیب', '۱,۱۵۰,۰۰۰ تومان', 'assets/images/jeans.jpeg', 'شلوار کارگو کتان کش با جیب‌های عمیق کاربردی، بند تنظیم مچ پا و دوخت‌های تقویتی مقاوم.')">
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

                <div class="product-card" onclick="openProductModal('کت جین کلاسیک مردانه', '۱,۴۷۰,۰۰۰ تومان', 'assets/images/coat-jean.jpeg', 'کت جین سنگ‌شور شده کلاسیک با دکمه‌های فلزی ضدزنگ و تن‌خور استاندارد متناسب با فصول معتدل.')">
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
        </div>
    </section>

    <section class="reviews-section container">
        <div class="section-head text-center">
            <h2>تجربه همراهان رادیوم</h2>
            <p>نظرات خریدارانی که استایل خود را با رادیوم ارتقا داده‌اند</p>
        </div>
        <div class="reviews-grid">
            <div class="review-card">
                <div class="review-header">
                    <div class="avatar-ph">آک</div>
                    <div>
                        <strong>آرمان کاظمی</strong>
                        <span class="verified-badge">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            خریدار تایید شده
                        </span>
                    </div>
                </div>
                <div class="review-stars">★★★★★</div>
                <p>«کیفیت پارچه هودی و پافر فوق‌العاده بود. تن‌خور کار دقیقاً شبیه عکس‌های لوک‌بوکه و بدون افت کیفیت بعد از شست‌وشو باقی موند.»</p>
            </div>

            <div class="review-card">
                <div class="review-header">
                    <div class="avatar-ph">نش</div>
                    <div>
                        <strong>نیلوفر شایان</strong>
                        <span class="verified-badge">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            خریدار تایید شده
                        </span>
                    </div>
                </div>
                <div class="review-stars">★★★★★</div>
                <p>«کتونی ایرفورس وان رو سفارش دادم؛ بسته‌بندی پلمپ بود، قالب و متریال چرم کاملاً اورجیناله و زیره کفش فوق‌العاده نرمه.»</p>
            </div>

            <div class="review-card">
                <div class="review-header">
                    <div class="avatar-ph">سا</div>
                    <div>
                        <strong>سپهر امینی</strong>
                        <span class="verified-badge">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            خریدار تایید شده
                        </span>
                    </div>
                </div>
                <div class="review-stars">★★★★★</div>
                <p>«پشتیبانی عالی برای راهنمای سایز شلوار کارگو؛ فیتینگ کارگو بی‌نقص بود و قطعاً آیتم‌های بعدی رو هم از رادیوم انتخاب می‌کنم.»</p>
            </div>
        </div>
    </section>

    <section class="banner-cta container">
        <div class="cta-content">
            <h2>به استایل جدیدت سلام کن!</h2>
            <p>با اپلیکیشن رادیوم، خرید راحت‌تر و سریع‌تری رو تجربه کن و از تخفیف‌های اختصاصی اپلیکیشن جا نمون.</p>
            <div class="cta-buttons">
                <button class="btn-solid-glow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z"/></svg>
                    دانلود برای iOS
                </button>
                <button class="btn-solid-glow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1523-.5676.416.416 0 00-.5676.1523l-2.0223 3.503C15.5896 8.3585 13.8566 8 12 8s-3.5896.3585-5.1366.95l-2.0223-3.503a.416.416 0 00-.5676-.1523.416.416 0 00-.1523.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>
                    دانلود برای اندروید
                </button>
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