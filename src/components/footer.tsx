import { CircleFadingPlus, Mail, MapPin, Phone } from 'lucide-react';
import { ReactElement } from 'react';

interface FooterLink {
    name: string;
}

const siteMapLinks: FooterLink[] = [
    { name: 'Home.org' },
    { name: 'Rentals' },
    { name: 'Parts' },
    { name: 'Blog' },
    { name: 'Godrej 2.5 Ton Hand Pallet Truck' },
    { name: 'Home' },
];

const aboutLinks: FooterLink[] = [
    { name: 'About Us' },
    { name: 'Service Support' },
    { name: 'Contact Us' },
    { name: 'Privacy Policy' },
    { name: 'Hectronic' },
    { name: 'Hectronic' },
];
interface IconItem {
    name: string;
    icon: ReactElement;
}
const Icon: IconItem[] = [
    { name: 'facebook', icon: <CircleFadingPlus /> },
    { name: 'twitter', icon: <CircleFadingPlus /> },
    { name: 'google', icon: <CircleFadingPlus /> },
    { name: 'instagram', icon: <CircleFadingPlus /> },
];

const Footer = () => {
    return (
        <footer className="relative bg-[#3E75CF] text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="mb-6 text-xl font-bold text-white">
                            ABOUT US
                        </h3>
                        <div className="text-sm leading-relaxed text-white/90">
                            <p className="mb-4">
                                Shree Balaji Equipments Pvt. Ltd. (SBEPL) is an
                                AMC Group Company. Ashok Marketing Company (AMC)
                                was founded by Mr. R.P. Botha in 1980 as an
                                Independent Genuine Spare Parts Trader &
                                Importer for globally reputed Mobile Crane
                                manufacturers [...]
                            </p>
                            <div className="mt-6">
                                <p className="font-semibold">
                                    Toll Free Number:{' '}
                                    <span className="font-normal">
                                        1800 3099 555
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="mb-6 text-xl font-bold text-white">
                            SITE MAP
                        </h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                {siteMapLinks.map((links, index) => (
                                    <div key={index}>{links.name}</div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {aboutLinks.map((links, index) => (
                                    <div key={index}>{links.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="mb-6 text-xl font-bold text-white">
                            CONTACT INFORMATION
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="mb-2 font-semibold text-white">
                                    Corporate Office:
                                </p>
                                <div className="flex items-start space-x-2 text-white/90">
                                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                                    <div>
                                        <p>
                                            P5 Aviator, Biswa Bangla Sarani, New
                                            Town, Chinar Park,
                                        </p>
                                        <p>
                                            P.O. Kolkata-700 136, West Bengal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2 font-semibold text-white">
                                    Registered Sales, Service & Correspondence
                                    Office:
                                </p>
                                <div className="flex items-start space-x-2 text-white/90">
                                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                                    <div>
                                        <p>
                                            134/4, Mahatma Gandhi Road, 3rd
                                            Floor,
                                        </p>
                                        <p>
                                            Room No. 313, Kolkata – 700007, West
                                            Bengal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 text-white/90">
                                <Phone className="h-4 w-4" />
                                <span>033-40715555/56</span>
                            </div>

                            <div className="flex items-center space-x-2 text-white/90">
                                <Mail className="h-4 w-4" />
                                <span>sales@sbepl.in</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="20 mt-8 pt-6 text-center">
                    <div className="flex justify-center space-x-4">
                        {Icon.map((item, index) => (
                            <span
                                key={index}
                                className="text-white hover:text-white/70"
                            >
                                {item.icon}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-4 border-white/20 pt-3 text-center">
                    <p className="text-sm text-white/80">
                        © 2025 Shree Balaji Equipments Pvt Ltd. All Rights
                        Reserved. New site 2020
                    </p>
                </div>
            </div>
        </footer>
    );
};
export { Footer };
