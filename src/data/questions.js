export const questions = {
    1: { text: "Pytanie 1", triggerOn: 1, answers: ["1", "2", "3"] },
    2: { text: "Pytanie 2", triggerOn: 1, answers: ["1", "2", "3"] },
    3: { text: "Pytanie 3", triggerOn: 2, answers: ["1", "2", "3"] },
    4: { text: "Pytanie 4", triggerOn: 2, answers: ["1", "2", "3"] },
    5: { text: "Pytanie 5", triggerOn: 3, answers: ["1", "2", "3"] },
    6: { text: "Pytanie 6", triggerOn: 3, answers: ["1", "2", "3"] },
    7: { text: "Pytanie 7", triggerOn: 4, answers: ["1", "2", "3"] },
}

export const questionList =
    Object.entries(questions).map(([k, v], i) => {
        return { id: i + 1, ...v }
    })