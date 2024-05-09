import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components"

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={drawerWidth} />

            <Box component='main' sx={{ flexGrow: 1, p: 3 }} className="animate__animated animate__fadeIn">
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
