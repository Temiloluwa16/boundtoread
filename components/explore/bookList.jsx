"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "./loader";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const url = "https://myanimelist.p.rapidapi.com/manga/top/all?p=1";
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

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll(-200),
    onSwipedRight: () => scroll(200),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables mouse swipe
  });

  const scroll = (distance) => {
    const container = document.getElementById("bookListContainer");
    container.scrollBy({ left: distance, behavior: "smooth" });
  };


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const displayedBooks = books.slice(0, 10);

  return (
    <div  {...handlers} className="flex items-center justify-start bg-white/10 rounded-3xl overflow-x-auto whitespace-nowrap p-1.5 pb-10 lg:pb-16 gap-1 lg:gap-2.5 scrollbar-hide">
      {displayedBooks.map((book, index) => (
        <motion.div
          key={index}
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="w-36 h-36 lg:w-40 lg:h-40 bg-gray-300 rounded-3xl flex-shrink-0"
        >
          <Image
            className="w-36 h-36 lg:w-40 lg:h-40 rounded-3xl"
            src={book.picture_url}
            alt={book.title}
            width={50}
            height={50}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BookList;
