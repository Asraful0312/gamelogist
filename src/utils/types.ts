export type GenreType = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: [];
};

export type Platform = {
  platform: {
    name: string;
    slug: string;
    id: number;
  };
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
