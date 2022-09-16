export interface LinkInterface {
    name: string;
    href: string;
}

export const createLink = (name: string, href: string): LinkInterface => {
    return { name, href };
}

export interface PowerInterface {
    name: string;
    description: string;
}