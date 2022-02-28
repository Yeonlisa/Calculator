import React from 'react';
import styled from 'styled-components';
import Button, { ButtonType } from './Button';

const Container = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
    background: #fff;
    border-radius: 8px;
    font-size: 48px;
    grid-column-end: span 4;
    padding: 30px 24px;
    text-align: right;
`;

const Calculator: React.FC<{}> = () => {
    return (
        <Container>
            <Grid>
                <Display />
                <Button label="AC" position={[0, 1]} width={2} />
                <Button label="C" position={[2, 1]} width={2} />
                <Button label="+" position={[3, 2]} />
                <Button label="-" position={[3, 3]} />
                <Button label="=" position={[3, 4]} height={2}/>
                <Button label="9" type={ButtonType.Number} position={[2, 2]} />
                <Button label="8" type={ButtonType.Number} position={[1, 2]} />
                <Button label="7" type={ButtonType.Number} position={[0, 2]} />
                <Button label="6" type={ButtonType.Number} position={[2, 3]} />
                <Button label="5" type={ButtonType.Number} position={[1, 3]} />
                <Button label="4" type={ButtonType.Number} position={[0, 3]} />
                <Button label="3" type={ButtonType.Number} position={[2, 4]} />
                <Button label="2" type={ButtonType.Number} position={[1, 4]} />
                <Button label="1" type={ButtonType.Number} position={[0, 4]} />
                <Button label="0" type={ButtonType.Number} position={[0, 5]} width={3} />
            </Grid>
        </Container>
    )
}

export default Calculator;