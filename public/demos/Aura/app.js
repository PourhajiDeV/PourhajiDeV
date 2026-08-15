function toggleMobileMenu() {
    let nav = document.getElementById('mobileMenu');
    if (nav) {
        nav.classList.toggle('active');
    }
}

function toggleMobileMenu() {
    let sidebar = document.getElementById('mobileSidebar');
    let backdrop = document.getElementById('sidebarBackdrop');
    
    if (sidebar && backdrop) {
        sidebar.classList.toggle('active');
        backdrop.classList.toggle('active');
    }
}

function applyAllFilters() {
    let selectedCats = Array.from(document.querySelectorAll('.cat-filter:checked')).map(cb => cb.value.toLowerCase());
    let selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value.toLowerCase());

    let minPriceVal = document.getElementById('minPriceInput').value;
    let maxPriceVal = document.getElementById('maxPriceInput').value;

    let minPrice = minPriceVal !== "" ? parseFloat(minPriceVal) : 0;
    let maxPrice = maxPriceVal !== "" ? parseFloat(maxPriceVal) : Infinity;

    let searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase().trim() : "";

    let cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
        let cat = card.getAttribute('data-cat') ? card.getAttribute('data-cat').toLowerCase() : "";
        let brand = card.getAttribute('data-brand') ? card.getAttribute('data-brand').toLowerCase() : "";
        let price = parseFloat(card.getAttribute('data-price')) || 0;
        let title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : "";

        let matchCat = selectedCats.length === 0 || selectedCats.includes(cat);
        let matchBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
        let matchPrice = price >= minPrice && price <= maxPrice;
        let matchSearch = searchVal === "" || title.includes(searchVal) || brand.includes(searchVal);

        if (matchCat && matchBrand && matchPrice && matchSearch) {
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
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('thumb1').src = imgSrc;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('productQty').value = 1;
    document.getElementById('productModal').style.display = 'flex';
}

function switchModalImage(src, element) {
    document.getElementById('modalImg').src = src;
    if (element) {
        document.querySelectorAll('.modal-thumbs img').forEach(img => img.classList.remove('active'));
        element.classList.add('active');
    }
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function incrementQty() {
    let qty = document.getElementById('productQty');
    qty.value = parseInt(qty.value) + 1;
}

function decrementQty() {
    let qty = document.getElementById('productQty');
    if (parseInt(qty.value) > 1) {
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
