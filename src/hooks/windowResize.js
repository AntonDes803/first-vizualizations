"use client";
import { useState, useEffect, useCallback } from "react";

export function useWindowResize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResizeMobile = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [setIsMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeMobile);
    handleResizeMobile();
    return () => {
      window.removeEventListener("resize", handleResizeMobile);
    };
  }, [handleResizeMobile]);

  const handleResizeTablet = useCallback(() => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, [setIsTablet]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeTablet);
    handleResizeTablet();
    return () => {
      window.removeEventListener("resize", handleResizeTablet);
    };
  }, [handleResizeTablet]);

  const handleResizeLaptop = useCallback(() => {
    if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
      setIsLaptop(true);
    } else {
      setIsLaptop(false);
    }
  }, [setIsLaptop]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeLaptop);
    handleResizeLaptop();
    return () => {
      window.removeEventListener("resize", handleResizeLaptop);
    };
  }, [handleResizeLaptop]);

  const handleResizeDesktop = useCallback(() => {
    if (window.innerWidth >= 1440) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [setIsDesktop]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeDesktop);
    handleResizeDesktop();
    return () => {
      window.removeEventListener("resize", handleResizeDesktop);
    };
  }, [handleResizeDesktop]);

  return { isMobile, isTablet, isLaptop, isDesktop };
}
