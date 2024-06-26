export type GenreType = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: [];
};

export type ErrorType = {
    error: {
        message: string;
    }
}
