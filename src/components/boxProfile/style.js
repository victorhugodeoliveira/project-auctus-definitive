import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    left: 20px;
    z-index: 1;
    top: 50px;
   
`
export const ContentDivProfile = styled.div`
    position: relative;
    width: 150px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #444;
    border-radius: 5px;
`
export const MyProfileTitle = styled.h5`
    position: relative;
    bottom: 10px;
    font-weight: 300;
    color: #007fff;
    margin-left: 20px;
    cursor: pointer;

    transform: opacity .2s;

&:hover {
    opacity: .7;
}
`
export const MyOutherProfile = styled.h5`
    position: relative;
    bottom: 30px;
    font-weight: 300;
    color: #007fff;
    margin-left: 20px;
    cursor: pointer;

    transform: opacity .2s;

&:hover {
    opacity: .7;
}
`
export const ExitMyProfile = styled.h5`
    position: relative;
    bottom: 50px;
    font-weight: 300;
    color: #007fff;
    margin-left: 20px;
    cursor: pointer;

    transform: opacity .2s;

&:hover {
    opacity: .7;
}
`