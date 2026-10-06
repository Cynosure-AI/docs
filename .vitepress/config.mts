import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE ?? '/'

export default defineConfig({
  base,
  title: 'Cynosure',
  description: 'The end-user guide for the Cynosure desktop AI workspace.',
  lang: 'en-US',
  srcExclude: ['README.md'],
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}logo.png` }],
    ['meta', { name: 'theme-color', content: '#070b0f' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap'
    }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: 'Cynosure' },
    siteTitle: 'CYNOSURE',
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
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'Features', link: '/features/chat', activeMatch: '/features/' },
      { text: 'Website', link: 'https://cynosure-ai.github.io/' },
      { text: 'Download', link: 'https://github.com/Cynosure-AI/cynosure-app/releases' }
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
