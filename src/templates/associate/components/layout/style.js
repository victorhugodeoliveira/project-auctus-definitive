import styled from 'styled-components';

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: 70px 1000px;

   grid-template-areas:
   'MH MH'
   'AS CT';

   height: 100vh;
`;
