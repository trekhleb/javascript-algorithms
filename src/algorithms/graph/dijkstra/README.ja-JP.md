# ダイクストラ法 (Dijkstra's Algorithm)

_他の言語で読む:_
[_English_](README.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_Українська_](README.uk-UA.md),
[_Español_](README.es-ES.md),
[_Français_](README.fr-FR.md),
[_Deutsch_](README.de-DE.md),
[_עברית_](README.he-IL.md)

ダイクストラ法は、グラフ内のノード間の最短経路を見つけるためのアルゴリズムです。
例えば道路網などを表すことができます。

このアルゴリズムにはいくつかのバリエーションがあります。
ダイクストラの元々の手法は、2つのノード間の最短経路を求めるものでしたが、
より一般的なバージョンでは、1つのノードを「始点（ソース）」として固定し、
その始点から他のすべてのノードまでの最短経路を求め、最短経路木（shortest-path tree）を生成します。

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

`a` から `b` への最短経路を見つけるダイクストラ法。
訪問していないノードの中で最も距離の短いノードを選び、
そのノードを経由して未訪問の隣接ノードへの距離を計算し、
もし短ければその距離を更新します。
すべての隣接ノードを処理したら、そのノードを訪問済み（赤色）としてマークします。

## ダイクストラ法の実用例

- GPS / ナビゲーションシステム
- 公共交通機関や航空路線の最適化
- インターネットルーティング（OSPF、IS-IS プロトコル）
- ネットワークトラフィックとレイテンシーの最適化
- ゲームにおける経路探索（マップ上の最短経路）
- 物流および配送ルートの最適化
- サプライチェーンや交通ネットワーク設計

## ダイクストラ法のステップごとの例

重み付きグラフがあり、各辺にはノード間の距離が設定されています。
たとえば、ノード `A` とノード `B` の距離が `7m` であるとします。

このアルゴリズムは、[優先度付きキュー](../../../data-structures/priority-queue/)を使用し、
常に始点から最も近い未訪問ノードを取り出します。

始点ノードは自分自身からの距離が `0m` なので、
最初にキューに入っているのはこのノードだけです。

他のノードは、グラフ探索中（隣接ノードを訪問する際）に後でキューに追加されます。

![Dijkstra step 1](./images/dijkstra-01.png)

キューから取り出したノードの各隣接ノードについて、始点からの距離を計算します。
たとえば、`A` から `B` までの距離は `0m + 7m = 7m` です。

初めて訪れる隣接ノードは、始点からの距離を優先度としてキューに追加されます。

ノード `B` は、後で探索するために最小優先度キューに追加されます。

![Dijkstra step 2](./images/dijkstra-02.png)

次に、ノード `A` のもう一つの隣接ノード `C` を訪問します。
始点 `A` から `C` までの距離は `0m + 9m = 9m` です。

ノード `C` も最小優先度キューに追加されます。

![Dijkstra step 3](./images/dijkstra-03.png)

同様に、ノード `F` の場合、始点 `A` からの距離は `0m + 14m = 14m` です。

ノード `F` も後で探索するためにキューに追加します。

![Dijkstra step 4](./images/dijkstra-04.png)

現在のノードのすべての隣接ノードを確認した後、
そのノードを `visited` セットに追加します。
このノードは今後再訪しません。

次に、始点から最も近いノードをキューから取り出し、
その隣接ノードを訪問します。

![Dijkstra step 5](./images/dijkstra-05.png)

訪問中のノード（この場合は `C`）がすでにキューに存在する場合、
それは別の経路（`A → C`）からすでに距離を計算したことを意味します。
もし今回の経路（`A → B → C`）を通る距離が短ければ更新し、
長ければそのままにします。

たとえば、`B` 経由で `C` に行くと (`A → B → C`)、距離は `7m + 10m = 17m` です。
これは既に記録されている距離 `9m` より長いので、更新しません。

![Dijkstra step 6](./images/dijkstra-06.png)

次に、`B` のもう一つの隣接ノード `D` を訪問します。
距離は `7m + 15m = 22m` です。
`D` はまだ訪問されておらず、キューにもないため、
距離 `22m` の優先度でキューに追加します。

![Dijkstra step 7](./images/dijkstra-07.png)

この時点で `B` のすべての隣接ノードを訪問したので、`B` を `visited` に追加します。
次に、始点に最も近いノードをキューから取り出します。

![Dijkstra step 8](./images/dijkstra-08.png)

ノード `C` の未訪問の隣接ノードを探索します。
経路 `A → C → F` を通る `F` までの距離は `9m + 2m = 11m` です。
これは以前の `A → F` の距離 `14m` より短いので、
`F` の距離を `11m` に更新し、キューの優先度を変更します。
これでより短い経路が見つかりました。

![Dijkstra step 9](./images/dijkstra-09.png)

`D` についても同様です。
経路 `A → C → D` は `A → B → D` より短いため、
距離を `22m` から `20m` に更新します。

![Dijkstra step 10](./images/dijkstra-10.png)

`C` のすべての隣接ノードを訪問したので、`C` を `visited` に追加し、
次に最も近いノード `F` をキューから取り出します。

![Dijkstra step 11](./images/dijkstra-11.png)

`E` への距離を `11m + 9m = 20m` として記録します。

![Dijkstra step 12](./images/dijkstra-12.png)

`F` を `visited` に追加し、次に最も近い `D` を取り出します。

![Dijkstra step 13](./images/dijkstra-13.png)

`D` 経由で `E` に行く距離は `20m + 6m = 26m` です。
これはすでに `F` 経由の距離 `20m` より長いため、無視します。

![Dijkstra step 14](./images/dijkstra-14.png)

ノード `D` が訪問されました。

![Dijkstra step 15](./images/dijkstra-15.png)

ノード `E` も訪問されました。
グラフ探索が完了しました。

![Dijkstra step 16](./images/dijkstra-16.png)

これで、始点ノード `A` から各ノードへの最短距離がわかりました。

実際には、距離計算の際に各ノードの `previousVertices`（直前のノード）も記録し、
最短経路の正確な経路を再構築できるようにします。

例えば、`A` から `E` への最短経路は `A → C → F → E` です。

## 実装例

- [dijkstra.js](./dijkstra.js)

## 参考文献

- [ウィキペディア](https://ja.wikipedia.org/wiki/ダイクストラ法)
- [YouTube - Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube - Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
