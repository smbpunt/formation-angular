import { Injectable } from '@angular/core';
import { ISpaceNewsArticle } from '../model/ISpaceNews';

@Injectable({
  providedIn: 'root',
})
export class SpaceNewsStaticService {
  private readonly news: ISpaceNewsArticle[] = [
    {
      id: 37559,
      title: 'PlanetiQ secures $15 million Air Force STRATFI contract',
      authors: [
        {
          name: 'Debra Werner',
          socials: null,
        },
      ],
      url: 'https://spacenews.com/planetiq-secures-15-million-air-force-stratfi-contract/',
      image_url:
        'https://i0.wp.com/spacenews.com/wp-content/uploads/2026/04/rsz_1chatgpt_image-planetiq.png?fit=879%2C586&ssl=1',
      news_site: 'SpaceNews',
      summary:
        '\nCOLORADO SPRINGS – Commercial satellite operator PlanetiQ will develop and launch spacecraft equipped with next-generation instruments to gather terrestrial and space weather data with a $15 million U.S. Air Force Strategic Funding Increase (STRATFI) contract announced April 16. The STRATFI agreement is “a big indication from the U.S. government that our technology matters and they […]\nThe post PlanetiQ secures $15 million Air Force STRATFI contract appeared first on SpaceNews.',
      published_at: '2026-04-16T10:00:00Z',
      updated_at: '2026-04-16T10:00:53.231768Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37557,
      title: 'Just opened: five tonnes of science and supplies',
      authors: [
        {
          name: 'ESA',
          socials: null,
        },
      ],
      url: 'https://www.esa.int/ESA_Multimedia/Images/2026/04/Just_opened_five_tonnes_of_science_and_supplies',
      image_url:
        'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2026/04/just_opened_five_tonnes_of_science_and_supplies/27206495-1-eng-GB/Just_opened_five_tonnes_of_science_and_supplies_card_full.jpg',
      news_site: 'ESA',
      summary:
        'ESA astronaut Sophie Adenot and NASA astronauts Jack Hathaway, Jessica Meir and Chris Williams take a moment to capture the occasion as they first open the Cygnus NG‑24 cargo spacecraft after its installation on the International Space Station.',
      published_at: '2026-04-16T07:34:00Z',
      updated_at: '2026-04-16T09:48:11.975889Z',
      featured: false,
      launches: [
        {
          launch_id: '5ed6ab75-8c5b-4013-93e1-1deb56b14f1d',
          provider: 'Launch Library 2',
        },
      ],
      events: [],
    },
    {
      id: 37556,
      title: 'Eyeing the Richat Structure',
      authors: [
        {
          name: 'NASA',
          socials: null,
        },
      ],
      url: 'https://science.nasa.gov/earth/earth-observatory/eyeing-the-richat-structure/',
      image_url:
        'https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/iotd/2026/eyeing-the-richat-structure/richatstructure_oli_20260306.jpg',
      news_site: 'NASA',
      summary:
        'The circular geologic feature in northwestern Africa can be hard to recognize from the ground, but it is obvious when viewed from space.',
      published_at: '2026-04-16T04:00:00Z',
      updated_at: '2026-04-16T04:10:11.598238Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37555,
      title: 'Two New Documents Outline Future Evolution of the U.S. Space Force',
      authors: [
        {
          name: 'Marcia Smith',
          socials: null,
        },
      ],
      url: 'https://spacepolicyonline.com/news/two-new-documents-outline-future-evolution-of-the-u-s-space-force/',
      image_url:
        'https://spacepolicyonline.com/wp-content/uploads/2026/04/Saltzman-Space-Symp-Apr-15-26-AF-photo-300x231.jpg',
      news_site: 'SpacePolicyOnline.com',
      summary:
        'Gen. Chance Saltzman released two new documents today that outline what he sees as the evolution of the nation’s youngest military service over the next 15 years. Speaking at the […]',
      published_at: '2026-04-16T03:03:59Z',
      updated_at: '2026-04-16T03:10:23.459347Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37554,
      title: 'Space Force reorg signals end of SDA as standalone agency',
      authors: [
        {
          name: 'Sandra Erwin',
          socials: null,
        },
      ],
      url: 'https://spacenews.com/space-force-reorg-signals-end-of-sda-as-standalone-agency/',
      image_url:
        'https://i0.wp.com/spacenews.com/wp-content/uploads/2026/04/SDAT3_LHX-2026.jpg-scaled.jpeg?fit=1024%2C573&ssl=1',
      news_site: 'SpaceNews',
      summary:
        '\nOfficials say the Space Development Agency’s ‘go fast’ model will live on under new portfolio-based organization\nThe post Space Force reorg signals end of SDA as standalone agency appeared first on SpaceNews.',
      published_at: '2026-04-16T02:57:01Z',
      updated_at: '2026-04-16T03:00:29.451952Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37553,
      title: 'Seraphim forms space advisory council',
      authors: [
        {
          name: 'Jason Rainbow',
          socials: {
            x: '',
            youtube: '',
            instagram: '',
            linkedin: 'https://www.linkedin.com/in/jasonrainbow',
            mastodon: '',
            bluesky: '',
          },
        },
      ],
      url: 'https://spacenews.com/seraphim-forms-space-advisory-council/',
      image_url:
        'https://i0.wp.com/spacenews.com/wp-content/uploads/2026/04/Cluster-14-Beauty-Shot-Reduced.webp?fit=1024%2C447&ssl=1',
      news_site: 'SpaceNews',
      summary:
        '\nEarly-stage space investor Seraphim Space has formed a global advisory council of industry, policy and investment leaders to inform its long-term strategy as geopolitical and technology advances rapidly reshape the sector.\nThe post Seraphim forms space advisory council appeared first on SpaceNews.',
      published_at: '2026-04-15T23:01:00Z',
      updated_at: '2026-04-15T23:10:29.633391Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37552,
      title: 'Expedition 74 sees vehicle departures and a spacewalk during March',
      authors: [
        {
          name: 'Eleanor Day',
          socials: null,
        },
      ],
      url: 'https://www.nasaspaceflight.com/2026/04/iss-roundup-032026/',
      image_url: 'https://www.nasaspaceflight.com/wp-content/uploads/2026/04/IMG_3366.jpeg',
      news_site: 'NASASpaceflight',
      summary:
        'March was another busy month onboard the International Space Station, with the Expedition 74 crew…\r\nThe post Expedition 74 sees vehicle departures and a spacewalk during March appeared first on NASASpaceFlight.com.',
      published_at: '2026-04-15T22:13:37Z',
      updated_at: '2026-04-16T07:10:18.232223Z',
      featured: false,
      launches: [
        {
          launch_id: '8c2412ae-fbef-443f-aae8-db538f38eec6',
          provider: 'Launch Library 2',
        },
        {
          launch_id: '3bfed6d5-d65e-4133-b51a-b664bbd9d006',
          provider: 'Launch Library 2',
        },
        {
          launch_id: 'dc076ce3-bff6-434d-bfce-8eaaa9800067',
          provider: 'Launch Library 2',
        },
        {
          launch_id: 'd4813e5c-305e-4401-ba4f-917aa1aaceae',
          provider: 'Launch Library 2',
        },
        {
          launch_id: 'cf34aee7-a118-433b-8337-05b2c6892815',
          provider: 'Launch Library 2',
        },
      ],
      events: [
        {
          event_id: 352,
          provider: 'Launch Library 2',
        },
        {
          event_id: 1242,
          provider: 'Launch Library 2',
        },
        {
          event_id: 1308,
          provider: 'Launch Library 2',
        },
        {
          event_id: 1338,
          provider: 'Launch Library 2',
        },
        {
          event_id: 1341,
          provider: 'Launch Library 2',
        },
        {
          event_id: 1342,
          provider: 'Launch Library 2',
        },
      ],
    },
    {
      id: 37551,
      title: 'Meink: Space Force must ‘execute’ as budget set to surge',
      authors: [
        {
          name: 'Sandra Erwin',
          socials: null,
        },
      ],
      url: 'https://spacenews.com/meink-space-force-must-execute-as-budget-set-to-surge/',
      image_url:
        'https://i0.wp.com/spacenews.com/wp-content/uploads/2026/04/55209605379_01b70f7962_k.jpg?fit=1024%2C683&ssl=1',
      news_site: 'SpaceNews',
      summary:
        '\nService leaders warn workforce gaps and acquisition bottlenecks could slow delivery of new tech\nThe post Meink: Space Force must ‘execute’ as budget set to surge appeared first on SpaceNews.',
      published_at: '2026-04-15T21:50:48Z',
      updated_at: '2026-04-15T22:00:31.406791Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37550,
      title: 'Blue Origin one step closer to launching New Glenn from Vandenberg Space Force Base',
      authors: [
        {
          name: 'Will Robinson-Smith',
          socials: null,
        },
      ],
      url: 'https://spaceflightnow.com/2026/04/15/blue-origin-one-step-closer-to-launching-new-glenn-from-vandenberg-space-force-base/',
      image_url:
        'http://spaceflightnow.com/wp-content/uploads/2026/04/20260415-NG3_VerticalNight2.jpeg',
      news_site: 'Spaceflight Now',
      summary:
        'The U.S. Space Force said that it down-selected the company owned by Jeff Bezos to potentially develop a new launch site in California. ',
      published_at: '2026-04-15T21:05:10Z',
      updated_at: '2026-04-15T21:10:21.093107Z',
      featured: false,
      launches: [],
      events: [],
    },
    {
      id: 37549,
      title: 'Defining acquisition on a wartime footing',
      authors: [
        {
          name: 'Lt. Gen. Philip Garrant',
          socials: null,
        },
      ],
      url: 'https://spacenews.com/defining-acquisition-on-a-wartime-footing/',
      image_url:
        'https://i0.wp.com/spacenews.com/wp-content/uploads/2026/02/Screenshot-2026-02-12-at-4.58.55-AM.png?fit=1024%2C945&ssl=1',
      news_site: 'SpaceNews',
      summary:
        '\nThe President, the Secretary of War, and the Chief of Space Operations are all saying it: We no longer have the luxury of time. This isn’t rhetoric. It is a direct response to a fundamental change in our strategic and geopolitical environment. The Department is on a wartime footing. For those in the business of […]\nThe post Defining acquisition on a wartime footing appeared first on SpaceNews.',
      published_at: '2026-04-15T20:45:05Z',
      updated_at: '2026-04-15T20:50:32.731757Z',
      featured: false,
      launches: [],
      events: [],
    },
  ];

  public findAll(): ISpaceNewsArticle[] {
    return [...this.news];
  }

  public findById(id: number): ISpaceNewsArticle | undefined {
    return this.news.find((n) => n.id === id);
  }
}
