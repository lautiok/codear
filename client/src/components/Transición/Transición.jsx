import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './Transición.css'; // Aquí definirás las clases CSS para la animación

export const Transición = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};