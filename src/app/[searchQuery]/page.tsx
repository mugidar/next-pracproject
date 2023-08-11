import { Props } from "next/script";
import React from "react";
import { PageProps } from "../../../.next/types/app/page";
import getWikiResults from "../../../lib/getWikiResults";
import Item from "./Item/Item";

export async function generateMetadata({ params: { searchQuery } }: PageProps) {
  const getWikiData: Promise<SearchResult> = getWikiResults(searchQuery);
  const data = await getWikiData;
  const displayTerm = searchQuery.replaceAll("%20", " ");
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm}`
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  };
}

const Page = async ({ params: { searchQuery } }: PageProps) => {
  const getWikiData: Promise<SearchResult> = getWikiResults(searchQuery);
  const data = await getWikiData;
  const results: Result[] | undefined = data?.query?.pages;
  console.log(getWikiData);

  const content = (
    <main className="bg-slate-200 mx-auto  py-5 px-10">
      {results
        ? Object.values(results).map((result) => {
            return <Item key={result.pageid} result={result} />;
          })
        : `${searchQuery} not found`}
    </main>
  );
  return <div>{content}</div>;
};

export default Page;
