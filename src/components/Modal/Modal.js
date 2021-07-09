import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from 'styled-components';
// 'modal-root' is a sibling to 'app-root'
const modalRoot = document.getElementById("modal-root");

const Modal = ({ isOpen, children, setIsModalOpen, modalEl }) => {

  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);


  if (!isOpen) return <div></div>
  return (
    createPortal(
      <Wrapper >
          {children}
      </Wrapper>,
      el
    )
  );
}

export default Modal;

const anim1 = keyframes`
  0% {
    background-color: rgba(0,0,0,0);
  }
  100% {
    background-color: rgba(0,0,0,0.6);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 100px;
  background-color: rgba(0,0,0,0.6);
  animation: .2s ${anim1} ease-in-out;
`;