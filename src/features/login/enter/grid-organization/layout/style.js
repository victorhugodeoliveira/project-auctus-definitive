import styled from 'styled-components';

export const Grid = styled.div`
   align-items: center;
   justify-content: center;

   display: grid;
   grid-template-columns: 300px 300px;
   grid-template-rows: 200px 200px;

   grid-template-areas:
   'IMG CT';

   height: 100vh;
`;