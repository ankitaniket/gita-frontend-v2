"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchCard from "../../components/Search/SearchCard";

interface SearchQueryVerse {
  id: number;
  chapter_number: number;
  name_translated: string;
  transliteration: string;
  word_meanings: string;
  verse_number: number;
  text: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query");
  const [data, setData] = useState<SearchQueryVerse[]>();
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    setIsSearchLoading(true);
    const fetchData = async () => {
      fetch(`https://api.bhagavadgita.io/v2/search?query=${query}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": process.env.NEXT_PUBLIC_BG_API_KEY as string,
        },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setData(data);
          setIsSearchLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <div className="max-w-5xl font-inter py-4 mx-auto px-4 sm:px-6">
        <p
          className={`text-2xl lg:text-3xl py-4 ${
            isSearchLoading ? "animate-pulse" : ""
          }`}
        >
          Searching results for: <span className="font-extrabold">{query}</span>
        </p>
        <hr />

        {data && data?.length > 0 ? (
          <div>
            {data.map((verse) => {
              return (
                <SearchCard
                  key={verse.id}
                  chapterNumber={verse.chapter_number}
                  transliteration={verse.transliteration}
                  verseNumber={verse.verse_number}
                />
              );
            })}
          </div>
        ) : (
          <div className={`py-7 ${isSearchLoading ? "animate-pulse" : ""}`}>
            <p className="text-my-orange font-extrabold text-4xl">
              {isSearchLoading ? "Loading" : "No Results"}
            </p>
            <p className="text-gray-500 font-normal text-sm">
              {!isSearchLoading &&
                "Sorry, we couldn’t find the page you’re looking for."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
