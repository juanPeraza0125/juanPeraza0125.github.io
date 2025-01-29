export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Blog Grupo C',
    subtitle: 'Historia de la Ingenieria de Software | Jala University',
    description: 'Blog - trabajo colaborativo para Historia de la Ingenieria de Software | Jala University',
    image: {
        src: '/dante-preview.jpg',
        alt: 'none'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },

    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Tema principal aqui',
        text: "Hola equipo, soy **Juan**, esta es una plantilla para la realizacion del blog, me gustaria que estudiaran el entorno que se utiliza tanto en el desarrollo como en el despliegue a traves de GitHub pages, se familiciarian con lo que es el front-end con Astro para los que tienen nulo conocimiento. De igual dejo el siguiente <a href='https://www.youtube.com/watch?v=v7HyyOnixJ8'>Link</a> para que vean como se puede editar en este proyecto. De igual manera en el README del repositorio estare dejando instrucciones basicas, cualquier pregunta en el grupo de trabajo.",
        image: {
            src: '/grupoc.png',
            alt: 'Grupito c <3'
        },
        actions: [
            {
                text: 'Contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    //projectsPerPage: 8
};

export default siteConfig;
