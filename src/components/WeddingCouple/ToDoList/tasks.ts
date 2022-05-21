export interface task {
    id: number,
    title: string,
    checked: boolean,
    tooltip: string
}

export interface toDoList {
    [key: string]: task[]
};

export const tasks: toDoList = {
    preparation: [
        {id: 1, title: "Wyznaczenie daty ślubu", checked: false, tooltip: "Szczegóły w zakładce Ceremonia ślubu"},
        {id: 2, title: "Zaproszenie Twojej drugiej połówki", checked: false, tooltip: "Szczegóły w zakładce "},
        {id: 3, title: "Ustalenie budżetu", checked: false, tooltip: "Szczegóły w zakładce Budżet"},
        {id: 4, title: "Utworzenie listy gości", checked: false, tooltip: "Szczegóły w zakładce Lista Gości"},
    ],
    weddingCeremony:[
        {id: 1, title: "Wybór miejsca ceremonii", checked: false, tooltip:"Szczegóły w zakładce Ceremonia Ślubu"},
        {id: 2, title: "Ustalenie daty i godziny ceremonii", checked: false, tooltip: "Szczegóły w zakładce Ceremonia Ślubu"},
        {id: 3, title: "Wybór świadków", checked: false, tooltip: "Szczegóły w zakładce Ceremonia Ślubu"},
        {id: 4, title: "Projekt zaproszenia", checked: false, tooltip: "Szczegóły w zakładce Ceremonia Ślubu"},
        {id: 5, title: "Wysłanie zaproszeń do gości", checked: false, tooltip: "Szczegóły w zakładce Zaproszenia"},
        {id: 6, title: "Rozmieszczenie gości przy stole", checked: false, tooltip: "Szczegóły w zakładce Rozmieszczenie gości"},
        {id: 7, title: "Skompletowanie stroju Panny Młodej", checked: false, tooltip: "Szczegóły w zakładce Panna Młoda"},
        {id: 8, title: "Skompletowanie stroju Pana Młodego", checked: false, tooltip: "Szczegóły w zakładce Pan Młody"}
    ],
    weddingParty: [
        {id: 1, title: "Wybór charakteru przyjęcia weselnego", checked: false, tooltip: "Szczegóły w zakładce Wesele"},
        {id: 2, title: "Ustalenie miejsca przyjęcia weselnego", checked: false, tooltip: "Szczegóły w zakładce Wesele"},
        {id: 3, title: "Wpłacenie zaliczki w restauracji", checked: false, tooltip: "Szczegóły w zakładce Budżet"},
    ],
};

