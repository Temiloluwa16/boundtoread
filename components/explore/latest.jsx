"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "./loader";

const Latest = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D?p=1'";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
        "x-rapidapi-host": "myanimelist.p.rapidapi.com",
      },
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setBooks(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); 

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const displayedBooks = books.slice(0, 10);

  return (
    <div className="flex items-center justify-start rounded-lg overflow-x-auto whitespace-nowrap gap-2 scrollbar-hide">
      {displayedBooks.map((book, index) => (
        <div
          key={index}
          className="w-48 h-48 bg-gray-300 rounded-lg flex-shrink-0 flex-col flex items-center justify-center gap-1.5"
        >
          <Image
            className="w-48 h-48 rounded-lg"
            src={book.picture_url}
            alt={book.title}
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
};

export default Latest;
