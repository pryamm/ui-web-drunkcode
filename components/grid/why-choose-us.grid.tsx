import Card from "@/components/card.component";

export default function WhyChooseUsGrid() {
  return (
    <Card className='flex flex-col gap-4 p-8 bg-[#28A745] dark:bg-[#28A745] text-white'>
      {/* Judul */}
      <h2 className='text-2xl font-semibold text-center'>Why Trust Us?</h2>

      {/* Isi */}
      <ul className='text-sm list-disc list-inside leading-relaxed'>
        <li>
          Practical Curriculum: Fokus pada keterampilan yang benar-benar
          digunakan di dunia kerja.
        </li>
        <li>
          Experienced Mentors: Belajar dari profesional yang sudah berpengalaman
          di industri.
        </li>
        <li>Career Support: Akses ke jaringan rekrutmen dan panduan karir.</li>
        <li>
          Flexible Learning: Kelas online atau hybrid sesuai kebutuhan Anda.
        </li>
      </ul>

      {/* Tagline */}
      <p className='text-center italic'>Your Success, Our Priority</p>
    </Card>
  );
}
