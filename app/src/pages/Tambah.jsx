export default function Tambah() {
  return (
    <form>
      <h1>Tambah Barang</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" />
      <label htmlFor="kodeAlat">Kode Barang</label>
      <input id="kodeAlat" name="kodeAlat" />
      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori">
        <option>Komputer</option>
        <option>Perangkat Output</option>
        <option>Perangkat Input</option>
        <option>Jaringan</option>
        <option>Kelistrikan</option>
      </select>
      <label htmlFor="jumlah">Jumlah Barang</label>
      <input id="jumlah" name="jumlah" type="number" />
      <label htmlFor="kondisi">Kondisi Barang</label>
      <select id="kondisi" name="kondisi">
        <option>Baik</option>
        <option>Rusak Ringan</option>
        <option>Rusak Berat</option>
        <option>Perawatan</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}