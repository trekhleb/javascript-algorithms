# Hash Table

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Français_](README.fr-FR.md),
[_Português_](README.pt-BR.md)

컴퓨팅에서, **해시 테이블**(해시 맵)은 키를 값에 매핑할 수 있는 구조인 *연관 배열*을 구현하는 자료 구조입니다. 해시 테이블은 *해시 함수*를 사용해 원하는 값을 담을 수 있는 버킷 또는 슬롯 배열의 인덱스를 계산합니다.

이상적으로, 해시 함수는 각 키들을 고유 버킷에 할당하지만 대부분의 해시 테이블은 불완전한 해시 함수를 사용하기 때문에 해시 함수를 통해 두 개 이상의 키에 대해 동일한 인덱스를 생성하는 해시 충돌이 발생할 수 있습니다. 이러한 해시 충돌은 어떠한 방법으로든 해결되어야 합니다.

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

다음은 분리 연결법을 통해 해시 충돌을 해결한 예시입니다.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## 참고

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)