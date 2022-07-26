export type MovieType = {
    id: string;
    title: string;
    releaseDate: Date
    openingText: string;
}

export type MovieListPropsType = {
    movies : MovieType[]
}

export type MoviePropsType = {
    detail : MovieType
}