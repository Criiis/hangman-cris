import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const portalElement = document.querySelector('#overlays')! //'../../../../public/index.html'

interface genericProps {
  children?: React.ReactNode
}

//this will be the backdrop of the result (winner/loser) panel
function Backdrop() {
  return <div className={styles.backdrop}></div>
}

//this will be the container with the result (winner/loser)
function ModalOverlay({ children }: genericProps) {
  return <div className={styles.modal}>{children}</div>
}

//this will be the parent container the Full Modal being applied in the portalElement
export default function Modal({ children }: genericProps) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
