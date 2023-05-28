import React, {MouseEvent, ReactElement} from 'react';
import './ModalWindow.scss';


interface ModalWindowProps {
    child: ReactElement,
    onClose: (event: MouseEvent) => void;
}


export function ModalWindow(props: ModalWindowProps) {

    const {child, onClose} = props;

    return (
        <div className="modal">
            <div className="modal-content">
                <button
                    className="modal-close-btn"
                    type="button"
                    onClick={onClose}>&times;</button>
                {React.cloneElement(child, {onClose: onClose})}
            </div>
        </div>
    );
}
