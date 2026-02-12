// ===== Little Armenias - Main Application =====

let map;
let markers = [];
let activeCategory = 'all';
let currentView = 'map';

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    initData();
    initMap();
    applyFilters();
    renderList();
    renderAdmin();
});

// ===== Map =====
function initMap() {
    map = L.map('map', {
        center: [40.18, 44.51], // Yerevan
        zoom: 3,
        zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    loadMarkers();
}

function loadMarkers() {
    // Clear existing markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const pois = getFilteredPOIs();

    pois.forEach(poi => {
        const marker = createMarker(poi);
        marker.addTo(map);
        markers.push(marker);
    });
}

function createMarker(poi) {
    const iconMap = {
        church: 'fa-church',
        monument: 'fa-monument',
        museum: 'fa-museum',
        restaurant: 'fa-utensils',
        cultural_center: 'fa-landmark'
    };

    const icon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker ${poi.category}"><i class="fas ${iconMap[poi.category] || 'fa-map-pin'}"></i></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const marker = L.marker([poi.lat, poi.lng], { icon });
    marker.bindPopup(() => createPopupContent(poi), { maxWidth: 320, minWidth: 260 });
    return marker;
}

function createPopupContent(poi) {
    const lang = currentLang;
    const name = poi.name[lang] || poi.name.en;
    const desc = poi.description[lang] || poi.description.en;
    const avgRating = poi.ratings.length ? (poi.ratings.reduce((a, b) => a + b, 0) / poi.ratings.length).toFixed(1) : '—';
    const stars = poi.ratings.length ? renderStarsHTML(Math.round(poi.ratings.reduce((a, b) => a + b, 0) / poi.ratings.length)) : '';
    const categoryLabel = t('category.' + poi.category);

    let html = '<div class="popup-content">';

    if (poi.image) {
        html += `<img class="popup-image" src="${escapeHtml(poi.image)}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">`;
    }

    html += '<div class="popup-body">';

    if (!poi.verified) {
        html += `<div class="unverified-badge"><i class="fas fa-exclamation-triangle"></i> ${t('detail.unverified')}</div>`;
    }

    html += `<span class="popup-category ${poi.category}">${escapeHtml(categoryLabel)}</span>`;
    html += `<div class="popup-title">${escapeHtml(name)}</div>`;
    html += `<div class="popup-location"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(poi.city)}, ${escapeHtml(poi.country)}</div>`;
    html += `<div class="popup-desc">${escapeHtml(desc)}</div>`;

    if (poi.ratings.length) {
        html += `<div class="popup-rating"><span class="popup-stars">${stars}</span> <span class="popup-rating-count">${avgRating} (${poi.ratings.length})</span></div>`;
    }

    html += `<div class="popup-actions">`;
    html += `<button class="popup-btn" onclick="openDetailModal(${poi.id})"><i class="fas fa-info-circle"></i> ${t('popup.details')}</button>`;
    html += `<button class="popup-btn" onclick="openCorrectionModal(${poi.id})"><i class="fas fa-edit"></i> ${t('popup.correct')}</button>`;
    html += `<button class="popup-btn" onclick="openReportModal(${poi.id})"><i class="fas fa-flag"></i> ${t('popup.report')}</button>`;
    html += `<button class="popup-btn" onclick="sharePOI(${poi.id})"><i class="fas fa-share-alt"></i> ${t('popup.share')}</button>`;
    html += `</div>`;

    html += '</div></div>';
    return html;
}

function renderStarsHTML(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return html;
}

// ===== Filtering =====
function getFilteredPOIs() {
    const pois = getPOIs();
    const search = document.getElementById('searchInput')?.value?.toLowerCase() || '';

    return pois.filter(poi => {
        // Category filter
        if (activeCategory !== 'all' && poi.category !== activeCategory) return false;

        // Search filter
        if (search) {
            const name = (poi.name[currentLang] || poi.name.en || '').toLowerCase();
            const nameEn = (poi.name.en || '').toLowerCase();
            const country = (poi.country || '').toLowerCase();
            const city = (poi.city || '').toLowerCase();
            const desc = (poi.description[currentLang] || poi.description.en || '').toLowerCase();

            if (!name.includes(search) && !nameEn.includes(search) && !country.includes(search) && !city.includes(search) && !desc.includes(search)) {
                return false;
            }
        }

        return true;
    });
}

function toggleCategory(btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-category');
    applyFilters();
}

function applyFilters() {
    loadMarkers();
    if (currentView === 'list') {
        renderList();
    }
}

// ===== Navigation =====
function navigateTo(view) {
    currentView = view;

    // Update views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view' + view.charAt(0).toUpperCase() + view.slice(1)).classList.add('active');

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-view') === view);
    });

    // Show/hide filter bar (only for map and list)
    const filterBar = document.getElementById('filterBar');
    if (view === 'map' || view === 'list') {
        filterBar.style.display = 'block';
    } else {
        filterBar.style.display = 'none';
    }

    // Refresh content
    if (view === 'map') {
        setTimeout(() => map.invalidateSize(), 100);
        loadMarkers();
    } else if (view === 'list') {
        renderList();
    } else if (view === 'admin') {
        renderAdmin();
    }
}

