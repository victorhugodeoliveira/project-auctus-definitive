import React from 'react'

import { 
    Container,
    TitleStage2,
    Select,
    TitleFocus,
    TitleProcess,
    TextArea,
    ButtonSubmit
  } from './style'

const Stage2: React.FC = () => {
    return ( 
        <Container>
            <TitleStage2>Tipo de solução:</TitleStage2>
            <Select style={{ top: 70 }} name="selectTypeSolution" id="">
                <option value="biologico">Biológico</option>
                <option value="digital">Digital</option>
                <option value="digital">Inteligência Artificial</option>
            </Select>
            <TitleProcess>Processo:</TitleProcess>
            <Select style={{ top: 70, left: 15 }} name="selectTypeProcess" id="">
                <option value="produção">Produção</option>
                <option value="processamento">Processamento</option>
            </Select>
            <TitleFocus>Foco:</TitleFocus>
            <Select style={{ left: 300, top: 50 }} name="selectTypeFocus" id="">
                <option value="reducaoDeCustos">Redução de custos</option>
                <option value="aumentoNaProdutividade">Aumento na Produtividade</option>
                <option value="reducaoDespesas">Redução de despesas administrativas</option>
                <option value="aumentoNaProdutividade">Aumento na Produtividade</option>
                <option value="sustentabilidade">Sustentabilidade</option>
            </Select>

            <TextArea name="open field" id="" cols="30" rows="10" placeholder="Digite aqui outras informações sobre..." ></TextArea>
            <ButtonSubmit>Envie aqui</ButtonSubmit>
        </Container>
     );
}
 
export default Stage2;