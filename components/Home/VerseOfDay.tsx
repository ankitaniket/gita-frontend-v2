import { useEffect, useState } from "react";
import { gql, ApolloQueryResult, useApolloClient } from "@apollo/client";
import Link from "next/link";

interface DailyVerse {
  verseNumber: number;
  chapterNumber: number;
  id: number;
  text: string;
  transliteration: string;
  wordMeanings: string;
  gitaTranslationsByVerseId: {
    nodes: { description: string }[];
  };
}

const VerseOfDay = () => {
  const [dailyVerse, setDailyVerse] = useState<DailyVerse | null>(null);
  const client = useApolloClient();

  useEffect(() => {
    const getDailyVerse = async (): Promise<DailyVerse | null> => {
      const { data }: ApolloQueryResult<any> = await client.query({
        query: gql`
          query MyQuery {
            allVerseOfTheDays(last: 1) {
              nodes {
                verseOrder
                date
              }
            }
          }
        `,
      });
      const verseData: ApolloQueryResult<any> = await client.query({
        query: gql`
        query MyQuery {
          allGitaVerses(condition: {id: ${data.allVerseOfTheDays.nodes[0].verseOrder} }) {
            nodes {
              verseNumber
              chapterNumber
              id
              text
              transliteration
              wordMeanings
              gitaTranslationsByVerseId(condition: {authorName: "Swami Sivananda"}) {
                nodes {
                  description
                }
              }
            }
           
          }
        }
        `,
      });

      const finalData = verseData?.data.allGitaVerses?.nodes[0];
      setDailyVerse(finalData);
      return finalData;
    };

    if (!dailyVerse) {
      getDailyVerse();
    }
  }, [client, dailyVerse]);

  return (
    <div className="max-w-7xl mx-auto z-50 px-4 sm:px-6">
      <div className="bg-white dark:bg-dark-100 shadow-lg rounded-xl  mt-10 p-8 text-gray-400">
        <h2 className="text-my-orange font-bold mb-4 divider line one-line px-4">
          Verse of the day - BG {dailyVerse?.chapterNumber}.
          {dailyVerse?.verseNumber}
        </h2>
        <p className="text-lg">
          {dailyVerse?.gitaTranslationsByVerseId?.nodes[0]?.description}{" "}
        </p>
        <button className="uppercase text-black dark:text-white mt-4 font-bold text-sm hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none">
          <Link href={`verse/${dailyVerse?.id}`} shallow>
            See more
          </Link>
        </button>
      </div>
    </div>
  );
};
export default VerseOfDay;