function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
}

// ===== List View =====
function renderList() {
    const pois = getFilteredPOIs();
    const container = document.getElementById('listContent');

    if (pois.length === 0) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>${t('list.empty')}</p></div>`;
        return;
    }

    // Group by country then city
    const grouped = {};
    pois.forEach(poi => {
        if (!grouped[poi.country]) grouped[poi.country] = {};
        if (!grouped[poi.country][poi.city]) grouped[poi.country][poi.city] = [];
        grouped[poi.country][poi.city].push(poi);
    });

    let html = '';
    const countries = Object.keys(grouped).sort();

    countries.forEach(country => {
        html += `<div class="country-group">`;
        html += `<div class="country-header" onclick="this.classList.toggle('collapsed'); this.nextElementSibling.classList.toggle('hidden')">`;
        html += `<i class="fas fa-globe-americas"></i> ${escapeHtml(country)} <i class="fas fa-chevron-down"></i>`;
        html += `</div>`;
        html += `<div class="country-body">`;

        const cities = Object.keys(grouped[country]).sort();
        cities.forEach(city => {
            html += `<div class="city-group">`;
            html += `<div class="city-header"><i class="fas fa-city"></i> ${escapeHtml(city)}</div>`;

            grouped[country][city].forEach(poi => {
                const name = poi.name[currentLang] || poi.name.en;
                const desc = poi.description[currentLang] || poi.description.en;
                const avgRating = poi.ratings.length ? (poi.ratings.reduce((a, b) => a + b, 0) / poi.ratings.length).toFixed(1) : null;
                const categoryLabel = t('category.' + poi.category);

                html += `<div class="poi-card" onclick="openDetailModal(${poi.id})">`;

                if (poi.image) {
                    html += `<img class="poi-card-image" src="${escapeHtml(poi.image)}" alt="${escapeHtml(name)}" onerror="this.classList.add('placeholder'); this.outerHTML='<div class=\\'poi-card-image placeholder\\'><i class=\\'fas fa-image\\'></i></div>'">`;
                } else {
                    html += `<div class="poi-card-image placeholder"><i class="fas fa-image"></i></div>`;
                }

                html += `<div class="poi-card-body">`;
                html += `<div class="poi-card-title">${escapeHtml(name)}`;
                if (!poi.verified) {
                    html += ` <span class="unverified-badge" style="display:inline;font-size:10px;"><i class="fas fa-exclamation-triangle"></i> ${t('detail.unverified')}</span>`;
                }
                html += `</div>`;
                html += `<div class="poi-card-category">${escapeHtml(categoryLabel)}</div>`;
                html += `<div class="poi-card-desc">${escapeHtml(desc)}</div>`;
                if (avgRating) {
                    html += `<div class="poi-card-rating"><span class="stars">${renderStarsHTML(Math.round(parseFloat(avgRating)))}</span> <span class="count">${avgRating}</span></div>`;
                }
                html += `</div></div>`;
            });

            html += `</div>`;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

// ===== Detail Modal =====
function openDetailModal(id) {
    const pois = getPOIs();
    const poi = pois.find(p => p.id === id);
    if (!poi) return;

    const lang = currentLang;
    const name = poi.name[lang] || poi.name.en;
    const desc = poi.description[lang] || poi.description.en;
    const avgRating = poi.ratings.length ? (poi.ratings.reduce((a, b) => a + b, 0) / poi.ratings.length) : 0;
    const categoryLabel = t('category.' + poi.category);

    let html = '';

    if (poi.image) {
        html += `<img class="modal-image" src="${escapeHtml(poi.image)}" alt="${escapeHtml(name)}" onerror="this.style.display='none'">`;
    }

    html += `<div class="detail-header">`;
    if (!poi.verified) {
        html += `<div class="unverified-badge"><i class="fas fa-exclamation-triangle"></i> ${t('detail.unverified')}</div>`;
    }
    html += `<span class="popup-category ${poi.category}">${escapeHtml(categoryLabel)}</span>`;
    html += `<h2 class="detail-title">${escapeHtml(name)}</h2>`;
    html += `<div class="detail-location"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(poi.city)}, ${escapeHtml(poi.country)}</div>`;
    html += `</div>`;

    html += `<div class="detail-desc">${escapeHtml(desc)}</div>`;

    // Actions
    html += `<div class="detail-actions">`;
    html += `<button class="btn btn-sm btn-secondary" onclick="openCorrectionModal(${poi.id})"><i class="fas fa-edit"></i> ${t('popup.correct')}</button>`;
    html += `<button class="btn btn-sm btn-secondary" onclick="openReportModal(${poi.id})"><i class="fas fa-flag"></i> ${t('popup.report')}</button>`;
    html += `<button class="btn btn-sm btn-secondary" onclick="sharePOI(${poi.id})"><i class="fas fa-share-alt"></i> ${t('popup.share')}</button>`;
    html += `</div>`;

    // Share links
    html += `<div>`;
    html += `<strong>${t('detail.share')}</strong>`;
    html += `<div class="share-links">`;
    const shareText = encodeURIComponent(`${name} - ${poi.city}, ${poi.country}`);
    const shareUrl = encodeURIComponent(window.location.href.split('?')[0] + `?poi=${poi.id}`);
    html += `<a class="share-link" href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>`;
    html += `<a class="share-link" href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>`;
    html += `<a class="share-link" href="mailto:?subject=${shareText}&body=${shareUrl}" target="_blank" rel="noopener"><i class="fas fa-envelope"></i></a>`;
    html += `<span class="share-link" onclick="copyLink(${poi.id})" title="Copy link"><i class="fas fa-link"></i></span>`;
    html += `</div></div>`;

    // Rating
    html += `<div class="rating-section">`;
    html += `<h4>${t('detail.rate')}</h4>`;
    html += `<div class="star-rating" id="starRating">`;
    for (let i = 1; i <= 5; i++) {
        const isActive = i <= Math.round(avgRating) ? 'active' : '';
        html += `<span class="star ${isActive}" data-value="${i}" onclick="ratePOI(${poi.id}, ${i})" onmouseover="hoverStars(${i})" onmouseout="resetStars(${poi.id})"><i class="fas fa-star"></i></span>`;
    }
    html += `</div>`;
    if (poi.ratings.length) {
        html += `<span style="font-size:13px;color:var(--text-light)">${avgRating.toFixed(1)} / 5 (${poi.ratings.length} ratings)</span>`;
    }
    html += `</div>`;

    // Comments
    html += `<div class="comments-section">`;
    html += `<h4>${t('detail.comments')} (${poi.comments.length})</h4>`;

    poi.comments.forEach(c => {
        html += `<div class="comment">`;
        html += `<div class="comment-header"><span class="comment-author">${escapeHtml(c.author)}</span><span class="comment-date">${c.date}</span></div>`;
        html += `<div class="comment-text">${escapeHtml(c.text)}</div>`;
        html += `</div>`;
    });

    html += `<div class="comment-form">`;
    html += `<input type="text" id="commentAuthor" placeholder="Name" style="max-width:120px">`;
    html += `<input type="text" id="commentText" placeholder="${t('detail.addComment')}">`;
    html += `<button class="btn btn-sm btn-primary" onclick="addComment(${poi.id})">${t('detail.commentBtn')}</button>`;
    html += `</div>`;
    html += `</div>`;

    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('detailModal').classList.remove('hidden');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

function closeModal(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.add('hidden');
    }
}

// ===== Rating =====
function ratePOI(id, value) {
    const pois = getPOIs();
    const poi = pois.find(p => p.id === id);
    if (poi) {
        poi.ratings.push(value);
        savePOIs(pois);
        openDetailModal(id);
        loadMarkers();
    }
}

function hoverStars(value) {
    document.querySelectorAll('#starRating .star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.value) <= value);
    });
}

function resetStars(id) {
    const pois = getPOIs();
    const poi = pois.find(p => p.id === id);
    if (!poi) return;
    const avg = poi.ratings.length ? Math.round(poi.ratings.reduce((a, b) => a + b, 0) / poi.ratings.length) : 0;
    document.querySelectorAll('#starRating .star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.value) <= avg);
    });
}

// ===== Comments =====
function addComment(id) {
    const author = document.getElementById('commentAuthor').value.trim() || 'Anonymous';
    const text = document.getElementById('commentText').value.trim();
    if (!text) return;

    const pois = getPOIs();
    const poi = pois.find(p => p.id === id);
    if (poi) {
        poi.comments.push({
            author,
            text,
            date: new Date().toISOString().split('T')[0]
        });
        savePOIs(pois);
        openDetailModal(id);
    }
}

// ===== Submit New POI =====
function handleSubmitPOI(event) {
    event.preventDefault();

    const newPOI = {
        id: getNextId(),
        name: {
            en: document.getElementById('poiNameEn').value.trim(),
            fr: document.getElementById('poiNameFr').value.trim() || document.getElementById('poiNameEn').value.trim(),
            hy: document.getElementById('poiNameHy').value.trim() || document.getElementById('poiNameEn').value.trim()
        },
        category: document.getElementById('poiCategory').value,
        country: document.getElementById('poiCountry').value.trim(),
        city: document.getElementById('poiCity').value.trim(),
        lat: parseFloat(document.getElementById('poiLat').value),
        lng: parseFloat(document.getElementById('poiLng').value),
        description: {
            en: document.getElementById('poiDescEn').value.trim(),
            fr: document.getElementById('poiDescFr').value.trim() || document.getElementById('poiDescEn').value.trim(),
            hy: document.getElementById('poiDescHy').value.trim() || document.getElementById('poiDescEn').value.trim()
        },
        image: document.getElementById('poiImage').value.trim(),
        verified: false,
        ratings: [],
        comments: []
    };

    const pending = getPending();
    pending.push(newPOI);
    savePending(pending);

    document.getElementById('submitForm').reset();
    showToast(t('submit.success'), 'success');
}

// ===== Correction =====
function openCorrectionModal(id) {
    document.getElementById('correctionPoiId').value = id;
    document.getElementById('correctionModal').classList.remove('hidden');
}

function closeCorrectionModal() {
    document.getElementById('correctionModal').classList.add('hidden');
}

function handleCorrection(event) {
    event.preventDefault();

    const correction = {
        poiId: parseInt(document.getElementById('correctionPoiId').value),
        field: document.getElementById('correctionField').value,
        details: document.getElementById('correctionDetails').value.trim(),
        date: new Date().toISOString().split('T')[0]
    };

    const corrections = getCorrections();
    corrections.push(correction);
    saveCorrections(corrections);

    closeCorrectionModal();
    document.getElementById('correctionForm').reset();
    showToast(t('correction.success'), 'success');
}

// ===== Report =====
function openReportModal(id) {
    document.getElementById('reportPoiId').value = id;
    document.getElementById('reportModal').classList.remove('hidden');
}

function closeReportModal() {
    document.getElementById('reportModal').classList.add('hidden');
}

function handleReport(event) {
    event.preventDefault();

    const report = {
        poiId: parseInt(document.getElementById('reportPoiId').value),
        reason: document.getElementById('reportReason').value,
        details: document.getElementById('reportDetails').value.trim(),
        date: new Date().toISOString().split('T')[0]
    };

    const reports = getReports();
    reports.push(report);
    saveReports(reports);

    closeReportModal();
    document.getElementById('reportForm').reset();
    showToast(t('report.success'), 'success');
}

// ===== Share =====
function sharePOI(id) {
    const pois = getPOIs();
    const poi = pois.find(p => p.id === id);
    if (!poi) return;

    const name = poi.name[currentLang] || poi.name.en;
    const url = window.location.href.split('?')[0] + `?poi=${poi.id}`;

    if (navigator.share) {
        navigator.share({
            title: name,
            text: `${name} - ${poi.city}, ${poi.country}`,
            url: url
        }).catch(() => {});
    } else {
        copyToClipboard(url);
        showToast('Link copied to clipboard!', 'success');
    }
}

function copyLink(id) {
    const url = window.location.href.split('?')[0] + `?poi=${id}`;
    copyToClipboard(url);
    showToast('Link copied!', 'success');
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
}

// ===== Admin Panel =====
function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-content').forEach(c => c.classList.add('hidden'));

    const tabs = { pending: 0, manage: 1, comments: 2, data: 3 };
    document.querySelectorAll('.admin-tab')[tabs[tab]].classList.add('active');
    document.getElementById('admin' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.remove('hidden');

    renderAdmin();
}

function renderAdmin() {
    renderPendingSubmissions();
    renderManageLocations();
    renderModerateComments();
}

function renderPendingSubmissions() {
    const pending = getPending();
    const container = document.getElementById('pendingList');

    if (pending.length === 0) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-inbox"></i><p>${t('admin.noPending')}</p></div>`;
        return;
    }

    let html = '';
    pending.forEach((poi, index) => {
        const name = poi.name[currentLang] || poi.name.en;
        const desc = poi.description[currentLang] || poi.description.en;
        const categoryLabel = t('category.' + poi.category);

        html += `<div class="admin-card">`;
        html += `<div class="admin-card-body">`;
        html += `<div class="admin-card-title">${escapeHtml(name)}</div>`;
        html += `<div class="admin-card-meta">${escapeHtml(categoryLabel)} &bull; ${escapeHtml(poi.city)}, ${escapeHtml(poi.country)} &bull; (${poi.lat.toFixed(4)}, ${poi.lng.toFixed(4)})</div>`;
        html += `<div class="admin-card-desc">${escapeHtml(desc)}</div>`;
        html += `<div class="admin-card-actions">`;
        html += `<button class="btn btn-sm btn-success" onclick="approvePending(${index})"><i class="fas fa-check"></i> Approve</button>`;
        html += `<button class="btn btn-sm btn-danger" onclick="rejectPending(${index})"><i class="fas fa-times"></i> Reject</button>`;
        html += `</div>`;
        html += `</div></div>`;
    });

    container.innerHTML = html;
}

