// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Episodes',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Support',
      href: getPermalink('/support'),
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Sass',
    //       href: getPermalink('/landing/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/landing/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/landing/mobile-app'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features',
    //       href: '#',
    //     },
    //     {
    //       text: 'Pricing',
    //       href: '#',
    //     },
    //     {
    //       text: 'About us',
    //       href: '#',
    //     },
    //     {
    //       text: 'Contact',
    //       href: '#',
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    {
      text: 'Resources',
      href: getPermalink('/resources'),
    },
    {
      text: 'Bibliography',
      href: getPermalink('/bibliography'),
    },
  ],
  actions: [{ type: 'button', text: 'Subscribe', href: 'https://podnews.net/podcast/i7h7d' }],
};

export const footerData = {
  links: [
    {
      title: 'Podcast',
      links: [
        { text: 'Episodes', href: getBlogPermalink() },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Support', href: getPermalink('/support') },
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'Bibliography', href: getPermalink('/bibliography') },
        { text: 'RSS Feed', href: 'https://storage.googleapis.com/feeds.oncetold.net/80000013.rss' },
        { text: 'Find a Player', href: 'https://podnews.net/podcast/i7h7d' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    {
      title: 'Support',
      links: [
        { text: 'Buy Me Coffee', href: 'https://www.buymeacoffee.com/waryankee' },
        { text: 'Buy A Book', href: './resources' },
        { text: 'American Battlefield Trust', href: 'https://battlefields.org' },
        { text: 'Review the Show', href: 'https://podcasts.apple.com/us/podcast/war-yankee-overland/id1522169260' },
      ],
    },
    {
      title: 'Subscribe',
      links: [
        { text: 'Podcast Index', href: 'https://podcastindex.org/podcast/452056' },
        { text: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/war-yankee-overland/id1522169260' },
        { text: 'Spotify', href: 'https://open.spotify.com/show/11DdsrFO3YzN21OCcUd00b' },
        {
          text: 'Amazon Podcasts',
          href: 'https://music.amazon.com/podcasts/992ad074-6693-4521-b97e-fb46ecfb10fa/war-yankee---overland',
        },
        {
          text: 'Google Podcasts',
          href: 'https://podcasts.google.com/feed/aHR0cHM6Ly93YXJ5YW5rZWUubGlic3luLmNvbS9yc3M',
        },
        { text: 'TuneIn', href: 'https://tunein.com/podcasts/Education-Podcasts/War-Yankee-p1345650/' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: 'https://storage.googleapis.com/feeds.oncetold.net/80000013.rss' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    &copy; Copyright 2023. <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://waryankee.com/"> War Yankee</a> and <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://oncetold.us/"> Oncetold</a>. All rights reserved.
  `,
};
