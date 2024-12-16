export type GenreType = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games?: [];
};

export type Platform = {
  platform: {
    name: string;
    slug: string;
    id: number;
  };
};

export type PlatformsType = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string | null;
  year_start: string | null;
  year_end: string | null;
  games: [
    {
      id: number;
      slug: string;
      name: string;
      added: number;
    }
  ];
};

export type StoreType = {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
};

export type StoresTypes = {
  id: number;
  store: StoreType;
};

export type GameType = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: [];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
  };
  metacritic: null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;
  platforms: [];
  parent_platforms: Platform[];
  genres: GenreType[];
  stores: StoresTypes[];
  clip: null;
  tags: [];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  short_screenshots: [
    {
      id: number;
      image: string;
    }
  ];
};

export type StoreGameType = {
  id: number;
  slug: string;
  name: string;
  added: number;
};

export type GameStore = {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
  games?: StoreGameType[];
};

export type GameDetailsType = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description_raw: string;
  background_image: string;
  description: string;
  metacritic: number;
  metacritic_platforms: [];
  publishers: StoreType[];
  released: string;
  tba: boolean;
  updated: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: [
    {
      id: number;
      title: string;
      count: number;
      percent: number;
    }
  ];
  added: number;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: Platform[];
  platforms: [
    {
      platform: {
        id: number;
        name: string;
        slug: string;
        image: null | string;
        year_end: null | string;
        year_start: null | string;
        games_count: number;
        image_background: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
  stores: [
    {
      id: number;
      url: string;
      store: GameStore;
    }
  ];
  developers: GameStore[];
  genres: GenreType[];
  tags: GameStore[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  clip: null;
};

export type ScreenShortsType = {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
};

export type TagsType = {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
};
