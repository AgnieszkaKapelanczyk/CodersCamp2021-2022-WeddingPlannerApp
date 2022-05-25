# CodersCamp 2021/2022 | Projekt Zespołowy | TypeScript

- [Zespół projektowy](#zespół-projektowy)
- [Wedding Planner](#Wedding-planner)
  - [Demo](#demo)
  - [Cel projektu](#cel-projektu)
  - [Działanie aplikacji](#działanie-aplikacji)
    - [Menu Główne](#menu-główne)
    - [Tablica](#Tablica)
    - [Ceremonia ślubu](#Ceremonia-ślubu)
    - [Kalendarz](#Kalendarz)
    - [W przygotowaniu](#W-przygotowaniu)
- [Development aplikacji](#development-aplikacji)
  - [Wykorzystywane technologie](#wykorzystywane-technologie)
  - [Uruchomienie projektu](#uruchomienie-projektu)
  - [Organizacja pracy](#organizacja-pracy)

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp 2021](https://coderscamp.pl/).
Aplikację została wykonana przez uczestników kursu pod okiem dwóch mentorów.

**Mentorzy**: Dariusz Knysak, Paweł Michalak

**Uczestnicy**:

- [Marcin Barszcz](https://github.com/marcinnnnb)
- [Agnieszka Bury](https://github.com/angbur)
- [Agnieszka Kapelańczyk](https://github.com/AgnieszkaKapelanczyk)
- [Marta Pejkowska](https://github.com/MartaPejkowska)

## Wedding Planner App

![This is an image](https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp/blob/main/src/assets/img/readMeImage.png)

### Demo

Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://coders-camp-wedding-planner-app.vercel.app/).

### Cel projektu

Celem projektu było napisanie aplikacji wykorzystującej wiedzę nabytą z czwartego działu kursu, tj. z TypeScript.
Zespół projektowy zdecydował się na zaprojektowaniu oraz zakodowaniu własnego pomysłu, który będzie
realizowany take podczas kolejnego modułu. Wedding Planner, jest aplikacją umoliwiającą przyszłej parze młodej,
w szybki i przejrzysty sposób zaplanowanie jednego z najwazniejszych dni w ich zyciu. Aplikacja przewiduje rowniez panel
dla gosci weselnych, w ktorym to beda mogli potwierdzic przybycie, odznalez sale weselna czy zaplanowac nocleg w okolicy.

Zespół projektowy przygotował design przy użyciu aplikacji FIGMA. Projekt graficzny dostępny jest [TUTAJ](https://www.figma.com/file/dvceitZ7BCtavllEeVlqsz/E-wedding?node-id=0%3A1).

### Działanie aplikacji

#### Menu Główne
Po uruchomieniu aplikacji wyświetlone zostaje Menu główne podzielone na 7 sekcji. Znajdują się tu informacje o tym co można zrobić w aplikacji, jak działa, jakie są pakiety do wykupienia oraz co zawierają. W stopce znajduje się logo aplikacji oraz odnośniki do strony organizatora kursu i repozytorium projektu na Githubie. Z nagłówka można zostać przekierowanym do strony rejestracji bądź logowania. Z poziomu każdego ekranu jest możliwość powrotu do Menu głównego po naciśnięciu logo aplikacji znajdującego się w lewym górnym rogu ekranu.

#### Tablica

Jest to główna strona w panelu pary młodej. Znajdują się tu widżety, które para młoda może sama wybierać, przemieszczać i dostosowywać ich rozmiar do swoich potrzeb. Do wyboru są widżety: odliczanie do daty ślubu, powiadomienia, przypomnienia, postęp przygotowań oraz zdjęcia. W powiadomieniach znajdziemy między innymi takie informacje jak potwierdzenie przybycia przez gości czy informacje połączone z wydarzeniami w kalendarzu. Postęp przygotowań wyświetlany w procentach informuje parę młodą ile zadań z "Listy zadań" zostało wykonanych. 

#### Ceremonia ślubu

W zakładce Ceremonia ślubu para młoda wprowadza niezbędne informacje, takie jak data ślubu, jego rodzaj (cywilny, konkordatowy). Mogą również wybrać świadków przyznając im tym samym większe uprawnienia w aplikacji (np dostęp do listy gości aby ułatwić przygotowanie wieczoru panieńskiego czy kawalerskiego- w przygotowaniu)

#### Kalendarz

Para młoda dodaje wydarzenia, o których kalendarz będzie przypominać na Tablicy, np: przymiarki sukini ślubnej czy spotkania z florystką. 

#### W przygotowaniu: 

##### Lista zadań

Checklista z wszystkimi zadaniami niezbędnymi do organizacji ślubu i wesela

##### Panna Młoda

Dane panny młodej, checklista ubioru oraz proponowane salony sukien ślubnych w okolicy. 

##### Pan Młody

Dane pana młodego, checklista ubioru oraz proponowane sklepy z garniturami w okolicy. 

##### Wesele

Sale weselne w podanej okolicy.

##### Noclegi

Po wybraniu sali weselnej wyświetlane będa noclegi w jej okolicy. 

##### Lista gości

Lista gości weselnych z danymi kontaktowymi oraz status odpowiedzi na zaproszenie (potwierdzono, odmowa, w oczekiwaniu)

##### Lista Prezentów

Lista prezentów stworzona przez parę młodą, widoczna w panelu gości- każdy może przypisać sie do danego prezentu dając znać innym że jest już zajęty (niewidoczne przez parę młodą).

##### Budżet

Kalkulator wydatków.

##### Wiadomości

Czat z gośćmi weselnymi.

##### Notatki

Notatki pary młodej

##### Zaproszenia

Projekt i wysyłka zaproszeń do gości

##### Lista pytań

Lista pytań, które można zadać organizatorom wesela, a często się o nich zapomina. 

##### Rozmieszczenie stołów

Planer rozsadzenia gości- do wyboru stoły okrągłe i prostokątne

##### Inspiracje

Miejsce do trzymania wszystkich zdjęć- inspiracji w jednym miejscu. 

##### Panel gości

Potwierdzenie przybycia lub odrzucenie zaproszenia, możliwość ,,zabukowania" prezentu dla pary młodej, proponowane noclegi w okolicy sali weselnej, mapa dojazdu, odliczanie do dnia ślubu. 

## Development aplikacji

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

- (v. 18.0) \
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- React hooks
- JSX
- ![React Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
- Redux-Toolkit
- react-layout-grid
- fullcalendar
- hook-form
- ![Material-UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
- react-tostify
- ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AgnieszkaKapelanczyk)](https://github.com/anuraghazra/github-readme-stats)

W celu usystematyzowaniu pracy z tworzonymi przez nas commitami, postanowiliśmy pracować według ponizszego schematu:

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).

- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).

- refactor: did not add new functionality / behavior did not change. Files in other places put, deleted, added. Changed the code formatting. Improved the algorithm, without changing the functionality. 

- Others: commit types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention)
  recommends chore:, docs:, style:, refactor:, perf:, test:, and others. We also recommend improvement for commits that improve a current
  implementation without adding a new feature or fixing a bug.

Cały artykuł dostępny jest [TUTAJ](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run dev`

Kod produkcyjny aplikacji znajduje się w katalogu `src`.

### Organizacja pracy

Przy uyciu narzędzia YouTrack (by JetBrains), rozdzielono wszystkie zadania zaplanowane na ten sprint, który trwał około 3 tygodni.
Zespół organizował 3 spotkania w tygodniu, mające na celu przedstawienie postępół pracy i ogólnej dyskusji nad projektem.
Komunikacja odbywała się przez Google Meets oraz Discord.
