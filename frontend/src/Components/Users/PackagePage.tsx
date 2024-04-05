import { Box, Card, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import "../../css/Package.css"
import { ThemeContext } from '../Themes/ThemeProvider.tsx';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomePage from './MainPage/HomePage';

export default function PackagePage() {
    const { theme,dark } = useContext(ThemeContext)
    const handleClick = () => {
        console.log('clicked')
    }
    function DefaultCardStyle() {
        return (
            <Card className='cardDefault' sx={{ backgroundImage: 'url("/images/default.jpg")' }}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Creator Pack
                    </Typography>
                    <Divider sx={{ borderColor: "grey" }} />
                    <Typography variant="body2" color="text.secondary">
                        This is the creator pack.
                        The Default Option with no extra benefit.
                        You can like, follow, comment on every post.
                        Can only post 5 artworks per month.
                    </Typography>
                    <Divider sx={{ borderColor: "grey" }} />
                    <Typography variant="body2" color="error">
                        Price: Free
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <Button disabled={true} className='buyBtn' onClick={handleClick} size="small" color="primary">
                        Default
                    </Button>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>
        )
    }
    function PremiumCardStyle() {
        return (
            <Card className='cardPremium' sx={{ backgroundImage: 'url("/images/gold.jpg")' }}><CardContent>
                <Typography gutterBottom variant="h5" color="gold" component="div">
                    Artix Pack
                </Typography>
                <Divider sx={{ borderColor: "gold" }} />
                <div>
                    <Typography variant="body2" color="gold">
                        This is the Artix pack.
                        Avatar now decorated with a shiny premium Icon.
                        All artwork you post will more likely to appear in someone Home Page.
                        All post you made will containt a premium check.
                        Can post 30 artworks per month.
                    </Typography>
                    <Divider sx={{ borderColor: "gold" }} />
                    <Typography variant="body2" color="error">
                        Price: {100 * 1000 + " VND"}
                    </Typography>
                </div>
            </CardContent>
                <CardActionArea>
                    <Button
                        sx={{
                            backgroundColor: "goldenrod", color: "black", border: 'solid 1px', borderLeft: "none", borderRight: "none", borderRadius: '0px'
                            , ":hover": {
                                backgroundColor: "none", color: "gold", border: 'solid 1px goldenrod', borderLeft: "none", borderRight: "none",
                            },
                        }}
                        className='buyBtn' onClick={handleClick} size="small">
                        Purchase
                    </Button>
                </CardActionArea>
                <CardActions>
                </CardActions>

            </Card>
        )
    }

    return (
        <div className='packagePage'>
            <Box
                sx={{
                    color: theme.color,
                    backgroundColor: `rgba(${theme.rgbBackgroundColor},0.97)`,
                    backgroundImage:dark?'url("/images/darkPackage.jpg")':'url("/images/lightPackage.jpg")',
                    transition: theme.transition,
                    width: '95%',
                    margin: 'auto',
                    borderRadius: '5px',
                    marginBottom: '15px',
                }}>
                <Box sx={{padding:"2% 2% 0% 2%"}}>
                <Typography variant='h4' color={theme.color} >Account Packages</Typography>
                <Divider sx={{ borderColor: theme.color }} />
                </Box>
                <Box className="packageContainer">
                    <DefaultCardStyle />
                    <PremiumCardStyle />
                </Box>
            </Box>
        </div>
    )
}
