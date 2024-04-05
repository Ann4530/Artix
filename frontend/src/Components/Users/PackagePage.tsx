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
import { Package } from '../../Interfaces/Package.ts';
import { GetPackage } from '../../API/PackageAPI/GET.tsx';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function PackagePage() {
    const { theme, dark } = useContext(ThemeContext)
    const [packageService, SetPackgeService] = useState<Package[]>()
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getPackage = async () => {
            setLoading(true)
            let packageList: Package[] | undefined = await GetPackage()
            SetPackgeService(packageList ?? [])
            setLoading(false)
        }
        getPackage()
    }, [])

    const handleClick = () => {
        console.log('clicked')
    }

    const defaultCardStyle = (packageService: Package) => {
        return (
            <Card className='cardDefault' sx={{ backgroundImage: 'url("/images/default.jpg")' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {packageService.packageName}
                    </Typography>
                    <Divider sx={{ borderColor: "grey" }} />
                    <Typography variant="body2" color="text.secondary">
                        {packageService.packageDescription}
                    </Typography>
                    <Divider sx={{ borderColor: "grey" }} />
                    <Typography variant="body2" color="error">
                        {packageService.packagePrice === 0 ? "Free" : packageService.packagePrice}
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
    const premiumCardStyle = (packageService: Package) => {
        return (
            <Card className='cardPremium' sx={{ backgroundImage: 'url("/images/gold.jpg")' }}><CardContent>
                <Typography gutterBottom variant="h5" color="gold" component="div">
                    {packageService.packageName}
                </Typography>
                <Divider sx={{ borderColor: "gold" }} />
                <div>
                    <Typography variant="body2" color="gold">
                        {packageService.packageDescription}
                    </Typography>
                    <Divider sx={{ borderColor: "gold" }} />
                    <Typography variant="body2" color="error">
                        {packageService.packagePrice === 0 ? "Free" : packageService.packagePrice + " VND"}
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
                    backgroundImage: dark ? 'url("/images/darkPackage.jpg")' : 'url("/images/lightPackage.jpg")',
                    transition: theme.transition,
                    width: '95%',
                    margin: 'auto',
                    borderRadius: '5px',
                    marginBottom: '15px',
                }}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 100 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Box sx={{ padding: "2% 2% 0% 2%" }}>
                    <Typography variant='h4' color={theme.color} >Account Packages</Typography>
                    <Divider sx={{ borderColor: theme.color }} />
                </Box>
                <Box className="packageContainer">
                    {packageService?.map((service, index) => {
                        return (
                            index === 0 ? defaultCardStyle(service) :
                                index === 1 ? premiumCardStyle(service) : ""
                        )
                    })}


                </Box>
            </Box>
        </div>
    )
}
