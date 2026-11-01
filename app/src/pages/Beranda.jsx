import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Daftar Inventaris Laboratorium Komputer
      </h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat Halaman...</p>
      ) : (
        <p>
          Ada {items.length} Alat dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat semua Alat</Link>
    </section>
  )
}