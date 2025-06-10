// useBlogCards.ts
import { useEffect, useState } from "react";
import { arrOfBlogs } from "@/data/blog/arrOfBlogs";

export const useBlogCards = (data = []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalItems = arrOfBlogs.length;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = arrOfBlogs.slice(startIndex, endIndex);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1120 ? 4 : 6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    currentCards,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
  };
};
