export default defineAppConfig({
  docus: {
    title: 'Bromo.app Docs',
    description: 'Documentation on using bromo.app.',
    image: 'https://Bromo.app/homepage/assets/screenshot.png',
    socials: {
      twitter: 'bromoapp',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://bromo.app',
          icon: 'IconNuxtLabs'
        }
      ]
    }
  }
})
