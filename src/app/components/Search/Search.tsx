"use client";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter } from "next/navigation";
import ClearIcon from "@mui/icons-material/Clear";
const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (active) {
      inputRef.current?.classList.remove("not-active");
      inputRef.current?.classList.add("active");
      inputRef.current?.focus();
    } else {
      inputRef.current?.classList.remove("active");
      inputRef.current?.classList.add("not-active");
    }
  }, [active]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!active) {
      e.preventDefault();
      setActive(true);
    } else {
      e.preventDefault();
      if (searchValue.length > 0) {
        router.push(`/${searchValue}/`);
        setSearchValue("");
      } else {
        alert("Write something :)");
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="relative flex items-center justify-center">
        <input
          ref={inputRef}
          type="search"
          className="rounded-full p-2 w-[50px]"
          onChange={(e) => handleInput(e)}
          value={searchValue}
        />
        <div
          className={twMerge(
            active && "right-[10px]",
            "absolute cursor-pointer"
          )}
        >
          <button>
            <SearchIcon />
          </button>
          <button type="button">
            {active && (
              <ClearIcon
                onClick={() => {
                  setActive(!active);
                }}
              />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
