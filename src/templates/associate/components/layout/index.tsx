import React from 'react'
import { Grid } from './style'

import Aside from '../aside'
import Content from '../content'
import Header from '../header'

const Layout: React.FC = () => {
    return ( 
        <Grid>
            <Header/>
            <Aside/>
            <Content/>
        </Grid>
     );
}
 
export default Layout 