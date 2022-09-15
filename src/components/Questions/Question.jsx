import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material"
import { useState, useMemo } from "react";
import { questions } from 'data/questions'


export const Question = ({ questionId, handleClose }) => {

    const [answer, setAnswer] = useState(0)

    const questionData = useMemo(() => {
        return questionId in questions ? questions[questionId] : undefined
    }, [questionId])

    const closeAnswered = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        handleClose(Number(answer))
        setAnswer(0)
    }

    const closeUnanswered = (event, reason) => {
        if (reason && reason == "backdropClick")
            return;
        handleClose(0)
        setAnswer(0)
    }


    return (
        <Dialog fullScreen open={questionId > 0}>
            <DialogTitle>Pytanie {questionId}</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    {questionData?.text}
                </DialogContentText>
                {questionData?.img && <img src={questionData.img} width="100%" />}
                <Divider sx={{ mt: 2, mb: 2 }} />
                <RadioGroup value={answer} onChange={(event) => setAnswer(event.target.value)}>
                    <FormControlLabel value={1} control={<Radio />} label={questionData?.answers[0]} />
                    <FormControlLabel value={2} control={<Radio />} label={questionData?.answers[1]} />
                    <FormControlLabel value={3} control={<Radio />} label={questionData?.answers[2]} />
                </RadioGroup>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Stack direction="row" justifyContent="space-between">
                    <Button variant="contained" onClick={closeAnswered} disabled={answer == 0} color="error">Odpowiedz</Button>
                    <Button variant="contained" onClick={closeUnanswered}>Zamknij</Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}