
import { Divider, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"

export const SideBar = () => {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

    return (
        <>
            <Toolbar variant='h6' component='div'>
                <Typography>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <List className="animate__animated animate__fadeIn">
                {
                    notes.map(note => (
                        <SideBarItem key={note.id} {...note} />
                    ))
                }
            </List>
        </>
    )
}
