import styled from 'styled-components';


export const Container = styled.div`
    position: absolute;
    bottom: -15px;
    left: 350px;
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
    margin-top: 25px;
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
export const ButtonSubmit = styled.button`
    position: relative;
    right: 10px;
    top: 120px;
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
