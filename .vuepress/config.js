module.exports = {
    title: "VuePressNetlify",
    locales: {
        '/': {
            lang: 'en-US',
            title: 'VuePress + Netlify',
            description: 'VuePress + Netlify'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'vuepressnetlify.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    themeConfig: {
        docsDir: 'docs',
        repo: 'odomojuli/VuePressNetlify',

        nav: [{
                text: 'Docs',
                link: '/docs/',
            },
            {
                text: 'Admin',
                link: '/admin/#',
            },
            {
                text: 'Netlify CMS',
                link: '/docs/netlifycms.html',
            }

        ]

    }
}
