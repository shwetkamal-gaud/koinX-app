import React from 'react'

interface ModalProps {
    show: boolean;
    
    onClose: () => void
}

const Modal = ({ show,  onClose }: ModalProps) => {
    return (
        <>
            {
                show && (<div style={{ top: '50%', left: '50%' }} className='modal-blur position-absolute d-flex flex-column bg-primary'>
                    <h1>Hello World 1</h1>
                    <button onClick={onClose} className='btn btn-secondary'>Close</button>
                </div>)
            }
        </>
    )
}

export default Modal