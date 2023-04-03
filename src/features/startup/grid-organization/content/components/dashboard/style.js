import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;
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

export const InputSeach = styled.input`
    width: 400px;
    font-size: 1.0rem;
    padding: 7px 7px;
`

export const DivContent = styled.div`
    margin-top: 50px;
`

export const TitleContent = styled.h3`
    color: #007fff;
    font-weight: 300;
`

export const MyProjectsContainer = styled.div`
    align-items: center;
    margin-right: 20px;
    display: inline-flex;
    position: relative;
    bottom: 20px;
`

export const MyProject = styled.div`
    border: 1px solid #e1e1e1 ;
    margin-right: 25px;
    display: inline-flex;
    flex-direction: column;
    padding: 4px 6px;
    max-width: 200px;
    max-height: 150px;

    @keyframes go-back {
    0% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}
    animation: go-back 1s;

`

export const TitleProjects = styled.h4`
    font-weight: 300;
`

export const CompanyName = styled.h4`
    position: relative;
    bottom: 30px;
    color: #000;
    font-weight: 300;
`

export const Description = styled.h4`
    position: relative;
    bottom: 60px;
    color: #000;
    font-weight: 300;
`

export const NewProjectsContainer = styled.div`
    margin-right: 20px;
    display: inline-flex;
    position: relative;
    bottom: 20px;
`

export const NewProject = styled.div`
    position: relative;
    bottom: 50px;
    border: 1px solid #e1e1e1 ;
    margin-right: 25px;
    display: inline-flex;
    flex-direction: column;
    padding: 4px 6px;
    max-width: 200px;
    max-height: 150px;
    @keyframes go-back {
    0% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}
    animation: go-back 1s;

`

export const TitleNewProjects = styled.h4`
    font-weight: 300;
`