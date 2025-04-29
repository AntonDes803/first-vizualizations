// useBlogCards.ts
import { useEffect, useState } from "react";
import { arrOfBlogs } from "@/data/blog/arrOfBlogs";

export const useBlogCards = (data = []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const cardsToRender = Array(10).fill(arrOfBlogs).flat();

  const totalItems = cardsToRender.length; //  замінити cardsToRender на arrOfBlogs

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cardsToRender.slice(startIndex, endIndex); //  замінити cardsToRender на arrOfBlogs

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
