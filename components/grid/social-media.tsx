import Card from "@/components/card.component";
import * as Icons from "react-icons/fa";
import { cn } from "@/libs/utils";

interface SocialMediaProps {
  href: string;
  icon: string;
  backgroundColor: string;
}

export default function SocialMediaGrid({
  href,
  icon,
  backgroundColor,
}: SocialMediaProps) {
  const IconComponent = Icons[icon as keyof typeof Icons];
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col items-center justify-center bg-black",
        backgroundColor
      )}
    >
      <a href={href} target='_blank' rel='noopener noreferrer' className='z-50'>
        {IconComponent ? (
          <IconComponent size='4rem' color='white' /> // Render the dynamic icon
        ) : (
          <div className='text-white text-lg'>Icon not found</div> // Fallback if icon doesn't exist
        )}
      </a>
    </Card>
  );
}
