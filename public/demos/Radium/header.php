<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رادیوم بوتیک | Radium Boutique</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleMobileMenu()"></div>

    <aside class="mobile-sidebar" id="mobileSidebar">
        <div class="sidebar-header">
            <div class="brand-logo">
                <div class="logo-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                </div>
                <span class="logo-text">رادیوم بوتیک</span>
            </div>
            <button class="sidebar-close-btn" onclick="toggleMobileMenu()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <div class="sidebar-search">
            <input type="text" id="sidebarSearchInput" placeholder="جستجوی استایل..." onkeyup="searchProductsLive()">
        </div>
        <ul class="sidebar-menu-list">
            <li><a href="index.php">خانه</a></li>
            <li><a href="shop.php">فروشگاه محصولات</a></li>
            <li><a href="shop.php?cat=men">استایل مردانه</a></li>
            <li><a href="shop.php?cat=women">استایل زنانه</a></li>
            <li><a href="shop.php?cat=shoes">کتونی و کفش</a></li>
            <li><a href="about.php">درباره ما</a></li>
            <li><a href="contact.php">تماس با ما</a></li>
        </ul>
    </aside>

    <header class="glass-header">
        <div class="header-content container">
            <div class="header-right-group">
                <button class="mobile-toggle-btn" onclick="toggleMobileMenu()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <a href="index.php" class="brand-logo">
                    <div class="logo-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon></svg>
                    </div>
                    <span class="logo-text">رادیوم بوتیک</span>
                </a>
            </div>

            <nav class="center-nav">
                <a href="index.php">خانه</a>
                <a href="shop.php">فروشگاه</a>
                <a href="shop.php?cat=men">مردانه</a>
                <a href="shop.php?cat=women">زنانه</a>
                <a href="shop.php?cat=shoes">کتونی اورجینال</a>
                <a href="about.php">درباره ما</a>
            </nav>

            <div class="header-actions">
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="جستجوی استایل..." onkeyup="searchProductsLive()">
                    <button>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
                <a href="cart.php" class="icon-btn cart-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span class="badge">۲</span>
                </a>
            </div>
        </div>
    </header>