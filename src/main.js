const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hasMap = xObject || [
    {
        logo: 'f',
        url: 'https://www.figma.com/'
    },
    {
        logo: 'g',
        url: 'https://github.com/'
    },
    {
        logo: 'i',
        url: 'https://www.iconfont.cn/'
    },
    {
        logo: 'z',
        url: 'https://www.zhihu.com/'
    },
]

const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')
}
const render = () => {
    $siteList.find('li:not(.last)').remove()
    hasMap.forEach((node, index) => {
        const $li = $(`
        <li>
          <div class="site">
            <div class="logo">
              ${node.logo[0]}
            </div >
            <div class="link">${simplifyUrl(node.url)}</div>
            <div class="close">
            <svg class="icon">
            <use xlink:href="#icon-close"></use>
        </svg>
            </div>
          </div >
      </li >
            `).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation() //阻止冒泡
            hasMap.splice(index, 1)
            render()
        })
    })
}

render()

$('.addButton')
    .on('click', () => {
        let url = window.prompt('请输入你要输入的网址')
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        console.log(url)
        hasMap.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            url: url
        })
        render()
    })
window.onbeforeunload = () => {
    const string = JSON.stringify(hasMap)
    localStorage.setItem('x', string)
}
$(document).on('keypress', (e) => {
    const { key } = e
    for (let i = 0; i < hasMap.length; i++) {
        if (hasMap[i].logo.toLowerCase() === key) {
            window.open(hasMap[i].url)
        }
    }
})