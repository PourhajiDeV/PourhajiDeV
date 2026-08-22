<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>گلوریا اسکین‌کر | Gloria Skincare</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleMobileMenu()"></div>

    <aside class="mobile-sidebar" id="mobileSidebar">
        <div class="sidebar-header">
            <div class="brand-logo">
                <span>GLORIA</span>
                <small>SKINCARE</small>
            </div>
            <button class="sidebar-close-btn" onclick="toggleMobileMenu()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <div class="sidebar-search">
            <input type="text" id="sidebarSearchInput" placeholder="جستجوی سرم، آبرسان، ماسک..." onkeyup="searchProductsLive()">
        </div>
        <ul class="sidebar-menu-list">
            <li><a href="index.php">صفحه اصلی</a></li>
            <li><a href="shop.php">فروشگاه روتین</a></li>
            <li><a href="shop.php?cat=serum">سرم‌های بالینی</a></li>
            <li><a href="shop.php?cat=face">مراقبت روزانه صورت</a></li>
            <li><a href="shop.php?cat=lip">مراقبت لب و دور چشم</a></li>
            <li><a href="about.php">داستان گلوریا</a></li>
            <li><a href="contact.php">مشاوره آنلاین پوست</a></li>
        </ul>
    </aside>

    <header class="luxury-floating-nav">
        <div class="container nav-container">
            <div class="nav-brand-group">
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <a href="index.php" class="brand-logo">
                    <span>GLORIA</span>
                    <small>PARIS & TEHRAN</small>
                </a>
            </div>

            <nav class="desktop-menu">
                <a href="index.php">خانه</a>
                <a href="shop.php">کالکشن روتین</a>
                <a href="shop.php?cat=serum">سرم‌های درمانی</a>
                <a href="about.php">درباره ما</a>
                <a href="contact.php">مشاوره پوست</a>
            </nav>

            <div class="nav-actions">
                <div class="nav-search-bar">
                    <input type="text" id="searchInput" placeholder="جستجو در محصولات..." onkeyup="searchProductsLive()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <a href="cart.php" class="action-bag-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    <span class="bag-count">۲</span>
                </a>
            </div>
        </div>
    </header>