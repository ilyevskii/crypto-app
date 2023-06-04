import React, {MouseEvent, ReactElement} from 'react';
import './ModalWindow.scss';


interface IModalWindowProps {
    child: ReactElement,
    onClose: (event: MouseEvent) => void;
}


export const ModalWindow = (props: IModalWindowProps) => {

    const {child, onClose} = props;

    return (
        <div className="modal">
            <div className="modal__content">
                <button
                    className="modal__content-close-button button"
                    type="button"
                    onClick={onClose}>&times;</button>
                {React.cloneElement(child, {onClose: onClose})}
            </div>
        </div>
    );
}
