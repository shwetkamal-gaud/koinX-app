import Modal from '@/Components/Modal'
import React, { useState } from 'react'

const TestPage = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div style={{ zIndex: '-10', height:'90vh', width:'100vw' }} className={`w-100 d-flex justify-content-end align-items-start `}>

                <button onClick={() => setShow(true)} type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
            </div>
            <div className='position-relative'>

                <div style={{ marginTop: '300px' }} className={`modal fade   `} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog bg-primary">
                        <div className="modal-content bg-primary">
                            <div className="modal-header">
                                <h5 className="modal-title text-white" id="exampleModalLabel">Hello World1!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-footer">
                                <button onClick={() => setShow(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TestPage