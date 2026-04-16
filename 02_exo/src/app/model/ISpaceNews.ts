/* {
    id: 36615,
    v
      'Senate committee advances NASA authorization bill that changes Artemis and extends ISS',
    authors: [
      {
        name: 'Jeff Foust',
        socials: {
          x: 'https://x.com/jeff_foust',
          youtube: '',
          instagram: '',
          linkedin: 'https://www.linkedin.com/in/jefffoust',
          mastodon: 'https://mastodon.social/@jfoust',
          bluesky: 'https://bsky.app/profile/jfoust.bsky.social',
        },
      },
    ],
    url: 'https://spacenews.com/senate-committee-advances-nasa-authorization-bill-that-changes-artemis-and-extends-iss/',
    image_url:
      'https://i0.wp.com/spacenews.com/wp-content/uploads/2025/07/slseus.jpeg?fit=1024%2C683&ssl=1',
    news_site: 'SpaceNews',
    summary:
      'The Senate Commerce Committee advanced a revised NASA authorization bill that implements some of the changes to Artemis sought by the agency while also extending the life of the ISS. The post Senate committee advances NASA authorization bill that changes Artemis and extends ISS appeared first on SpaceNews.',
    published_at: '2026-03-05T00:20:44Z',
    updated_at: '2026-03-05T00:31:19.327296Z',
    featured: false,
    launches: [],
    events: [],
  };*/

export interface IAuthor {
  name: string;
  socials: {
    x?: string;
    youtube?: string;
    instagram?: string;
    linkedin?: string;
    mastodon?: string;
    bluesky?: string;
  } | null;
}

export interface ISpaceNewsArticle {
  id: number;
  title: string;
  authors: IAuthor[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches?: any[];
  events?: any[];
}

// Type de la réponse du fichier JSON local { "news": [...] }
export interface ISpaceNewsResponse {
  news: ISpaceNewsArticle[];
}
