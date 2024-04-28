"use client";

import {useCount} from "@/hooks/useCount";
import {FunctionComponent, useEffect, useState, useMemo} from "react";
import {FilmInfo} from "@/components/FilmInfo/FilmInfo";


interface Props {
    title: string;
    genre: "comedy" | "horror";
    seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
                                                          title,
                                                          genre,
                                                          seasonsCount,
                                                      }) => {
    let {count, increment, decrement} = useCount(0);

    // const filmRating = useMemo(() => {
    //     return Math.floor(
    //         filmDetails.reviews.reduce((sum, review) => {
    //             return sum + review.rating
    //         }, 0) / filmDetails.reviews.length
    //     )
    // }, [filmDetails.reviews])


    useEffect(() => {
        console.log("count ", count);
        return () => {
            console.log("unmount");
        };
    }, [count]);

    return (
        <>
            <FilmInfo
                title={title}
                genre={genre}
                seasonsCount={seasonsCount}
            />
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};