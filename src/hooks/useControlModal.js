import {useEffect, useRef, useState} from "react";

export default function useScroll(modalRef, setIsModalOpen) {

  useEffect(() => {
    const handle = (event) => {
      if (typeof event.target.dataset.control !=="undefined") return;
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);  
      } 
    }
    document.addEventListener('click', handle);
    return () => {
      document.removeEventListener('click', handle)
    }
  }, [modalRef])

};