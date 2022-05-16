interface task {
    id: number,
    title: string,
    checked: boolean
}

interface toDoList {
    preparation: task[],
    weddingCeremony: task[],
    weddingParty: task[]
};

export const tasks: toDoList = {
    preparation: [
        {id: 1, title: "Wyznaczenie daty ślubu", checked: false},
        {id: 2, title: "Zaproszenie Twojej drugiej połówki", checked: false},
        {id: 3, title: "Ustalenie budżetu", checked: false},
        {id: 4, title: "Utworzenie listy gości", checked: false},
    ],
    weddingCeremony:[
        {id: 1, title: "Wybór miejsca ceremonii", checked: false},
        {id: 2, title: "Ustalenie daty i godziny ceremonii", checked: false},
        {id: 3, title: "Wybór świadków", checked: false},
        {id: 4, title: "Projekt zaproszenia", checked: false},
        {id: 5, title: "Wysłanie zaproszeń do gości", checked: false},
        {id: 6, title: "Rozmieszczenie gości przy stole", checked: false}
    ],
    weddingParty: [
        {id: 1, title: "Wybór charakteru przyjęcia weselnego", checked: false},
        {id: 2, title: "Ustalenie miejsca przyjęcia weselnego", checked: false},
        {id: 3, title: "Wpłacenie zaliczki w restauracji", checked: false},
    ],
};

