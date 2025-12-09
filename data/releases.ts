export interface Release {
  id: string;
  title: string;
  slug: string;
  year: number;
  format: string;
  label?: string;
  coverPath: string;
  bandcampUrl?: string;
  soundcloudUrl?: string;
  spotifyUrl?: string;
  description?: string;
}

export const releases: Release[] = [
  {
    id: 'release-1',
    title: 'Echoes in the Dark',
    slug: 'echoes-in-the-dark',
    year: 2024,
    format: 'Album',
    label: 'Independent',
    coverPath: '/assets/releases/cover-1.jpg',
    bandcampUrl: 'https://example.bandcamp.com/album/echoes-in-the-dark',
    description: 'A journey through ambient soundscapes and emotional depth.',
  },
  {
    id: 'release-2',
    title: 'Neon Dreams',
    slug: 'neon-dreams',
    year: 2023,
    format: 'EP',
    label: 'Digital Release',
    coverPath: '/assets/releases/cover-2.jpg',
    soundcloudUrl: 'https://soundcloud.com/example/neon-dreams',
    description: 'Synthesizer-driven tracks exploring urban nightlife.',
  },
  {
    id: 'release-3',
    title: 'Silent Waves',
    slug: 'silent-waves',
    year: 2023,
    format: 'Single',
    coverPath: '/assets/releases/cover-3.jpg',
    spotifyUrl: 'https://open.spotify.com/track/example',
    description: 'Minimalist electronic piece with field recordings.',
  },
  {
    id: 'release-4',
    title: 'Morning Light',
    slug: 'morning-light',
    year: 2022,
    format: 'Album',
    label: 'Sunrise Records',
    coverPath: '/assets/releases/cover-4.jpg',
    bandcampUrl: 'https://example.bandcamp.com/album/morning-light',
    description: 'Warm acoustic compositions celebrating new beginnings.',
  },
  {
    id: 'release-5',
    title: 'Digital Horizons',
    slug: 'digital-horizons',
    year: 2022,
    format: 'EP',
    coverPath: '/assets/releases/cover-5.jpg',
    description: 'Experimental electronic music pushing boundaries.',
  },
  {
    id: 'release-6',
    title: 'Fragments',
    slug: 'fragments',
    year: 2021,
    format: 'Single',
    coverPath: '/assets/releases/cover-6.jpg',
    soundcloudUrl: 'https://soundcloud.com/example/fragments',
    description: 'A collection of sonic fragments and experiments.',
  },
];
