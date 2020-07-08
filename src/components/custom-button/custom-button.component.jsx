import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn ,inverted ,...otherProps}) => (
    <button type='button' className={`custom-button ${inverted ? 'inverted': ''}`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;