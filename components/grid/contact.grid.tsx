import Card from "@/components/card.component";

export default function ContactGrid() {
  return (
    <Card className='flex flex-col gap-4 p-8 bg-[#007BFF] dark:bg-[#007BFF] text-white'>
      {/* Judul */}
      <h2 className='text-2xl font-semibold text-center'>Get in Touch</h2>

      {/* Isi */}
      <p className='text-sm leading-relaxed'>
        Ada pertanyaan atau butuh bantuan? Hubungi kami:
      </p>
      <ul className='text-sm list-none'>
        <li>
          Email:{" "}
          <a href='pryamm@gmail.com' className='underline'>
            pryamm@gmail.com
          </a>
        </li>
        <li>Telepon: +62 896-9901-1820</li>
        <li>Alamat: Citeureup, Cimahi</li>
      </ul>

      {/* Tagline */}
      <p className='text-center italic'>We’re Here to Help!</p>
    </Card>
  );
}
