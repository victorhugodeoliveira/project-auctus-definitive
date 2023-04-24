import styled from 'styled-components';

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 25% 75%;
   grid-template-rows: 7% 93%;

   grid-template-areas:
   'MH MH'
   'AS CT';

   height: 100vh;
`;
