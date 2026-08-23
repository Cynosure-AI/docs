import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cynosure',
  description: 'The end-user guide for the Cynosure desktop AI workspace.',
  lang: 'en-US',
  srcExclude: ['README.md'],
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#f1d900' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: 'Cynosure' },
    siteTitle: 'Cynosure Docs',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: { buttonText: 'Search docs', buttonAriaLabel: 'Search documentation' }
        }
      }
    },
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Core features', link: '/features/chat' },
      { text: 'Settings', link: '/guide/settings' },
      { text: 'Troubleshooting', link: '/guide/troubleshooting' },
      { text: 'Download ↗', link: 'https://github.com/andreasjhagen/Cynosure/releases' }
    ],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Welcome to Cynosure', link: '/' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'What Cynosure can do', link: '/guide/examples' },
          { text: 'Workspace tour', link: '/guide/workspace' }
        ]
      },
      {
        text: 'Core features',
        items: [
          { text: 'Chat', link: '/features/chat' },
          { text: 'Agents', link: '/features/agents' },
          { text: 'Tools & approvals', link: '/features/tools' },
          { text: 'Memory', link: '/features/memory' },
          { text: 'Scheduled jobs', link: '/features/schedules' },
          { text: 'Artifacts', link: '/features/artifacts' },
          { text: 'Messaging channels', link: '/features/channels' }
        ]
      },
      {
        text: 'Manage Cynosure',
        items: [
          { text: 'Settings', link: '/guide/settings' },
          { text: 'Backup & restore', link: '/guide/backup' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    lastUpdated: { text: 'Updated' },
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',
    footer: {
      message: 'Your AI workspace, under your control.',
      copyright: 'Cynosure documentation'
    }
  },
  markdown: {
    image: { lazyLoading: true },
    lineNumbers: true
  }
})
