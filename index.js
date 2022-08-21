const express = require('express');
const app = express();
const moment = require('moment');

const FIRST_SEMESTER_START = '0201';
const FIRST_SEMESTER_END = '0630';
const SECOND_SEMESTER_START = '0801';
const SECOND_SEMESTER_END = '1130';


app.use(express.json());


app.post('/api/v1/classes', (req, res) => {
    const data = req.body;
    console.log(data);
    const tag = checkData(data);
    if (tag.error) {
        res.status(400).send(`Erro. ${tag.msg}`);
    } else {
        const formattedData = formatData(data);
        res.status(200).json(formattedData);
    }
})

const checkData = (data) => {
    const { ano, semestre, dias_da_semana } = data;
    const tag = {
        error: false,
        msg: ''
    };
    if (!ano || !semestre || !dias_da_semana) {
        tag.error = true;
        tag.msg = 'Dados insuficientes';
        return tag;
    }
    if (Number(ano).toString().length !== 4) {
        tag.error = true;
        tag.msg = 'Ano inválido';
        return tag;
    }
    if (Number(semestre) !== 1 && Number(semestre) !== 2) {
        tag.error = true;
        tag.msg = 'Semestre inválido';
        return tag;
    }
    if (dias_da_semana.length === 0 || dias_da_semana.length > 5 || checkDaysError(dias_da_semana)) {
        tag.error = true;
        tag.msg = 'Dias da semana inválidos';
        return tag;
    }
    return tag;
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

const formatData = (data) => {
    const dias_da_semana = new Set(data.dias_da_semana);
    console.log(dias_da_semana)
    return {
        ano: Number(data.ano),
        semestre: Number(data.semestre),
        dias_da_semana: Array.from(dias_da_semana)
    }
}










app.listen('3001', () => console.log('Server started on port 3001'));