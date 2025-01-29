export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Image2 = {
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
    image2?: Image2;
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
    subtitle: 'Historia de la Ingenieria de Software | Jala University, 2025',
    description: 'Blog - trabajo colaborativo para Historia de la Ingenieria de Software | Jala University',
        image2: {
            src: '/jala-u.png',  // Aquí está tu nueva imagen
            alt: 'Imagen extra de Jala'
        },

    
 
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        /*
        {
            text: 'Projects',
            href: '/projects'
        },
        */
        
        {
            text: 'Blogs',
            href: '/blog'
        },
        /*
        {
            text: 'Tags',
            href: '/tags'
        },
        */
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
        title: '📈 Trends in Platform Engineering',
        text: "La ingeniería de plataformas está transformando el desarrollo de software al optimizar la interacción entre desarrolladores y sistemas complejos. Este blog colaborativo analiza las tendencias emergentes en la ingeniería de plataformas, su impacto en la eficiencia de los equipos y las innovaciones tecnológicas que están remodelando la industria. Exploraremos conceptos clave como plataformas internas, automatización, DevOps y más, proporcionando una visión general del panorama actual y futuro.",
        image: {
            src: '/ilustracionHome.png',
            alt: 'Platform ING'
        },
        actions: [
            {
                text: 'Leer más',
                href: '/blog'
            }
        ]
    },
    subscribe: {
        title: 'Subscribete para más contenido',
        text: 'Notificación via e-mail cada semana',
        formUrl: 'juanesmako3707@gmail.com'
    },
    postsPerPage: 8,
    //projectsPerPage: 8
};

export default siteConfig;
