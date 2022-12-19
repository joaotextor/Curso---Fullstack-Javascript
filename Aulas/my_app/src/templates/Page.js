import Typography from '@mui/material/Typography'

export default function Page({title, Component}) {
    return (
        <>
            <Typography variant="h3" component="h1">
                {title}
            </Typography>
            <Component />
        </>
    )
}