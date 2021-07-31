(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li.last');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem('x');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [{
    logo: 'https://github.com/favicon.ico',
    url: 'https://github.com'
  }, {
    logo: 'https://zhihu.com/favicon.ico',
    url: 'https://zhihu.com'
  }, {
    logo: 'https://cnodejs.org/favicon.ico',
    url: 'cnodejs.org'
  }, {
    logo: 'https://cn.vuejs.org/favicon.ico',
    url: 'vuejs.org'
  }];
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xhr = new XMLHttpRequest();
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.last)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap.forEach((node, index) => {
      const $li = $(`
        <li>
          <div class="site">
            <div class="logo">
            <span id="logoText">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)[0].toUpperCase()}</span>
            <image class="siteIcon" src="${node.logo}" style="display: none;">
            </div >
            <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>
            <div class="close">
            <svg class="icon">
            <use xlink:href="#icon-close"></use>
        </svg>
            </div>
          </div >
      </li >
            `).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        // 阻止冒泡
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt('请输入你要输入的网址');
    if (url.indexOf('http') !== 0) {
      url = 'https://' + url;
    }
    console.log(url);
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap.push({
      logo: `https://${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)}/favicon.ico`,
      url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  });
  document.addEventListener("load", function (e) {
    const elem = e.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.parentNode.children[1].style.display = 'block';
      elem.parentNode.children[0].style.display = 'none';
    }
  }, true);
  window.onbeforeunload = () => {
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap);
    localStorage.setItem('x', string);
  };
  $(document).on('keypress', e => {
    const {key} = e;
    for (let i = 0; i < $16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap.length; i++) {
      if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap[i].logo.toLowerCase() === key) {
        window.open($16b5ad875ae907e2f7f79e7b8fe116cc$var$hasMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.0af8faa8.js.map
