"use client";

import {useCount} from "@/hooks/useCount";
import {FunctionComponent, useEffect, useState, useMemo} from "react";
import {FilmInfo} from "@/components/FilmInfo/FilmInfo";

import { Film} from "@/interfaces/film";


 export const FilmDetails: FunctionComponent<Film> = ({
                                                          id,
                                                          title,
                                                          genre,
                                                          seasonsCount,
                                                          reviews
                                                      }) => {
//     let { count, increment, decrement } = useCount(0);

    return (
        <>
            <FilmInfo
                id={id}
                title={title}
                genre={genre}
                seasonsCount={seasonsCount}
                reviews={reviews}
            />
            <div>
                <button onClick={decrement}>-</button>
                Counter: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};
