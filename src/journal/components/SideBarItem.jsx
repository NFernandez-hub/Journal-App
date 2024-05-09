import { TurnedInNot } from "@mui/icons-material"
import {
    Grid,
    ListItem, ListItemButton,
    ListItemIcon, ListItemText
} from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store"

export const SideBarItem = ({ id, title = '', body, imageUrls = [], date }) => {

    const dispatch = useDispatch()

    const activeNote = () => {
        dispatch(setActiveNote({ id, title, body, imageUrls, date }))
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title])

    const newBody = useMemo(() => {
        return body.length > 17
            ? body.substring(0, 17) + '...'
            : body
    }, [body])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={activeNote} sx={{height: 55}}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} secondary={newBody}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
