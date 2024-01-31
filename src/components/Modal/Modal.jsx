import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { clearId, togleModal, updateContact } from 'myRedux';
import { ContactForm } from 'components';

import { Overlay, Window } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        dispatch(togleModal());
        dispatch(clearId());
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      dispatch(togleModal());
      dispatch(clearId());
    }
  };

  return createPortal(
    <Overlay onClick={handleClick}>
      <Window>
        {children}
        {/* <ContactForm button={'edit contact'} action={updateContact} /> */}
      </Window>
    </Overlay>,
    modalRoot
  );
};