function approvePending(index) {
    const pending = getPending();
    if (index < 0 || index >= pending.length) return;

    const poi = pending.splice(index, 1)[0];
    poi.verified = true;
    const pois = getPOIs();
    pois.push(poi);
    savePOIs(pois);
    savePending(pending);

    showToast(t('admin.approved'), 'success');
    renderAdmin();
    loadMarkers();
}

function rejectPending(index) {
    const pending = getPending();
    if (index < 0 || index >= pending.length) return;

    pending.splice(index, 1);
    savePending(pending);

    showToast(t('admin.rejected'), 'warning');
    renderAdmin();
}

function renderManageLocations() {
    const pois = getPOIs();
    const container = document.getElementById('manageList');

    let html = '';
    pois.forEach(poi => {
        const name = poi.name[currentLang] || poi.name.en;
        const categoryLabel = t('category.' + poi.category);

        html += `<div class="admin-card">`;
        html += `<div class="admin-card-body">`;
        html += `<div class="admin-card-title">${escapeHtml(name)}`;
        if (!poi.verified) {
            html += ` <span class="unverified-badge"><i class="fas fa-exclamation-triangle"></i> ${t('detail.unverified')}</span>`;
        }
        html += `</div>`;
        html += `<div class="admin-card-meta">${escapeHtml(categoryLabel)} &bull; ${escapeHtml(poi.city)}, ${escapeHtml(poi.country)}</div>`;
        html += `<div class="admin-card-actions">`;
        if (!poi.verified) {
            html += `<button class="btn btn-sm btn-success" onclick="verifyPOI(${poi.id})"><i class="fas fa-check"></i> Verify</button>`;
        }
        html += `<button class="btn btn-sm btn-danger" onclick="deletePOI(${poi.id})"><i class="fas fa-trash"></i> Delete</button>`;
        html += `</div>`;
        html += `</div></div>`;
    });

    container.innerHTML = html || `<div class="empty-state"><i class="fas fa-map-marker-alt"></i><p>No locations.</p></div>`;
}

