import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
    Number,
    Operation,
}

type Props = React.HTMLProps<HTMLButtonElement> & {
    buttonType?: ButtonType;
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
}

const StyledButton = styled.button`
    background: #00203F;
    border: none;
    border-radius: 8px;
    color: #ADEFD1;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({ 
    buttonType = ButtonType.Operation, 
    children, 
    label, 
    position, 
    width, 
    height, 
    onClick
}) => {
    const styles: React.CSSProperties = {};
    if(position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }
    if(height) {
        styles.gridRowEnd = `span ${height}`;
    }
    if(width) {
        styles.gridColumnEnd = `span ${width}`;
    }
    if(buttonType === ButtonType.Number) {
        styles.color = '#00203F';
        styles.background = '#ADEFD1';
    }

    return (
        <StyledButton onClick={onClick} style={styles}>
            {label}
        </StyledButton>
    )
}

export default Button;