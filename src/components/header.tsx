import { paths } from '@/path';
import Link from 'next/link';

interface NavigationItem {
    label: string;
}

const navigationItems: NavigationItem[] = [
    { label: 'HOME' },
    { label: 'ABOUT' },
    { label: 'EQUIPMENTS' },
    { label: 'PARTS' },
    { label: 'RENTALS' },
    { label: 'REBUILD CENTER' },
    { label: 'BLOG' },
    { label: 'SERVICE' },
    { label: 'CAREER' },
    { label: 'CONTACT US' },
];

const Header = () => {
    return (
        <nav className="flex w-full max-w-7xl items-center justify-center border-b border-transparent px-2.5 py-4 shadow-lg">
            <span>Logo</span>
            <ul className="mx-4 flex max-w-4xl flex-1 items-center justify-center gap-3">
                {navigationItems.map((item, index) => (
                    <Link
                        href={paths[item.label] || '/'}
                        className="text-sm font-semibold"
                        key={index}
                    >
                        {item.label}
                    </Link>
                ))}
            </ul>
            <span>
                <div className="text-xs font-light">Call Toll Free</div>
                <div>1800 3099 1055</div>
            </span>
        </nav>
    );
};
export { Header };
