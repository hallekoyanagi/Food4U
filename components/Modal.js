import React from 'react'

const Modal =  props => {
    if (!props.show){
        return null
    }
    if (props.show){ // This exists because it causes a text error when live. Still trying to fix. Works outside of app
        return null // When fully implemented, this if clause wil be removed
    }
    return (
        <div className="modal">
            <div className="modalcontent">
                <div className="modalheader">
                    <h4 className="modaltitle">Modaltitle</h4>
                </div>
                <div className="modalbody">
                   <p> Welcome to the Help/Tutorial function! When fully implemented this modal will open to provide assistance to the user.</p>
                </div>
                <div className="modalfooter">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )

    }
export default Modal