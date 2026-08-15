<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>آورا واچ | Aura Watches</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php include 'header.php'; ?>

    <main>
        <section class="hero-section container">
            <div class="hero-wrapper">
                <div class="hero-content">
                    <span class="hero-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                        کلکسیون ۲۰۲۷
                    </span>
                    <h2>زمان در<br>کنترل توست.</h2>
                    <p>خرید بهترین ساعت‌های کلاسیک و هوشمند از برندهای معتبر جهانی با تضمین اصالت کالا و گارانتی طلایی آورا.</p>
                    <div class="hero-actions">
                        <a href="shop.html" class="btn-primary">مشاهده محصولات</a>
                        <a href="contact.html" class="btn-outline">ارتباط با مشاور</a>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="visual-shape"></div>
                    <img src="assets/images/banners/hero.jpeg" alt="Luxury Watch" class="main-watch">
                    <div class="floating-price">
                        <span>ساعت رولکس دیت‌جاست</span>
                        <strong>۱۸۵,۰۰۰,۰۰۰ تومان</strong>
                    </div>
                </div>
            </div>
        </section>

        <section class="pill-categories container">
            <div class="section-title text-center">
                <h3>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    دسته‌بندی محصولات
                </h3>
                <p>راحت و سریع، سبک خودت رو پیدا کن</p>
            </div>
            
            <div class="pill-grid">
                <a href="shop.html?cat=smart" class="pill-item">
                    <img src="assets/images/categories/watch-hooshmand.jpeg" alt="Smart">
                    <span>ساعت هوشمند</span>
                </a>
                <a href="shop.html?cat=classic" class="pill-item">
                    <img src="assets/images/categories/clasic.jpeg" alt="Classic">
                    <span>کلاسیک مردانه</span>
                </a>
                <a href="shop.html?cat=women" class="pill-item">
                    <img src="assets/images/categories/zarif-zanane.jpeg" alt="Women">
                    <span>ظریف زنانه</span>
                </a>
                <a href="shop.html?cat=sport" class="pill-item">
                    <img src="assets/images/categories/sport.jpeg" alt="Sport">
                    <span>اسپرت و ورزشی</span>
                </a>
                <a href="shop.html?cat=accessories" class="pill-item">
                    <img src="assets/images/categories/band-accessory.jpeg" alt="Band">
                    <span>بند و اکسسوری</span>
                </a>
            </div>
        </section>

        <section class="popular-products-band">
            <div class="container">
                <div class="band-header">
                    <div class="band-title">
                        <h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            محبوب‌ترین محصولات
                        </h3>
                        <span>انتخاب خاص‌پسندان</span>
                    </div>
                    <div class="band-nav">
                        <button class="nav-btn" id="slideRight">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                        <button class="nav-btn" id="slideLeft">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </button>
                    </div>
                </div>

                <div class="products-row">
                    
                    <div class="product-card">
                        <div class="card-img">
                            <span class="discount-badge">-۱۵%</span>
                            <img src="assets/images/products/ex-img1.jpeg" alt="Watch 1">
                        </div>
                        <div class="card-body">
                            <span class="brand-name">رولکس</span>
                            <h4>ساعت مچی عقربه‌ای مدل ساب‌مارینر</h4>
                            <div class="price-wrap">
                                <del>۲۵۰,۰۰۰,۰۰۰</del>
                                <ins>۲۱۲,۵۰۰,۰۰۰ <span>تومان</span></ins>
                            </div>
                            <button class="add-to-cart">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                افزودن به سبد
                            </button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="card-img">
                            <span class="new-badge">جدید</span>
                            <img src="assets/images/products/ex-img2.jpeg" alt="Watch 2">
                        </div>
                        <div class="card-body">
                            <span class="brand-name">سیتیزن</span>
                            <h4>ساعت کرونوگراف مردانه اکودرایو</h4>
                            <div class="price-wrap">
                                <ins>۱۸,۵۰۰,۰۰۰ <span>تومان</span></ins>
                            </div>
                            <button class="add-to-cart">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                افزودن به سبد
                            </button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="card-img">
                            <img src="assets/images/products/ex-img3.jpeg" alt="Watch 3">
                        </div>
                        <div class="card-body">
                            <span class="brand-name">کاسیو</span>
                            <h4>ساعت جی‌شاک مدل GA-2100 مشکی</h4>
                            <div class="price-wrap">
                                <ins>۶,۲۰۰,۰۰۰ <span>تومان</span></ins>
                            </div>
                            <button class="add-to-cart">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                افزودن به سبد
                            </button>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="card-img">
                            <span class="discount-badge">-۱۰%</span>
                            <img src="assets/images/products/ex-img4.jpeg" alt="Watch 4">
                        </div>
                        <div class="card-body">
                            <span class="brand-name">اپل</span>
                            <h4>اپل واچ سری ۹ سایز ۴۵ میلی‌متری</h4>
                            <div class="price-wrap">
                                <del>۲۲,۰۰۰,۰۰۰</del>
                                <ins>۱۹,۸۰۰,۰۰۰ <span>تومان</span></ins>
                            </div>
                            <button class="add-to-cart">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                افزودن به سبد
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="price-categories container">
            <div class="section-title text-center">
                <h3>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    خرید بر اساس بودجه
                </h3>
                <p>راحت‌تر تصمیم بگیر و انتخاب کن</p>
            </div>
            
            <div class="price-grid">
                <a href="shop.html?price=under-5m" class="price-card">
                    <div class="price-img-box">
                        <img src="assets/images/categories/under-5m.jpeg" alt="Budget 1">
                    </div>
                    <div class="price-info">
                        <h4>زیر ۵ میلیون</h4>
                        <span class="arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </span>
                    </div>
                </a>
                
                <a href="shop.html?price=5m-15m" class="price-card">
                    <div class="price-img-box">
                        <img src="assets/images/categories/between-5m15m.avif" alt="Budget 2">
                    </div>
                    <div class="price-info">
                        <h4>۵ تا ۱۵ میلیون</h4>
                        <span class="arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </span>
                    </div>
                </a>

                <a href="shop.html?price=15m-50m" class="price-card">
                    <div class="price-img-box">
                        <img src="assets/images/categories/between-15m50m.jpeg" alt="Budget 3">
                    </div>
                    <div class="price-info">
                        <h4>۱۵ تا ۵۰ میلیون</h4>
                        <span class="arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </span>
                    </div>
                </a>

                <a href="shop.html?price=above-50m" class="price-card">
                    <div class="price-img-box">
                        <img src="assets/images/categories/bigger-50m.jpeg" alt="Budget 4">
                    </div>
                    <div class="price-info">
                        <h4>بالای ۵۰ میلیون</h4>
                        <span class="arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </span>
                    </div>
                </a>
            </div>
        </section>

        <section class="promo-banners container">
            <div class="banner-box box-1">
                <div class="banner-text">
                    <h3>کالکشن کلاسیک<br>رومانسون</h3>
                    <p>طراحی سوئیسی با اصالت بی‌پایان</p>
                    <a href="shop.html?brand=romanson" class="btn-white">مشاهده مدل‌ها</a>
                </div>
                <img src="assets/images/banners/oldmoney.jpeg" alt="Classic">
            </div>
            <div class="banner-box box-2">
                <div class="banner-text">
                    <h3>دنیای هوشمند<br>گلکسی واچ</h3>
                    <p>فناوری روی مچ دست شما</p>
                    <a href="shop.html?brand=samsung" class="btn-dark">خرید آنلاین</a>
                </div>
                <img src="assets/images/banners/hooshmands.jpeg" alt="Smartwatch">
            </div>
        </section>
    </main>

    <?php include 'footer.php'; ?>
    <script src="app.js"></script>
</body>
</html>