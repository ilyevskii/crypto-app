import React, {ReactNode} from 'react';
import './ModalWindow.scss';


interface ModalWindowProps {
    child: ReactNode,
    onClose: () => void;
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
                {child}
            </div>
        </div>
    );
}
