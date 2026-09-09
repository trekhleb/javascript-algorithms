# Hilal Şifresi

Hill Şifresi bir poligrafik yer değiştirme işlemidir şifre temelli Lineer cebir üzerine kuruludur.

Her harf, modülo değeri olan bir sayı ile temsil edilir `26`.Bu, şifreleme yönteminin temel bir özelliği olmasa da, söz konusu basit yöntem sıklıkla kullanılır.

|**Mektup**|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|**Sayı**|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|



# Şifreleme

Bir mesajı şifrelemek için, (`n` bileşenli bir vektör olarak ele alınan) her bir `n` harflik blok, modül `26`'ya göre tersi alınabilir bir `n × n` matrisle çarpılır.

Şifreleme için kullanılan matris şifreleme anahtarıdır ve tersi alınabilen `n × n` matrisler kümesinden (modulo `26`) rastgele seçilmelidir. Elbette bu şifreleme yöntemi, istenilen sayıda harf içeren bir alfabeye uyarlanabilir; tek yapılması gereken, tüm aritmetik işlemleri modulo `26` yerine harf sayısı üzerinden (modulo harf sayısı) gerçekleştirmektir.

`ACT` mesajını ve aşağıdaki anahtarı (veya harf karşılıklarıyla `GYB/NQK/URP`) ele alalım:

```
| 6   24   1  |
| 13  16   10 |
| 20  17   15 |
```

`A` değeri `0`, `C` değeri `2` ve `T` değeri `19` olduğundan, mesaj şu vektördür:

```
|  0  |
|  2  |
|  19 |
```

Böylece, şifrelenmiş vektör şu şekilde elde edilir:

```

| 6   24   1  |  |  0  |   |  67  |   |  15 |

| 13  16   10 |  |  2  | = |  222 | ≡ |  14 | (mod 26)

| 20  17   15 |  |  19 |   |  319 |   |  7  |

```

Bu da `POH` şifreli metnine karşılık gelir.

Şimdi, mesajımızın `CAT` olduğunu varsayalım (burada `ACT` ile aynı harfleri kullandığımıza dikkat edin); yani:

```

|  2  |

|  0  |

|  19 |

```

Bu kez, şifrelenmiş vektör şu şekilde elde edilir:

```

| 6   24   1  |  |  2  |   |  31  |   |  5  |

| 13  16   10 |  |  0  | = |  216 | ≡ |  8  | (mod 26)

| 20  17   15 |  |  19 |   |  325 |   |  13 |

```

Bu da `FIN` şifreli metnine karşılık gelir. Her harf değişmiştir.

# Şifre Çözme

Mesajın şifresini çözmek için, her blok şifrelemede kullanılan matrisin tersiyle çarpılır. Şifreli metni tekrar bir vektöre dönüştürürüz ve ardından anahtar matrisin (harf karşılığı `IFK/VIV/VMI` olan) ters matrisiyle çarparız. (Ters matrisi hesaplama yöntemleri için matris tersi alma konusuna bakınız.) Önceki örnekte kullanılan matrisin tersinin, mod 26'da şu şekilde olduğunu buluruz:

```

&#x20;               -1

| 6   24   1  |                | 8   5    10 |

| 13  16   10 |    (mod 26) ≡  | 21  8    21 |

| 20  17   15 |                | 21  12   8  |

```

Önceki örnekteki `POH` şifreli metnini ele alırsak şunları elde ederiz:

```

| 8   5    10 |  |  15 |   |  260 |   |  0  |

| 21  8    21 |  |  14 | = |  574 | ≡ |  2  | (mod 26)

| 21  12   8  |  |  7  |   |  539 |   |  19 |

```

Bu da bizi beklendiği gibi tekrar `ACT` ifadesine ulaştırır.

# Şifreleme Matrisini Belirleme

Şifreleme matrisini seçerken iki zorlukla karşılaşılır:

Her matrisin tersi yoktur. Bir matrisin tersinin olabilmesi için, o matrisin determinantının sıfırdan farklı olması gerekir. Şifreleme matrisinin determinantı, modüler taban ile ortak bir çarpana sahip olmamalıdır.

Dolayısıyla, yukarıdaki örnekte olduğu gibi mod `26` üzerinde çalışılıyorsa, determinant sıfırdan farklı olmalı ve `2` ya da `13` sayılarına tam bölünmemelidir. Eğer determinant `0` ise veya modüler taban ile ortak çarpanlar içeriyorsa, bu matris Hill şifrelemesinde kullanılamaz; bu durumda başka bir matris seçilmesi gerekir (aksi takdirde şifre çözme işlemi gerçekleştirilemez). Neyse ki, Hill şifrelemesinde kullanılmak üzere gerekli koşulları sağlayan matrislere oldukça sık rastlanır.



