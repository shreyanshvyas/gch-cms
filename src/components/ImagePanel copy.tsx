// src/components/ImagePanel.tsx
import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function ImagePanel({ src, alt, priority }: ImagePanelProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 560px, 100vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
