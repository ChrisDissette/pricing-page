import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import GlobalStyles from '@mui/material/GlobalStyles';
import { CssBaseline } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import StarIcon from '@mui/icons-material/Star';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <AppBar position='static' color='default' elevation={0}>
          <Toolbar sx={{flexWrap: 'wrap'}}>
            <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }} >Company Name</Typography>
            <nav>
              <Link variant='button' href='#' sx={{ my:1, mx: 1.5 }}>
                Features
              </Link>
              <Link
                variant="button"
                color="primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Enterprise
              </Link>
              <Link
                variant="button"
                color="primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Support
              </Link>
            </nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Container disableGutters maxWidth='sm' component='main' sx={{ pt: 8, pb: 6 }} >
          <Typography component='h1' variant='h2' align='center' color='primary' gutterBottom >
            Pricing
          </Typography>
          <Typography variant='h5' align='center' color='text.primary' component='p' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Container>
        <Container maxWidth='md' component='main' >
          <Grid container spacing={5} alignItems='flex-end' >
            {
              tiers.map((tier) => (
                <Grid item key={tier.title} xs='12' sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center'}}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{align: 'center'}}
                      sx={{
                        backgroundColor:(theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700]
                      }}
                    />
                    <CardContent> 
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2
                      }}
                    >
                      <Typography component='h2' variant='h3' color='primary'>
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component='li'
                          variant='subtitle1'
                          align='left'
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
                  </Card>
                  </Grid>
              ))}
          </Grid>
        </Container>
        <Container
          maxWidth='md'
          component='footer'
          sx={{ 
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8, py: [3,6]
          }}
        >
          <Grid container spacing={4} justifyContent='space-evenly'>
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title} display='flex' flexDirection='column' alignItems='center'>
                <Typography variant='h6' color='text.primary' gutterBottom >
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) =>(
                    <li key={item}>
                      <Link href='#' variant='subtitle1' color='text.secondary'>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}

export default App;
