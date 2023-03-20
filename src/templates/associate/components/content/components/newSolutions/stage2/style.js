import styled from 'styled-components';


export const Container = styled.div`
    position: absolute;
    top: 280px;
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

export const TitleStage2 = styled.h4`
    position: absolute;
    width: 200px;
    top: 20px;
    color: #007fff;
    font-weight: 300;
`

export const Select = styled.select`
    position: relative;
    top: 70px;
    left: 20px;
    margin: 0px 20px;
`

export const TitleFocus = styled.h4`
    position: absolute;
    left: 200px;
    color: #007fff;
    font-weight: 300;
`
export const TitleProcess = styled.h4`
    position: absolute;
    left: 400px;
    color: #007fff;
    font-weight: 300;
`

export const TextArea = styled.textarea`
    resize: none;
    font-weight: 300px;
    font-family: Arial;
    min-height: 200px;
    min-width: 500px;
    position: relative;
    top: 100px;
    left: 11px;
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