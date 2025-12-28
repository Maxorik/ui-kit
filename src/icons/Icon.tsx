import { icons } from './icons'

type IconName = keyof typeof icons;

type IconProps = {
    path: IconName | string;
    className?: string;
};

export const Icon = ({ path, className }: IconProps) => {
    const isNonLibrarySvg: boolean = path?.match('/') !== null;

    if (path in icons) {
        const Svg = icons[path];
        return Svg ? <Svg className={className}/> : null;
    }

    if (isNonLibrarySvg) {
        return <img src={path} className={className} alt="" />;
    }

    return null;
};