import { defineConfig } from 'vitepress';

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'System Design',
  themeConfig: {
    logo: '/book.svg',
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/helloanoop/system-design-book' }
    ],
    editLink: {
      pattern: 'https://github.com/helloanoop/system-design-book/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
  }
});

function sidebar() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'Role of System Design Interviews', link: '/role-of-system-design-interviews' },
        { text: 'Temptation of Complexity', link: '/temptation-of-complexity' }
      ]
    },
    {
      text: 'Interview',
      collapsible: true,
      items: [
        { text: 'Guideline', link: '/interview/guideline' }
      ]
    },
    {
      text: 'Concepts',
      collapsible: true,
      items: [
        { text: 'GeoHash', link: '/concepts/geohash' }
      ]
    }
  ];
}
