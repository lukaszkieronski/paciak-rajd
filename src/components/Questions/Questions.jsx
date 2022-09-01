import { Stack, Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useMemo, useState, useRef } from "react";
import { questionList } from 'data/questions'
import { Question } from './Question'

export const Questions = ({ visited, answers, setAnswers }) => {

  let avaliableList = useMemo(() => {
    return questionList.filter((question) => {
      return (question.triggerOn in visited) && !(question.id in answers);
    });
  }, [visited, answers])

  const [questionId, setQuestionId] = useState(-1)

  const timer = useRef(0)

  const handleOpen = (id) => {
    timer.current = Date.now()
    setQuestionId(id)
    setAnswers({ ...answers, [id]: { answer: 0, time: 0 } })
  }

  const handleClose = (answer) => {
    const time = Date.now() - timer.current
    setAnswers({ ...answers, [questionId]: { answer, time } })
    setQuestionId(-1)
  }

  return (
    <div>
      <Stack direction="column" spacing={2} sx={{ p: 2 }}>
        <Card>
          <CardHeader title="Pytania" />
          <CardContent>
            <List>
              {
                avaliableList.map((question) =>
                  <ListItem key={question.id}>
                    <ListItemButton onClick={() => handleOpen(question.id)}>
                      <ListItemText primary={'Pytanie ' + question.id} />
                    </ListItemButton>
                  </ListItem>
                )
              }
            </List>
          </CardContent>
        </Card>
      </Stack>
      <Question questionId={questionId} handleClose={handleClose} />
    </div>
  );
};

export default Questions;