function verifyPOI(id) {
    const pois = getPOIs();
    const poi = pois.find(p => p.id === id);
    if (poi) {
        poi.verified = true;
        savePOIs(pois);
        renderAdmin();
        loadMarkers();
        showToast(t('admin.approved'), 'success');
    }
}

function deletePOI(id) {
    let pois = getPOIs();
    pois = pois.filter(p => p.id !== id);
    savePOIs(pois);
    renderAdmin();
    loadMarkers();
    showToast(t('admin.deleted'), 'warning');
}

function renderModerateComments() {
    const pois = getPOIs();
    const container = document.getElementById('commentsList');

    let html = '';
    pois.forEach(poi => {
        if (poi.comments.length === 0) return;

        const name = poi.name[currentLang] || poi.name.en;

        poi.comments.forEach((comment, cIndex) => {
            html += `<div class="admin-card">`;
            html += `<div class="admin-card-body">`;
            html += `<div class="admin-card-title">${escapeHtml(name)}</div>`;
            html += `<div class="admin-card-meta">by ${escapeHtml(comment.author)} on ${comment.date}</div>`;
            html += `<div class="admin-card-desc">"${escapeHtml(comment.text)}"</div>`;
            html += `<div class="admin-card-actions">`;
            html += `<button class="btn btn-sm btn-danger" onclick="deleteComment(${poi.id}, ${cIndex})"><i class="fas fa-trash"></i> Delete</button>`;
            html += `</div>`;
            html += `</div></div>`;
        });
    });

    container.innerHTML = html || `<div class="empty-state"><i class="fas fa-comments"></i><p>${t('admin.noComments')}</p></div>`;
}

