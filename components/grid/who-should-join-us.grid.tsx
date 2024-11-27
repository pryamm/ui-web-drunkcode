import Card from "@/components/card.component";

export default function WhoShouldJoinUsGrid() {
  return (
    <Card className='flex flex-col gap-4 p-8 bg-[#FF5733] dark:bg-[#FF5733] text-white'>
      {/* Judul */}
      <h2 className='text-2xl font-semibold text-center'>
        Who Should Join Us?
      </h2>

      {/* Isi */}
      <ul className='text-sm list-disc list-inside leading-relaxed'>
        <li>Mahasiswa dan fresh graduate yang ingin berkarir di IT.</li>
        <li>Profesional yang ingin upskill ke teknologi terbaru.</li>
        <li>Pemula tanpa pengalaman coding.</li>
        <li>Perusahaan yang ingin meningkatkan kemampuan tim teknisnya.</li>
      </ul>
    </Card>
  );
}
