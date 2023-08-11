import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );

  return (
    <article className="m-4 max-w-lg">
      <div className="flex flex-col justify-center w-[40px] h-[40px]">
        {result.thumbnail ? (
          <img
            src={result.thumbnail.source}
            alt={result.title}
            className={`w-full h-full object-cover`}
            loading="lazy"
          />
        ) : (
          <img
            src={
              "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"
            }
            alt={result.title}
            className={`w-full h-full object-cover`}
            loading="lazy"
          />
        )}
      </div>
      {itemTextCol}
    </article>
  );
}
