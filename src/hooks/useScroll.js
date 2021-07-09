import {useEffect, useRef, useState} from "react";

export default function useScroll(callback) {

  const [scrollBottom, setScrollBottom] = useState(false);

  const scrollHandler = () => {
    if (document.documentElement.scrollTop + document.documentElement.clientHeight > document.documentElement.scrollHeight - 700) {
      if (!scrollBottom) {
        setScrollBottom(true)
        callback()
      }
    } else {
      setScrollBottom(false)
    }
  }
  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollBottom])

  return scrollBottom;
};