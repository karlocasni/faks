/* Renders the shared top menu into <div id="site-nav" data-root="../"> from window.FAKS_CATALOG. */
(function () {
  var host = document.getElementById('site-nav');
  if (!host || !window.FAKS_CATALOG) return;
  var root = host.getAttribute('data-root') || '';
  var here = host.getAttribute('data-current') || '';
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var menus = window.FAKS_CATALOG.map(function (sub) {
    var items = sub.scripts.map(function (s) {
      var path = sub.id + '/' + s.href;
      return '<a role="menuitem" href="' + root + path + '"' + (path === here ? ' aria-current="page"' : '') + '>' +
        '<span class="sn-ch">' + esc(s.chapters) + '</span><span class="sn-t">' + esc(s.title) + '</span></a>';
    }).join('');
    var open = here.indexOf(sub.id + '/') === 0;
    return '<details class="sn-menu"><summary' + (open ? ' class="on"' : '') + '>' + esc(sub.name) + '</summary>' +
      '<div class="sn-drop" role="menu">' + items +
      '<a role="menuitem" class="sn-all" href="' + root + sub.id + '/">All ' + esc(sub.name) + ' scripts →</a></div></details>';
  }).join('');

  host.className = 'site-nav';
  host.innerHTML = '<div class="sn-in"><a class="sn-brand" href="' + root + '">faks</a><nav class="sn-menus" aria-label="Subjects">' + menus + '</nav></div>';

  document.addEventListener('click', function (e) {
    host.querySelectorAll('details[open]').forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute('open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') host.querySelectorAll('details[open]').forEach(function (d) { d.removeAttribute('open'); });
  });
})();
