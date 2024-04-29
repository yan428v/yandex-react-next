"use client";

import React, { FC, useMemo } from "react";
import { Film } from "@/interfaces/film";


export const FilmInfo: FC<Film> = ({
                                       id,
                                       title,
                                       genre,
                                       seasonsCount,
                                       reviews,
                                   }) => {

    const filmRating = useMemo(() => {
        return Math.floor(
            reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        );
    }, [reviews]);

    return (
        <div>
            <p>
                {id}.{title || "Unknown Film"}
            </p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>
            <p>
                {reviews.length > 0 ? `Рейтинг: ${filmRating}` : "Отзывы отсутствуют"}
            </p>
        </div>
    );
};