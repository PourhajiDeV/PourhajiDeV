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

    let cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
        let cat = card.getAttribute('data-cat') ? card.getAttribute('data-cat').toLowerCase() : "";
        let price = parseFloat(card.getAttribute('data-price')) || 0;
        let title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : "";

        let matchCat = selectedCats.length === 0 || selectedCats.includes(cat);
        let matchPrice = price >= minPrice && price <= maxPrice;
        let matchSearch = query === "" || title.includes(query);

        if (matchCat && matchPrice && matchSearch) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    let countText = document.getElementById('productCountText');
    if (countText) {
        countText.innerText = `نمایش ${visibleCount} محصول`;
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

function openProductModal(title, price, imgSrc, desc) {
    let modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.innerText = title;
    
    let modalPrice = document.getElementById('modalPrice');
    if (modalPrice) modalPrice.innerText = price;
    
    let modalImg = document.getElementById('modalImg');
    if (modalImg) modalImg.src = imgSrc;
    
    let modalDesc = document.getElementById('modalDesc');
    if (modalDesc) modalDesc.innerText = desc;
    
    let productQty = document.getElementById('productQty');
    if (productQty) productQty.value = 1;
    
    let productModal = document.getElementById('productModal');
    if (productModal) productModal.style.display = 'flex';
}

function closeProductModal() {
    let productModal = document.getElementById('productModal');
    if (productModal) productModal.style.display = 'none';
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
    alert('محصول با موفقیت به سبد خرید اضافه شد.');
    closeProductModal();
}

window.onclick = function(event) {
    let modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
};

window.addEventListener('load', () => {
    const header = document.querySelector('.glass-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (typeof gsap !== 'undefined' && document.querySelector('.hero-fullscreen')) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.hero-parallax-bg img', {
            yPercent: 25,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-fullscreen",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        const tlHero = gsap.timeline();
        tlHero.fromTo('.hero-text-block > *', 
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.1 }
        ).fromTo('.hero-stats-glass', 
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            "-=0.6"
        );

        gsap.utils.toArray('.bento-item').forEach((item) => {
            gsap.fromTo(item, 
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.categories-bento',
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power3.out'
                }
            );
        });

        gsap.fromTo('.lookbook-stage',
            { y: 60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: '.lookbook-immersive',
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out'
            }
        );

        gsap.utils.toArray('.product-card').forEach((card) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out'
                }
            );
        });

        gsap.utils.toArray('.review-card').forEach((card) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.reviews-section',
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power2.out'
                }
            );
        });

        gsap.fromTo('.cta-content',
            { scale: 0.96, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: '.banner-cta',
                    start: "top 80%",
                },
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 800);
    }
});