function deleteComment(poiId, commentIndex) {
    const pois = getPOIs();
    const poi = pois.find(p => p.id === poiId);
    if (poi && poi.comments[commentIndex]) {
        poi.comments.splice(commentIndex, 1);
        savePOIs(pois);
        renderAdmin();
    }
}

// ===== Data Export/Import =====
function exportData() {
    const data = {
        pois: getPOIs(),
        pending: getPending(),
        corrections: getCorrections(),
        reports: getReports(),
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `little-armenias-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            if (data.pois && Array.isArray(data.pois)) {
                savePOIs(data.pois);
            }
            if (data.pending && Array.isArray(data.pending)) {
                savePending(data.pending);
            }
            if (data.corrections && Array.isArray(data.corrections)) {
                saveCorrections(data.corrections);
            }
            if (data.reports && Array.isArray(data.reports)) {
                saveReports(data.reports);
            }

            showToast(t('admin.imported'), 'success');
            renderAdmin();
            loadMarkers();
        } catch (err) {
            showToast('Invalid JSON file', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== Toast =====
function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ===== Utility =====
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function refreshCurrentView() {
    if (currentView === 'map') {
        loadMarkers();
    } else if (currentView === 'list') {
        renderList();
    } else if (currentView === 'admin') {
        renderAdmin();
    }
}

// ===== URL Query Param - deep link to a POI =====
(function checkDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const poiId = params.get('poi');
    if (poiId) {
        setTimeout(() => openDetailModal(parseInt(poiId)), 500);
    }
})();
