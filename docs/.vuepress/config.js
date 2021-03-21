module.exports = {
    title: 'Game Development Learning Path',
    description: "My Game Development Learning Path from zero",
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        repo: 'https://github.com/msriki12/unity-path-vuepress.git',
        editLinks: false,
        docsDir: 'docs',
        docsBranch: 'master',
        locales: {
            '/': {
                selectText: 'Idiomas',
                label: 'Español',
                ariaLabel: 'Idiomas',
                editLinkText: 'Editar esta página en GitHub',
                algolia: {},
                sidebar: [
                    ['/', 'Home'],
                    ['/introduction/', "Introducción"],
                    ['/unity/', "Unity"]
                ]
            },
            '/en/': {
                selectText: 'Idiomas',
                label: 'Inglés',
                editLinkText: 'Edit this page on GitHub',
                algolia: {},
                sidebar: [
                    ['/en/', 'Home'],
                    ['/en/introduction/', "Introduction"],
                    ['/en/unity/', "Unity"]
                ]
            }
        }
    },
    locales: {
        '/': {
            lang: 'es-ES',
            title: 'Plan de aprendizaje en Game Dev',
            description: 'Mi ruta de aprendizaje en desarrollo de videojuegos'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Game Development Learning Path',
            description: 'My Game Development Learning Path from zero'
        }
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}