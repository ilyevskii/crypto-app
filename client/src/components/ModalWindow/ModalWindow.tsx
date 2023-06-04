import React, {MouseEvent, ReactElement} from 'react';
import './ModalWindow.scss';


interface IModalWindowProps {
    child: ReactElement,
    onClose: (event: MouseEvent) => void;
}


export function ModalWindow(props: IModalWindowProps) {

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
