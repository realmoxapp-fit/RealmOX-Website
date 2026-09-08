(function () {
  const config = window.REALMOX_CONFIG || {};
  const base = String(config.apiBaseUrl || '').replace(/\/$/, '');

  window.realmoxApi = async function (path, options = {}) {
    if (!base) throw new Error('RealmOX API URL is not configured.');
    const response = await fetch(base + path, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
    let data = null;
    try { data = await response.json(); } catch (_) {}
    if (!response.ok) {
      const detail = data && (data.detail || data.message);
      throw new Error(detail || `Request failed (HTTP ${response.status}).`);
    }
    return data;
  };

  window.showStatus = function (el, message, ok) {
    el.textContent = message;
    el.className = `status show ${ok ? 'ok' : 'error'}`;
  };
})();
