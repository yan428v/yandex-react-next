import React from "react";
import {FilmDetails} from "@/components/FilmDetails";

export default function Home() {

    const filmDetails: {
        title: string;
        genre: 'comedy' | 'horror';
        seasonsCount: number;
    } = {
        title: "<NAME>",
        genre: "comedy",
        seasonsCount: 10,
    }

  return (
      <div>
          <header></header>
          <FilmDetails
              title={filmDetails.title}
              genre={filmDetails.genre}
              seasonsCount={filmDetails.seasonsCount}
          />
          {/*<Reviews/>*/}
          {/*<Recommendations/>*/}
          <footer></footer>
      </div>
  );
}
