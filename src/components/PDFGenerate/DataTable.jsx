import { Container } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import styled from "styled-components";

import LogoUNILABPreto from "../../assets/img/logo-unilab-preto.png";
const CustomTable = styled.table`
  width: 100%;
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;

      @font-face {
        font-family: "DejaVu Sans";
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf")
          format("truetype");
      }

      @font-face {
        font-family: "DejaVu Sans";
        font-weight: bold;
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Bold.ttf")
          format("truetype");
      }

      @font-face {
        font-family: "DejaVu Sans";
        font-style: italic;
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf")
          format("truetype");
      }

      @font-face {
        font-family: "DejaVu Sans";
        font-weight: bold;
        font-style: italic;
        src: url("https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf")
          format("truetype");
      }
      font-size: 12px;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: center;
      background-color: #000000;
      color: #ffffff;
    }
  }
`;
export default function DataTable(props) {
  let atividades0 = props.allData.atividades.filter(
    (atividade) => atividade.tipoAtividade.id === 0
  );
  let atividades1 = props.allData.atividades.filter(
    (atividade) => atividade.tipoAtividade.id === 1
  );
  let atividades2 = props.allData.atividades.filter(
    (atividade) => atividade.tipoAtividade.id === 2
  );
  let atividades3 = props.allData.atividades.filter(
    (atividade) => atividade.tipoAtividade.id === 3
  );
  /**

   * @param {String} date
   */
  function toBrFormat(date) {
    var arrDate = date.split('-');
    const now = new Date(arrDate[0], arrDate[1]-1, arrDate[2]);
    return now.getDate() + "/" + (1 + now.getMonth()) + "/" + now.getFullYear();
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mx: "auto",
          width: "100%",
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <img src={LogoUNILABPreto} width="50%" alt="Logo Unilab" />
        <p>
          PLANO INDIVIDUAL DE TRABALHO
          <br />
          Instrução Normativa SGP/UNILAB nº 8 de novembro de 2020
        </p>
      </Box>

      <CustomTable>
        <thead>
          <tr>
            <th colSpan="2">DADOS DA UNIDADE</th>
          </tr>
          <tr>
            <td colSpan="2">
              Plano de Trabalho nº 202111{props.allData.user.id}/2021
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unidade Máxima</td>
            <td>{props.allData.dataProfessional.dadosUnidade.unidadeMaxima}</td>
          </tr>

          <tr>
            <td>Horário de Funcionamento:</td>
            <td>{props.allData.dataProfessional.dadosUnidade.horario}</td>
          </tr>

          <tr>
            <td>Unidade de Exercício:</td>
            <td>
              {props.allData.dataProfessional.dadosUnidade.unidadeExercicio}
            </td>
          </tr>

          <tr>
            <td>Horário de Funcionamento:</td>
            <td>
              {props.allData.dataProfessional.dadosUnidade.horarioExercicio}
            </td>
          </tr>

          <tr>
            <td>Campus:</td>
            <td>{props.allData.dataProfessional.dadosUnidade.campus.name}</td>
          </tr>
        </tbody>
      </CustomTable>
      <CustomTable>
        <thead>
          <tr>
            <th colSpan="4">DADOS DO SERVIDOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome: </td>
            <td colSpan="3">{props.allData.user.name}</td>
          </tr>

          <tr>
            <td>Cargo efetivo:</td>
            <td>{props.allData.dataProfessional.dadosServidor.cargoEfetivo}</td>
            <td>Carga horária semanal</td>
            <td>
              {props.allData.dataProfessional.dadosServidor.regime.description}
            </td>
          </tr>

          {props.allData.dataProfessional.dadosServidor.exerceGestao ? (
            <>
              <tr>
                <td>Dados de gestão:</td>
                <td colSpan="3">
                  {props.allData.dataProfessional.dadosServidor.denominacao
                    .descricao +
                    " - " +
                    props.allData.dataProfessional.dadosServidor.nivelChefia
                      .descricao}
                </td>
              </tr>
              <tr>
                <td>Quantidade de servidores gerenciados:</td>
                <td colSpan="3">
                  {
                    props.allData.dataProfessional.dadosServidor
                      .servidoresGerenciados
                  }
                </td>
              </tr>
            </>
          ) : (
            <></>
          )}
        </tbody>
      </CustomTable>
      <br />
      <br />
      <CustomTable>
        <thead>
          <tr>
            <th colSpan="4">DADOS DA CHEFIA IMEDIATA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome: </td>
            <td colSpan="3">
              {props.allData.dataProfessional.dadosChefe.nome}
            </td>
          </tr>
          <tr>
            <td>Cargo de Direção / Função Gratificada:</td>
            <td colSpan="3">
              {props.allData.dataProfessional.dadosChefe.cargo}
            </td>
          </tr>
        </tbody>
      </CustomTable>
      {props.allData.afastamentos.length === 0 ? (
        ""
      ) : (
        <CustomTable>
          <thead>
            <tr>
              <th colSpan="4">PLANEJAMENTO INTERNO – FORÇA DE TRABALHO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                O servidor deverá indicar abaixo eventuais afastamentos,
                licenças, férias ou outros tipos de ausências, se houver, que já
                estejam previstos para os próximos três meses contados a partir
                do envio das informações à SGP (Art 7º da IN SGP/UNILAB nº 8 de
                04 de dezembro de 2020).
              </td>
            </tr>

            {props.allData.afastamentos.map((afastamento, index) => (
              <tr key={afastamento.id}>
                <td>{afastamento.tipoAusencia.descricao}</td>
                <td>{afastamento.especificar}</td>
                <td>Período</td>
                <td>
                  {toBrFormat(afastamento.inicio) +
                    " - " +
                    toBrFormat(afastamento.fim)}
                </td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      )}

      <CustomTable>
        <thead>
          <tr>
            <th colSpan="2">
              ATIVIDADES EM TRABALHO REMOTO OU SOB REVEZAMENTO
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              Indique abaixo a modalidade de trabalho predominante esperada para
              o servidor nos próximos três meses contados a partir do envio das
              informações à SGP (Art 7º da IN SGP/UNILAB nº 8 de 30 de novembro
              de 2020). Importante! Lembrando que, ainda que a modalidade
              (remoto ou revezamento) possa ser alterada durante o período de
              três meses, sempre deverá ser feita pela chefia imediata a
              avaliação da incompatibilidade entre a natureza das atividades
              desempenhadas pelo servidor e o regime de trabalho remoto.
            </td>
          </tr>
          <tr>
            <td>Regime de trabalho</td>
            <td>{props.allData.regimeDeTrabalho}</td>
          </tr>
        </tbody>
      </CustomTable>
      <br />
      <br />
      <br />
      {atividades0.length === 0 &&
      atividades1.length === 0 &&
      atividades2.length === 0 &&
      atividades3.length === 0 ? (
        ""
      ) : (
        <CustomTable>
          <thead>
            <tr>
              <th colSpan="5">METAS DE DESEMPENHO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">
                Indique abaixo as metas de desempenho das atividades que serão
                desenvolvidas em trabalho remoto, quando este ocorrer integral
                (dias trabalhados integralmente de forma remota) ou parcial
                (dias de trabalho em regime de revezamento entre o trabalho
                presencial e remoto), para os próximos três meses, conforme
                descrição a seguir: (a) Ordem de prioridade – atividade
                considerada prioritária dentre as demais atividades que serão
                desenvolvidas nos dias de trabalho remoto. (b) Atividade –
                processo de trabalho que será desenvolvido pelo servidor nos
                dias de trabalho remoto, podendo ser em fluxo definido por meio
                de processo SEI ou por ação não vinculada ao SEI. (c) Meta de
                desempenho – Resultado esperado para a atividade, quantitativa
                ou qualitativamente, dentro do período proposto de acordo com o
                planejamento interno da unidade máxima. (d) Período esperado
                para atingimento da meta – Prazo programado para cumprimento do
                resultado projetado (meta), podendo ser em dias, semanas ou
                meses, desde que não ultrapasse três meses após a aprovação da
                SGP. (e) Observação – elencar qualquer situação referente à
                meta.
              </td>
            </tr>
          </tbody>
        </CustomTable>
      )}

      {atividades0.length === 0 ? (
        <></>
      ) : (
        <CustomTable>
          <tbody>
            <tr>
              <th colSpan="5">
                ATIVIDADES DE NATUREZA CONTÍNUA (DE ROTINA DIÁRIA)
              </th>
            </tr>
            <tr>
              <td>Sequência</td>
              <td>Atividade</td>
              <td>Público atendido</td>
              <td>Frequência de realização da atividade</td>
              <td>
                Expectativa de melhoria da atividade durante o trabalho remoto
              </td>
            </tr>

            {atividades0.map((atividade, index) => (
              <tr key={atividade.id}>
                <td>{index+1}</td>
                <td>{atividade.atividades}</td>
                <td>{atividade.publicoMetas}</td>
                <td>{atividade.frequenciaPeriodo}</td>
                <td>{atividade.expectativaObservacao}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      )}

      {atividades1.length === 0 ? (
        <></>
      ) : (
        <CustomTable>
          <tbody>
            <tr>
              <th colSpan="5">ATIVIDADES VINCULADAS A PROCESSO SEI</th>
            </tr>
            <tr>
              <td>Ordem de prioridade</td>
              <td>Atividade</td>
              <td>Meta de desempenho</td>
              <td>Período para atingimento da meta</td>
              <td>
                Observação
              </td>
            </tr>
            {atividades1.map((atividade, index) => (
              <tr key={atividade.id}>
                <td>{index+1}</td>
                <td>{atividade.atividades}</td>
                <td>{atividade.publicoMetas}</td>
                <td>{atividade.frequenciaPeriodo}</td>
                <td>{atividade.expectativaObservacao}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      )}

      {atividades2.length === 0 ? (
        <></>
      ) : (
        <CustomTable>
          <tbody>
            <tr>
              <th colSpan="5">ATIVIDADES VINCULADAS A PROJETOS</th>
            </tr>
            <tr>
              <td>Ordem de prioridade</td>
              <td>Atividade</td>
              <td>Meta de desempenho</td>
              <td>Período para atingimento da meta</td>
              <td>
                Observação
              </td>
            </tr>
            {atividades2.map((atividade, index) => (
              <tr key={atividade.id}>
                <td>{index+1}</td>
                <td>{atividade.atividades}</td>
                <td>{atividade.publicoMetas}</td>
                <td>{atividade.frequenciaPeriodo}</td>
                <td>{atividade.expectativaObservacao}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      )}

      {atividades3.length === 0 ? (
        <></>
      ) : (
        <CustomTable>
          <tbody>
            <tr>
              <th colSpan="5">ATIVIDADES VINCULADAS A AÇÕES</th>
            </tr>
            <tr>
              <td>Ordem de prioridade</td>
              <td>Atividade</td>
              <td>Meta de desempenho</td>
              <td>Período para atingimento da meta</td>
              <td>
                Observação
              </td>
            </tr>
            {atividades3.map((atividade, index) => (
              <tr key={atividade.id}>
                <td>{index+1}</td>
                <td>{atividade.atividades}</td>
                <td>{atividade.publicoMetas}</td>
                <td>{atividade.frequenciaPeriodo}</td>
                <td>{atividade.expectativaObservacao}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      )}
    </Container>
  );
}
