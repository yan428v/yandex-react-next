interface Review {
    id: number;
    title: string;
    author: string;
    rating: number;
}

interface Film {
    id: number;
    title: string;
    genre: string;
    seasonsCount: number;
    reviews: Review[];
}

export type { Film };