export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    terms?: boolean;
}


export type IconInfo = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // The type for a React component that renders an SVG icon
    name: string;
};

