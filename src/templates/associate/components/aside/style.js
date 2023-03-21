import styled from 'styled-components';


export const Container = styled.div`
    grid-area: AS;
    background: #fff;
    padding-left: 20px;
    max-width: 200px;
    border-right: 1px solid #e1e1e1 ;
`;


export const LogoHeader = styled.h3`
    margin-left: 10px;
    position: relative;
    top: 5px;
    color: #444;
    transition: color 0.2s;
    font-size: 1.7rem;
    max-height: 50px;



    &:hover {
        color: #007fff;

    }
`;

export const LogoHeader2 = styled.h3`
    margin-left: 10px;
    position: relative;
    bottom: 53px;
    left: 120px;
    color: #007fff;
    transition: color 0.2s;
    font-size: 1.7rem;
    max-height: 50px;


    &:hover {
        color: #444;

    }
`;

export const ListContainer = styled.ul`
    position: relative;
    top: 40px;
    display: inline;
`

export const MenuItem = styled.li`
      list-style-type: none;
      margin: 20px 10px;
      cursor: pointer;
      color: #007fff;
      font-weight: 300;

      transform: opacity .2s;

&:hover {
    opacity: .7;
}
`