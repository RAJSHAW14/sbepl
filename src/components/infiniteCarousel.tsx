'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import * as React from 'react';

const items = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
    { id: 4, content: 'Slide 4' },
    { id: 5, content: 'Slide 5' },
    { id: 6, content: 'Slide 6' },
];

export function InfiniteCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
        const autoplayInterval = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [api]);

    return (
        <div>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full max-w-5xl"
                setApi={setApi}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {items.map((item, index) => (
                        <CarouselItem
                            key={item.id}
                            className="basis-1/2 pl-2 sm:basis-1/3 md:basis-2/5 md:pl-4 lg:basis-1/5"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent
                                        className={cn(
                                            'flex aspect-square items-center justify-center p-6',
                                            index === current
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-muted'
                                        )}
                                    >
                                        <span className="text-3xl font-semibold">
                                            {item.content}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-4 flex justify-center gap-2 space-y-4">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                </div>
            </Carousel>
        </div>
    );
}
