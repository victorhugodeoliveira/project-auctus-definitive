import React from 'react'

import { Container, TitleStage2, Select, TitleFocus, TitleProcess, TextArea  } from './style'

const Stage2: React.FC = () => {
    return ( 
        <Container>
            <TitleStage2>Tipo de solução:</TitleStage2>
            <Select name="selectTypeSolution" id="">
                <option value="biologico">Biológico</option>
            </Select>
            <TitleFocus>Foco:</TitleFocus>
            <Select name="selectTypeFocus" id="">
                <option value="aumentoNaProdutividade">Aumento na Produtividade</option>
            </Select>
            <TitleProcess>Processo:</TitleProcess>
            <Select styles={{ position: 'relative', left: 80 }} name="selectTypeProcess" id="">
                <option value="produção">Produção</option>
                <option value="processamento">Processamento</option>
            </Select>

            <TextArea name="open field" id="" cols="30" rows="10" placeholder="Digite aqui outras informações sobre..." ></TextArea>
        </Container>
     );
}
 
export default Stage2;