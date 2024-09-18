
type Props = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function Feature({ icon, title, description }: Props ) {
    return (
    <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-secondary">{description}</p>
    </div>
    )
};
