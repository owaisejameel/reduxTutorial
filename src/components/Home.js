import React from 'react'
import { Button, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    btn: {
        backgroundColor: "blue",
        padding: "5px 20px"
    },
    cart: {
        position:'absolute',
        width:'50px',
        top:'25px',
        right: "20px"
    }


})
export default function Home() {
    const classes = useStyle();
    return (
        <>
            <Grid container>
                <Grid container style={{ backgroundColor: 'khaki', padding: '20px' }}>
                    <Grid item><img className={classes.cart} src='/download.png'></img></Grid>
                    <Grid item container justifyContent='center'>
                    <Typography variant="h4" align='center'>Home Component</Typography></Grid>
                    <Grid item container direction='column' >
                        <Grid item><img src='/download.jpeg'></img></Grid>

                        <Grid item><Typography variant='h6'>I-Phone price : $1000   </Typography></Grid>

                        <Grid item><Button className={classes.btn}>Add to Cart</Button></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
