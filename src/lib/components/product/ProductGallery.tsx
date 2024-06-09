
'use client';

import Image from "next/image";

export default function ProductGallery({ images }: {
    images: string[] | undefined
}) {
    return (
        <div className="flex flex-row">
            {
                images?.map(image =>
                    <div key={image}>
                        <Image
                            src={image}
                            width={250} height={250}
                            alt={image}
                        />
                    </div>)
            }
        </div>
    );
} 