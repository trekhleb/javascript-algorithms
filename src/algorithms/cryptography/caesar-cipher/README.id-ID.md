# Algoritma Caesar Cipher

_Baca ini dalam bahasa lain:_
[_Русский_](README.ru-RU.md)
[_English_](README.md)

Dalam kriptografi, **Sandi Caesar**, juga dikenal sebagai **Sandi Caesar**, **Sandi Geser**, **Kode Caesar**  atau **Pergeseran Caesar**, adalah salah satu teknik enkripsi yang paling sederhana dan paling dikenal. Ini adalah jenis cipher substitusi di mana setiap huruf dalam plaintext diganti dengan huruf beberapa posisi tetap di bawah alfabet. Sebagai contoh, dengan pergeseran kiri `3`, `D` akan digantikan oleh `A`, `E` akan menjadi `B`, dan seterusnya. Metode ini dinamai Julius Caesar, yang menggunakannya dalam korespondensi pribadinya.

![Algoritma Caesar Cipher](https://upload.wikimedia.org/wikipedia/commons/4/4a/Caesar_cipher_left_shift_of_3.svg)

## Contoh

Transformasi dapat diwakili dengan menyelaraskan dua huruf; alfabet "chiper" adalah alfabet "plain" yang diputar ke kiri atau kanan oleh sejumlah posisi. Misalnya, berikut adalah sandi Caesar menggunakan rotasi kiri tiga tempat, setara dengan pergeseran kanan 23 (parameter pergeseran digunakan sebagai kunci):

```teks
Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Chiper:   XYZABCDEFGHIJKLMNOPQRSTUVW
```

Saat mengenkripsi, seseorang mencari setiap huruf pesan di baris "plain" dan menuliskan huruf yang sesuai di baris "chiper".

```teks
Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD
```

## Kompleksitas

- Waktu: `O(|n|)`
- Ruang: `O(|n|)`

## Referensi

- [Caesar cipher di Wikipedia](https://id.wikipedia.org/wiki/Sandi_Caesar)
