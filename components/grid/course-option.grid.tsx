import Card from "@/components/card.component";

interface CourseOptionGridProps {
  title: string;
  tagline: string;
  audience: string;
  materials: string[];
}

export default function CourseOptionGrid({
  title,
  tagline,
  audience,
  materials,
}: CourseOptionGridProps) {
  return (
    <Card className='flex flex-col justify-between gap-4 p-6 bg-[#0A66C2] dark:bg-[#0A66C2]'>
      <h3 className='text-xl font-semibold text-white'>{title}</h3>
      <p className='text-sm text-gray-200'>{tagline}</p>
      <p className='text-xs text-gray-300'>
        <span className='font-semibold'>Target Audience:</span> {audience}
      </p>
      <ul className='text-xs text-gray-300 list-disc list-inside'>
        {materials.map((material, i) => (
          <li key={i}>{material}</li>
        ))}
      </ul>
    </Card>
  );
}
