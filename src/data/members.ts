
export interface Member {
    id: string;
    image: string;
    title: string;
    subtitle: string;
    handle: string;
    location: string;
    borderColor: string;
    gradient: string;
    bio?: string; // Optional bio for the profile page
}

export const members: Member[] = [
    {
        id: 'carlos-espinosa',
        image: import.meta.env.BASE_URL + 'images/Carlos.jpg',
        title: 'Carlos Espinosa',
        subtitle: 'Vocalista Principal',
        handle: '',
        location: 'Utrera, 1974',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(145deg, #FF6200, #000000)',
        bio: 'La voz de la orquesta y el culpable de que te vayas ronco a casa. Lleva más de 20 años encima de un escenario y todavía no ha encontrao una canción que no se sepa.'
    },
    {
        id: 'antonio-mofly',
        image: import.meta.env.BASE_URL + 'images/Antonio.jpg',
        title: 'Antonio Mofly',
        subtitle: 'Batería',
        handle: '',
        location: 'Utrera, 1972',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(165deg, #823F00, #000000)',
        bio: 'El corazón que le late a la orquesta. Con él detrás de la batería la fiesta no para ni cuando le piden que pare. Jazz, flamenco, rock... lo que haga falta, ahí está él.'
    },
    {
        id: 'jesuli-gonzalez',
        image: import.meta.env.BASE_URL + 'images/Jesuli.png',
        title: 'Jesuli González',
        subtitle: 'Guitarra Eléctrica',
        handle: '',
        location: 'Utrera',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(195deg, #FF6200, #000000)',
        bio: 'Le dices qué canción quieres y él ya la está tocando. Lo mismo te mete un solo de rock que te saca una bulería, y sin despeinarse. Maestro de las seis cuerdas y de quedarse tan ancho.'
    },
    {
        id: 'kiko',
        image: import.meta.env.BASE_URL + 'images/Kiko.png',
        title: 'Kiko',
        subtitle: 'Teclados',
        handle: 'Cádiz',
        location: 'Cádiz',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(210deg, #823F00, #000000)',
        bio: 'Viene de Cádiz, que ya lo explica to. Con los teclados hace lo que le sale de dentro, y lo que le sale de dentro es de lo mejorcito que hemos escuchao en mucho tiempo.'
    },
    {
        id: 'miguel-navas',
        image: import.meta.env.BASE_URL + 'images/Navas.jpg',
        title: 'Miguel Navas',
        subtitle: 'Vocalista',
        handle: '',
        location: 'El Rubio de Utrera, 1975',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(225deg, #FF6200, #000000)',
        bio: 'El rubio de la orquesta y el que tiene a la gente cantando desde el primer tema. Lo mismo te canta a Bisbal que te mete reggaeton como si hubiera nacío en San Juan. Energía contagiosa, eso no le falta.'
    },
    {
        id: 'sergio-take',
        image: import.meta.env.BASE_URL + 'images/Take.jpg',
        title: 'Sergio "Take"',
        subtitle: 'Bajo Eléctrico',
        handle: '',
        location: 'Utrera',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(135deg, #823F00, #000000)',
        bio: 'El bajo que no ves pero que te mueve las entrañas. Sin Take, la orquesta sonaría como cuando le falta sal a la comida: que algo falla, aunque no sepas exactamente qué.'
    }
];
