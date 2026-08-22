function toggleMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    
    if (sidebar && backdrop) {
        sidebar.classList.toggle('active');
        backdrop.classList.toggle('active');
    }
}

function applyAllFilters() {
    let selectedCats = Array.from(document.querySelectorAll('.cat-filter:checked')).map(cb => cb.value.toLowerCase());
    let minPriceVal = document.getElementById('minPriceInput')?.value;
    let maxPriceVal = document.getElementById('maxPriceInput')?.value;

    let minPrice = minPriceVal !== "" && minPriceVal !== undefined ? parseFloat(minPriceVal) : 0;
    let maxPrice = maxPriceVal !== "" && maxPriceVal !== undefined ? parseFloat(maxPriceVal) : Infinity;

    let searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase().trim() : "";
    let sidebarSearchVal = document.getElementById('sidebarSearchInput') ? document.getElementById('sidebarSearchInput').value.toLowerCase().trim() : "";
    let query = searchVal || sidebarSearchVal;

    let cards = document.querySelectorAll('.product-glam-card');
    let visibleCount = 0;

    cards.forEach(card => {
        let cat = card.getAttribute('data-cat') ? card.getAttribute('data-cat').toLowerCase() : "";
        let price = parseFloat(card.getAttribute('data-price')) || 0;
        let title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : "";

        let matchCat = selectedCats.length === 0 || selectedCats.includes(cat);
        let matchPrice = price >= minPrice && price <= maxPrice;
        let matchSearch = query === "" || title.includes(query);

        if (matchCat && matchPrice && matchSearch) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    let countText = document.getElementById('productCountText');
    if (countText) {
        countText.innerText = `نمایش ${visibleCount} محصول درخشش`;
    }
}

function sortProducts() {
    let sortValue = document.getElementById('sortSelect').value;
    let container = document.getElementById('productsContainer');
    if (!container) return;

    let cards = Array.from(container.children);

    if (sortValue === 'price-asc') {
        cards.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
    } else if (sortValue === 'price-desc') {
        cards.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
    }

    cards.forEach(card => container.appendChild(card));
}

function searchProductsLive() {
    applyAllFilters();
}

function openProductDrawer(title, price, imgSrc, desc, variants = [], ingredients = '') {
    const drawer = document.getElementById('luxuryProductDrawer');
    const overlay = document.getElementById('productDrawerOverlay');
    
    document.getElementById('drawerTitle').innerText = title;
    document.getElementById('drawerPrice').innerText = price;
    document.getElementById('drawerImg').src = imgSrc;
    document.getElementById('drawerDesc').innerText = desc;
    document.getElementById('productQty').value = 1;

    const variantsContainer = document.getElementById('drawerVariantsContainer');
    const variantsBlock = document.getElementById('drawerVariantsBlock');
    if (variants.length > 0) {
        variantsBlock.style.display = 'block';
        variantsContainer.innerHTML = variants.map((v, i) => `
            <div class="variant-chip ${i === 0 ? 'active' : ''}" onclick="selectVariant(this)">${v}</div>
        `).join('');
    } else {
        variantsBlock.style.display = 'none';
    }

    document.getElementById('drawerIngredients').innerText = ingredients || 'ترکیبات ارگانیک و بیوتکنولوژی اختصاصی گلوریا.';

    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
    }
}

function selectVariant(element) {
    document.querySelectorAll('.variant-chip').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function closeProductDrawer() {
    const drawer = document.getElementById('luxuryProductDrawer');
    const overlay = document.getElementById('productDrawerOverlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function incrementQty() {
    let qty = document.getElementById('productQty');
    if (qty) qty.value = parseInt(qty.value) + 1;
}

function decrementQty() {
    let qty = document.getElementById('productQty');
    if (qty && parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

function addToCartSuccess() {
    alert('محصول با موفقیت به سبد روتین اضافه شد.');
    closeProductDrawer();
}

window.addEventListener('load', () => {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        tl.fromTo('.hero-text-side > *',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
        ).fromTo('.main-portrait-card',
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
            "-=0.6"
        );

        gsap.fromTo('.highlight-item',
            { y: 30, opacity: 0 },
            {
                scrollTrigger: { trigger: '.aesthetic-highlights', start: 'top 85%' },
                y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out'
            }
        );

        gsap.fromTo('.step-card',
            { y: 35, opacity: 0 },
            {
                scrollTrigger: { trigger: '.steps-flow-grid', start: 'top 80%' },
                y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out'
            }
        );

        gsap.fromTo('.cat-card-modern',
            { y: 40, opacity: 0 },
            {
                scrollTrigger: { trigger: '.cat-pill-grid', start: 'top 80%' },
                y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out'
            }
        );

        gsap.fromTo('.product-glam-card',
            { y: 40, opacity: 0 },
            {
                scrollTrigger: { trigger: '.aesthetic-product-grid', start: 'top 85%' },
                y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out'
            }
        );

        gsap.fromTo('.ing-box',
            { y: 30, opacity: 0 },
            {
                scrollTrigger: { trigger: '.ing-grid', start: 'top 85%' },
                y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out'
            }
        );

        setTimeout(() => { ScrollTrigger.refresh(); }, 400);
    }
});