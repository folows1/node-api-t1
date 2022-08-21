const express = require('express');
const app = express();
const moment = require('moment');

const FIRST_SEMESTER_START = '0201';
const FIRST_SEMESTER_END = '0630';
const SECOND_SEMESTER_START = '0801';
const SECOND_SEMESTER_END = '1230';


app.use(express.json());


app.post('/api/v1/classes', (req, res) => {
    const data = req.body;
    console.log(data);
    const msg = checkData(data);
    if (msg.error) {
        res.status(404).send(msg);
    } else {

        res.status(200).json(data);
    }
})

const checkData = (data) => {
    const { ano, semestre, dias_da_semana } = data;
    const msg = {
        error: false,
        msg: ''
    };
    if (!ano || !semestre || !dias_da_semana) {
        msg.error = true;
        msg.msg = 'Dados insuficientes';
        return msg;
    }
    if (Number(ano).toString().length !== 4) {
        msg.error = true;
        msg.msg = 'Ano inválido';
        return msg;
    }
    if (Number(semestre) !== 1 && Number(semestre) !== 2) {
        msg.error = true;
        msg.msg = 'Semestre inválido';
        return msg;
    }
    if (dias_da_semana.length === 0 || dias_da_semana.length > 5 || checkDaysError(dias_da_semana)) {
        msg.error = true;
        msg.msg = 'Dias da semana inválidos';
        return msg;
    }
    return msg;
}

const checkDaysError = (dias_da_semana) => {
    let verify = false;
    for (let dia of dias_da_semana) {
        dia = Number(dia);
        if (dia !== 1 && dia !== 2 && dia !== 3 && dia !== 4 && dia !== 5) {
            verify = true;
            break;
        }
    }
    return verify;
}










app.listen('3001', () => console.log('Server started on port 3001'));