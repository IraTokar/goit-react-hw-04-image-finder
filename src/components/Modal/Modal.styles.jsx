import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;


export const OverlayModal = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
   max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  max-height: 90vh;
  max-width: 100%;
`;