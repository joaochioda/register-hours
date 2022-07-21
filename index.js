"use strict";

const { default: axios } = require("axios");

const user = "";
const password = "";
const token = `0-${user}:${password}`

const encodedToken = Buffer.from(token).toString('base64');

const todayDate = new Date();
const todayDateIsoString = todayDate.toISOString();
const multipleDates = [
  // "2022-07-12T12:31:09.131Z",
  // "2022-07-13T12:31:09.131Z",
  todayDateIsoString,
];

async function main () {
  try {
    const {data: userId} = await axios.request({
      url: "https://pontosecullum4-01.secullum.com.br/Ponto4Web/api/993821974/Sessao/GetIdFuncionarioSessao",
      method: "get",
      headers: {
        Authorization: `Basic ${encodedToken}`,
      },
    });
    console.log(`Requesting user id: ${userId}`);
    for(let i = 0; i < multipleDates.length; i++) {
    axios
      .request({
        url: "https://pontosecullum4-01.secullum.com.br/Ponto4Web/api/993821974/SolicitacoesWeb/IncluirSolicitacao",
        method: "post",
        headers: {
          Authorization: `Basic ${encodedToken}`,
        },
        data: {
          funcionarioId: userId,
          data: multipleDates[i],
          entrada1: "08:00",
          saida1: "12:00",
          entrada2: "13:00",
          saida2: "17:00",
          entrada3: "",
          saida3: "",
          entrada4: "",
          saida4: "",
          entrada5: "",
          saida5: "",
          ajuste: "",
          abono2: "",
          abono3: "",
          abono4: "",
          obsEntrada1: ".",
          obsEntrada2: ".",
          obsEntrada3: "",
          obsEntrada4: "",
          obsEntrada5: "",
          obsSaida1: ".",
          obsSaida2: ".",
          obsSaida3: "",
          obsSaida4: "",
          obsSaida5: "",
          id: 0,
          funcionario: null,
          observacoes: null,
          status: 0,
          dataSolicitacao: "0001-01-01T00:00:00",
          dataRecebimento: null,
          dataProcessado: null,
          tipo: 0,
          solicitanteId: null,
          solicitante: null,
          visto: false,
          motivoRejeicao: null,
          entrada1Original: null,
          saida1Original: null,
          entrada2Original: null,
          saida2Original: null,
          entrada3Original: null,
          saida3Original: null,
          entrada4Original: null,
          saida4Original: null,
          entrada5Original: null,
          saida5Original: null,
          computadorRecebimento: null,
          computadorProcessado: null,
        },
      })
      .then(() => {
        console.log(`Completed - ${multipleDates[i]}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    
  } catch (ex) {
    console.log(`Error => ${ex}`)
  }
  }

main()