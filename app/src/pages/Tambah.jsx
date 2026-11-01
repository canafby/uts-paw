import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Komputer', kodeAlat: '', jumlah: 0, kondisi: 'Baik' }

export default function Tambah() {
    const navigate = useNavigate()
    const { tambah } = useKoleksi()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    
    const simpan = (e) => {
    e.preventDefault()
   if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    setGalat('')
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
}

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Barang</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}
      <label htmlFor="kodeAlat">Kode Barang</label>
      <input id="kodeAlat" name="kodeAlat" value={form.kodeAlat} onChange={ubah} />
      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Komputer</option>
        <option>Perangkat Output</option>
        <option>Perangkat Input</option>
        <option>Jaringan</option>
        <option>Kelistrikan</option>
      </select>
      <label htmlFor="jumlah">Jumlah Barang</label>
      <input id="jumlah" name="jumlah" type="number" value={form.jumlah} onChange={ubah} />
      <label htmlFor="kondisi">Kondisi Barang</label>
      <select id="kondisi" name="kondisi" value={form.kondisi} onChange={ubah}>
        <option>Baik</option>
        <option>Rusak Ringan</option>
        <option>Rusak Berat</option>
        <option>Perawatan</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}