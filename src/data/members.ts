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
        image: '/images/Carlos.jpg',
        title: 'Carlos Espinosa',
        subtitle: 'Vocalista Principal',
        handle: 'Utrera, 1974',
        location: 'Coro Amistad de Utrera',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(145deg, #FF6200, #000000)',
        bio: 'La voz que lidera nuestra orquesta con pasión y experiencia. Carlos lleva la música en la sangre y conecta con el público en cada nota.'
    },
    {
        id: 'antonio-mofly',
        image: '/images/Antonio.jpg',
        title: 'Antonio Mofly',
        subtitle: 'Batería',
        handle: 'Utrera, 1972',
        location: 'Jazz & Flamenco',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(165deg, #823F00, #000000)',
        bio: 'El corazón rítmico de Elegidos. Con una trayectoria impresionante en Jazz y Flamenco, Antonio aporta una base sólida y dinámica a nuestro sonido.'
    },
    {
        id: 'jesuli-gonzalez',
        image: '/images/Jesuli.png',
        title: 'Jesuli González',
        subtitle: 'Guitarrista',
        handle: 'Utrera',
        location: 'Gran suli',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(195deg, #FF6200, #000000)',
        bio: 'Maestro de las seis cuerdas. Jesuli domina desde los riffs más rockeros hasta las melodías más sutiles, dando color a cada canción.'
    },
    {
        id: 'kiko',
        image: '/images/Kiko.png',
        title: 'Kiko',
        subtitle: 'Teclista',
        handle: 'Utrera',
        location: 'Tecladista Principal',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(210deg, #823F00, #000000)',
        bio: 'El arquitecto de nuestros arreglos. Kiko crea atmósferas únicas y sonidos modernos que definen el estilo de Orquesta Elegidos.'
    },
    {
        id: 'miguel-navas',
        image: '/images/Navas.jpg',
        title: 'Miguel Navas',
        subtitle: 'Vocalista',
        handle: 'El Rubio de Utrera, 1975',
        location: 'Pop & Flamenco',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(225deg, #FF6200, #000000)',
        bio: 'Versatilidad y carisma en el escenario. Miguel es capaz de interpretar cualquier género con una energía contagiosa.'
    },
    {
        id: 'sergio-take',
        image: '/images/Take.jpg',
        title: 'Sergio "Take"',
        subtitle: 'Bajista',
        handle: 'Utrera',
        location: 'Base Rítmica',
        borderColor: '#FFDABA',
        gradient: 'linear-gradient(135deg, #823F00, #000000)',
        bio: 'El groove de la banda. Sergio mantiene el pulso firme y aporta profundidad a nuestra música con su bajo.'
    }
];
