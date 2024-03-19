import React, { useState } from 'react';
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operador, setOperador] = useState(0);

    function inserirNumero(e) {
        var input = e.target.value;
        if (input === '.' && num.indexOf('.') !== -1) {
            return;
        }
        if (num === 0) {
            setNum(input);

        } else {
            setNum(num + input);
        }
    }

    function limpar(e) {
        setNum(0);
        setOldNum(0);
    }

    function porcentagem() {
        setNum(num / 100);
    }

    function mudarSinal() {
        if (num !== 0) {
            setNum(-num)
        } else {
            setNum(-1 * num)
        }
    }

    function operadorHandler(e) {
        var operadorInput = e.target.value;
        setOperador(operadorInput);
        setOldNum(num);
        setNum(0);
    }

    function calcular(e) {
        if (operador === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
            setOldNum(num);
        } else if (operador === "-") {
            setNum(parseFloat(oldnum) - parseFloat(num));
            setOldNum(num);
        } else if (operador === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num));
            setOldNum(num);
        } else if (operador === "*") {
            setNum(parseFloat(oldnum) * parseFloat(num));
            setOldNum(num);
        }
    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={4} />
                    <h1 className="resultado">{num.toString().replace(".", ",")}</h1>
                    <div className="grid">
                    <button className='numero' onClick={limpar} value={"AC"}>AC</button>
                    <button className='operador' onClick={porcentagem} value={"%"}>%</button>
                    <button className='operador' onClick={mudarSinal} value={"+/-"}>+/-</button>
                    <button className='operador' onClick={operadorHandler} value={"/"}>/</button>
                    <button className='numero' onClick={inserirNumero} value={7}>7</button>
                    <button className='numero' onClick={inserirNumero} value={8}>8</button>
                    <button className='numero' onClick={inserirNumero} value={9}>9</button>
                    <button className='operador' onClick={operadorHandler} value={"*"}>*</button>
                    <button className='numero' onClick={inserirNumero} value={4}>4</button>
                    <button className='numero' onClick={inserirNumero} value={5}>5</button>
                    <button className='numero' onClick={inserirNumero} value={6}>6</button>
                    <button className='operador' onClick={operadorHandler} value={"-"}>-</button>
                    <button className='numero' onClick={inserirNumero} value={1}>1</button>
                    <button className='numero' onClick={inserirNumero} value={2}>2</button>
                    <button className='numero' onClick={inserirNumero} value={3}>3</button>
                    <button className='operador' onClick={operadorHandler} value={"+"}>+</button>
                    <button className='numeroZero' onClick={inserirNumero} value={0}>0</button>
                    <button className='numero' onClick={inserirNumero} value={"."}>,</button>
                    <button className='operador' onClick={calcular} value={"="}>=</button>
                </div>
                </div >
            </Container>
        </div>

    );
}

export default Calculadora