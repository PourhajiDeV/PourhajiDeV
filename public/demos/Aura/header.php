<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>آورا واچ | Aura Watche</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleMobileMenu()"></div>

    <aside class="mobile-sidebar" id="mobileSidebar">
        <div class="sidebar-header">
            <div class="brand-logo">
                <span class="logo-symbol">A</span>
                <div class="logo-names">
                    <span class="brand-title">AURA</span>
                    <span class="brand-sub">WATCHES</span>
                </div>
            </div>
            <button class="sidebar-close-btn" onclick="toggleMobileMenu()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <div class="sidebar-search">
            <input type="text" placeholder="جستجو در محصولات..." onkeyup="searchProductsLive()">
        </div>
        <ul class="sidebar-menu-list">
            <li><a href="index.php" class="active">صفحه اصلی</a></li>
            <li><a href="shop.php">فروشگاه محصولات</a></li>
            <li><a href="shop.php?cat=smart">ساعت هوشمند</a></li>
            <li><a href="shop.php?cat=classic">کلاسیک مردانه</a></li>
            <li><a href="shop.php?cat=women">عقربه‌ای زنانه</a></li>
            <li><a href="shop.php?cat=sport">اسپرت و ورزشی</a></li>
            <li><a href="about.php">درباره ما</a></li>
            <li><a href="contact.php">تماس با ما</a></li>
        </ul>
    </aside>

    <header class="site-header">
        <div class="top-announcement">
            <div class="container announcement-inner">
                <div class="announcement-text">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                    <span>تضمین اصالت کالا + ارسال رایگان سفارشات بالای ۵ میلیون تومان</span>
                </div>
                <div class="announcement-contact">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>۰۲۱-۸۸۸۸۸۸۸۸</span>
                </div>
            </div>
        </div>

        <div class="main-nav-wrapper">
            <div class="container main-nav-inner">
                
                <button class="mobile-toggle-btn" onclick="toggleMobileMenu()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>

                <a href="index.php" class="brand-logo">
                    <span class="logo-symbol">A</span>
                    <div class="logo-names">
                        <span class="brand-title">AURA</span>
                        <span class="brand-sub">WATCHES</span>
                    </div>
                </a>

                <nav class="desktop-nav">
                    <a href="index.php" class="active">خانه</a>
                    <a href="shop.php">کلکسیون‌ها</a>
                    <a href="shop.php?cat=smart">هوشمند</a>
                    <a href="shop.php?cat=classic">کلاسیک</a>
                    <a href="about.php">درباره آورا</a>
                </nav>

                <div class="header-actions">
                    <button class="icon-btn" onclick="toggleSearchOverlay()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <button class="icon-btn" id="openLoginModal">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </button>
                    <a href="cart.php" class="icon-btn cart-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <span class="cart-dot">۲</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="search-overlay-box" id="searchOverlayBox">
            <div class="container search-box-inner">
                <input type="text" id="searchInput" placeholder="نام مدل یا برند را جستجو کنید..." onkeyup="searchProductsLive()">
                <button class="close-search-btn" onclick="toggleSearchOverlay()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
    </header>