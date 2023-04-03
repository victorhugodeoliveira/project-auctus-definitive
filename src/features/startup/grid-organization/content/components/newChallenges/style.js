import styled from 'styled-components';

export const ContainerNew = styled.div`
    position: relative;
    max-width: 400px;
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
export const TitleHeadContent = styled.h2`
    color: #007fff;
    width: 400px;
    max-width: 400;
    max-height: 50;
    font-weight: 300;
`

export const SubTitle = styled.h4`
    color: #000;
    font-weight: 300;

`

export const ButtonRegister = styled.button`
    position: relative;
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

