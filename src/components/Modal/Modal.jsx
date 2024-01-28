import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, Window } from './Modal.styled';
import { ContactForm } from 'components';
import { clearId, togleModal, updateContact } from 'myRedux';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
  const dispatch = useDispatch();
  /**
   * Effect
   */
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
  /**
   * Functions
   */

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      dispatch(togleModal());
      dispatch(clearId());
    }
  };

  /**
   * Destructuring prop "info"
   */

  return createPortal(
    <Overlay onClick={handleClick}>
      <Window>
        <ContactForm button={'edit contact'} action={updateContact} />
      </Window>
    </Overlay>,
    modalRoot
  );
};
