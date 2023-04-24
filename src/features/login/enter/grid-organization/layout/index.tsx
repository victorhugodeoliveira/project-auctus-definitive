import React from 'react'
import { Grid } from './style';

import Image from '../image';
import Content from '../content'

const Layout: React.FC = () => {
    return(
        <Grid>
            <Image/>
            <Content/>
        </Grid>
    )
}

export default Layout;