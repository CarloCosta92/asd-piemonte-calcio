export const clubData = {
  name: "ASD Piemonte Calcio",
  slogan: "Passione, impegno e vittoria dal 1985",
  founded: 1985,
  stats: [
    { label: "Anni di storia", value: "38+" },
    { label: "Squadre attive", value: "12" },
    { label: "Atleti tesserati", value: "450+" },
    { label: "Titoli vinti", value: "23" },
  ],
  description:
    "Fondata nel 1985 da un gruppo di appassionati, la ASD Piemonte Calcio è diventata un punto di riferimento per lo sport giovanile nella regione. Con strutture moderne e staff qualificato, accompagniamo i nostri atleti dalla scuola calcio fino al professionismo.",
};

export const teams = [
  {
    id: 1,
    name: "Prima Squadra",
    category: "Serie D",
    coach: "Marco Bianchi",
    age: "Open",
    players: 25,
    color: "--color-primary",
  },
  {
    id: 2,
    name: "Juniores",
    category: "Under 19",
    coach: "Andrea Rossi",
    age: "U19",
    players: 23,
    color: "--color-primary-light",
  },
  {
    id: 3,
    name: "Allievi",
    category: "Under 17",
    coach: "Giuseppe Verdi",
    age: "U17",
    players: 22,
    color: "--color-success",
  },
  {
    id: 4,
    name: "Giovanissimi",
    category: "Under 15",
    coach: "Paolo Neri",
    age: "U15",
    players: 24,
    color: "--color-warning",
  },
  {
    id: 5,
    name: "Esordienti",
    category: "Under 13",
    coach: "Luca Ferretti",
    age: "U13",
    players: 20,
    color: "--color-highlight",
  },
  {
    id: 6,
    name: "Pulcini",
    category: "Under 11",
    coach: "Simone Conti",
    age: "U11",
    players: 26,
    color: "--color-primary",
  },
  {
    id: 7,
    name: "Scuola Calcio",
    category: "5-8 anni",
    coach: "Alessandro Martini",
    age: "5-8",
    players: 30,
    color: "--color-primary-light",
  },
];

export const news = [
  {
    id: 1,
    title: "Grande vittoria nel derby!",
    date: "28/12/2025",
    content: "La prima squadra conquista il derby cittadino con un netto 3-0. Doppietta di Ricci e gol di Lombardi",
    image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Torneo di Pasqua 2026",
    date: "20/12/2025",
    content: "Aperte le iscrizioni per il tradizionale Torneo Giovanile. Parteciperanno 24 squadre da tutta Italia",
    image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Nuovo campo sintetico inaugurato",
    date: "15/12/2025",
    content: "Taglio del nastro per l'impianto da 500.000€. Il presidente: 'Un sogno che si realizza'",
    image: "https://images.pexels.com/photos/159527/pexels-photo-159527.jpeg",
    featured: true,
  },
  {
    id: 4,
    title: "Convocazione in Nazionale Under 16",
    date: "10/12/2025",
    content: "Il nostro talento Matteo Giuliani chiamato dal CT per lo stage azzurro",
    image: "https://images.pexels.com/photos/126573/pexels-photo-126573.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Rinnovo partnership con sponsor principale",
    date: "05/12/2025",
    content: "Prosegue la collaborazione con TechSport Italia per altri 3 anni. Un grande riconoscimento per la nostra crescita",
    image: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg",
    featured: false,
  },
];

export const staff = [
  {
    id: 1,
    name: "Dott. Giovanni Marchetti",
    role: "Presidente",
    since: "2018",
  },
  {
    id: 2,
    name: "Franco Colombo",
    role: "Direttore Sportivo",
    since: "2015",
  },
  {
    id: 3,
    name: "Laura Benedetti",
    role: "Responsabile Settore Giovanile",
    since: "2019",
  },
  {
    id: 4,
    name: "Maria Fontana",
    role: "Segretaria",
    since: "2012",
  },
  {
    id: 5,
    name: "Dr. Riccardo Sforza",
    role: "Medico Sociale",
    since: "2020",
  },
];

export const contactInfo = {
  phone: "0123 456789",
  email: "info@asdpiemontecalcio.it",
  address: "Via Esempio 12, 10100 Torino (TO)",
  hours: {
    weekday: "Lun-Ven 15:00-19:00",
    saturday: "Sab 9:00-12:00",
    sunday: "Chiuso",
  },
  social: {
    facebook: "virtussporting",
    instagram: "@virtussporting",
    twitter: "@virtussc",
  },
};
