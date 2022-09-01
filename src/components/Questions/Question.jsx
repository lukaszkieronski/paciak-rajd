import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react";

export const Question = ({ questionId, handleClose }) => {

    const [answer, setAnswer] = useState(0)

    const tryClose = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        handleClose(Number(answer))
        setAnswer(0)
    }

    return (
        <Dialog fullScreen onClose={tryClose} open={questionId > 0}>
            <DialogTitle>Pytanie {questionId}</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <RadioGroup value={answer} onChange={(event) => setAnswer(event.target.value)}>
                    <FormControlLabel value={1} control={<Radio />} label="odpowiedź 1" />
                    <FormControlLabel value={2} control={<Radio />} label="odpowiedź 2" />
                    <FormControlLabel value={3} control={<Radio />} label="odpowiedź 3" />
                    <FormControlLabel value={4} control={<Radio />} label="odpowiedź 4" />
                </RadioGroup>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Button variant="contained" onClick={tryClose} disabled={answer == 0}>Odpowiedz</Button>

            </DialogContent>
        </Dialog>
    )
}