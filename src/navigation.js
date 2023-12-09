import { getPermalink, getBlogPermalink } from './utils/permalinks';
// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    // text: 'Episodes',
    // links: [
    //   {
    //     text: 'Episode List',
    //     href: getBlogPermalink(),
    //   },
    // {
    //   text: 'Article',
    //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    // },
    // {
    //   text: 'Article (with MDX)',
    //   href: getPermalink('markdown-elements-demo-post', 'post'),
    // },
    // {
    //   text: 'Category Page',
    //   href: getPermalink('tutorials', 'category'),
    // },
    // {
    //   text: 'Tag Page',
    //   href: getPermalink('astro', 'tag'),
    // },
    //   ],
    // },
    {
      text: 'Episodes',
      href: getPermalink('/episodes'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Support',
      href: getPermalink('/support'),
    },
    {
      text: 'Books',
      href: getPermalink('/books'),
    },
    {
      text: 'Resources',
      href: getPermalink('/resources'),
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: 'Subscribe', href: 'https://podnews.net/podcast/i7h7d', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Subscribe',
      links: [
        { text: 'Podcast Index', href: 'https://podcastindex.org/podcast/452056' },
        { text: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/war-yankee-overland/id1522169260' },
        {
          text: 'Amazon Podcasts',
          href: 'https://music.amazon.com/podcasts/992ad074-6693-4521-b97e-fb46ecfb10fa/war-yankee---overland',
        },
        { text: 'TuneIn', href: 'https://tunein.com/podcasts/Education-Podcasts/War-Yankee-p1345650/' },
        {
          text: 'Google Podcasts',
          href: 'https://podcasts.google.com/feed/aHR0cHM6Ly93YXJ5YW5rZWUubGlic3luLmNvbS9yc3M',
        },
        { text: 'Spotify', href: 'https://open.spotify.com/show/11DdsrFO3YzN21OCcUd00b' },
      ],
    },
    {
      title: 'Show Infomation',
      links: [
        { text: 'All Episodes', href: getBlogPermalink() },
        { text: 'About the Show', href: getPermalink('/about') },
        { text: 'Support the Show', href: getPermalink('/support') },
        { text: 'Books', href: getPermalink('/books') },
        { text: 'Resources', href: getPermalink('/resources') },
      ],
    },
    {
      title: 'Podcasting 2.0',
      links: [
        { text: 'Steno', href: 'https://www.steno.fm/show/a6f0272c-6f75-5503-845a-cc8966a63bec' },
        { text: 'Podverse', href: 'https://podverse.fm/podcast/RuqE6R8WRj3' },
        { text: 'Podfans', href: 'https://podfans.fm/war-yankee-overland' },
        { text: 'OP3 Stats', href: 'https://op3.dev/show/a6f0272c-6f75-5503-845a-cc8966a63bec' },
        { text: 'Find a Player', href: 'https://podnews.net/podcast/i7h7d' },
        { text: 'RSS Feed', href: 'https://storage.googleapis.com/feeds.oncetold.net/80000013.rss' },
      ],
    },
    {
      title: 'Support the Show',
      links: [
        { text: 'Buy Me A Coffee', href: 'https://www.buymeacoffee.com/waryankee' },
        { text: 'Buy A Book', href: './books' },
        { text: 'American Battlefield Trust', href: 'https://battlefields.org' },
        { text: 'Review the Show', href: 'https://podcasts.apple.com/us/podcast/war-yankee-overland/id1522169260' },
        { text: 'Start Your Own Podcast', href: 'https://oncetold.us' },
        { text: 'Podwrecked', href: 'https://podwrecked.com' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    {
      ariaLabel: 'RSS',
      icon: 'tabler:rss',
      href: 'https://storage.googleapis.com/feeds.oncetold.net/80000013.rss',
    },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
  &copy; Copyright 2023. <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://waryankee.com/"> War Yankee</a> and <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://oncetold.us/"> Oncetold</a>. All rights reserved.
  `,
};
