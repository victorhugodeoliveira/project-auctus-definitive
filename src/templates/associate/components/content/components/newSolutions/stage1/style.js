import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    right: 339px;
    top: 200px;
    margin-top: 30px;
    max-height: 400px;
    animation: fadeIn 1s;
    @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

export const TitleStage1 = styled.h2`
    color: #007fff;
    margin-top: 50px;
    position: relative;
    left: 350px;
    bottom: 200px;
    font-weight: 300;
`

export const BoxContent = styled.div`
    margin: 10px 0px ;
    min-width: 550px;
    min-height: 200px;
    max-height: 400px;
    position: relative;
    left: 340px;
    bottom: 215px;
`

export const SubTitleStage = styled.h4`
    color: #007fff;
    margin-top: 50px;
    font-weight: 300;
    position: relative;
    left: 10px;
`;

export const Select = styled.select`
    font-size: 1.0rem;
    position: relative;
    left: 80px;
    bottom: 40px;
    border-color: #007fff;
    border-radius: 3px;
    color: #fff;
    background-color: #007fff;
`;

export const CheckboxDiv = styled.div`
    position: relative;
    bottom: 10px;
    left: 10px;
    display: inline-flex;
`

export const Checkbox = styled.input`
    position: relative;
    margin-right: 10px;
 
`
export const TitleCheckbox = styled.h5`
    font-weight: 300;
    color: #000;
    position: relative;
    bottom: 20px;

`

export const TextArea = styled.textarea`
    resize: none;
    font-weight: 300px;
    font-family: Arial;
    min-height: 100px;
    min-width: 200px;
    position: relative;
    bottom: 45px;
    left: 11px;
    margin-bottom: 55px;
    border: 1px solid #e1e1e1;
    outline: none;
    animation: fadeIn 1s;
    @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

export const ButtonStage2 = styled.button`
    position: relative;
    left: 338px;
    bottom: 300px;
    margin-top: 20px;
    color: #ffff;
    background-color: #007fff;
    border-color: #007fff;
    border-radius: 5px;
    padding: 10px 20px;
    animation: fadeIn 1s;
    max-width: 100;
    max-height: 100;
    cursor: pointer;

    @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`