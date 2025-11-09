# Dijkstra 演算法

_以其他語言閱讀：_
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

Dijkstra 演算法是一種用於在圖中尋找節點之間最短路徑的演算法，例如，它可用於表示道路網絡。

該演算法有許多變體；Dijkstra 的原始版本用於尋找兩個節點之間的最短路徑，但更常見的變體是將一個節點固定為「起點（source）」節點，並從該節點計算到圖中所有其他節點的最短路徑，從而生成最短路徑樹（shortest-path tree）。

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

Dijkstra 演算法用於尋找從 `a` 到 `b` 的最短路徑。
它會選擇距離最短且尚未訪問的節點，計算經由該節點到各個未訪問鄰居的距離，
若該距離更短，則更新鄰居的距離。
當所有鄰居處理完畢後，將該節點標記為已訪問（紅色）。

## Dijkstra 演算法的實際應用

- GPS / 導航系統
- 公共交通與航空路線最佳化
- 網際網路路由（OSPF、IS-IS 協定）
- 網路流量與延遲最佳化
- 電玩遊戲中的路徑尋找（地圖上的最短路徑）
- 物流與配送路線最佳化
- 供應鏈與交通網路設計

## Dijkstra 演算法逐步範例

假設我們有一個帶權重的圖，每條邊都代表節點之間的距離。
例如，節點 `A` 與節點 `B` 之間的距離為 `7 公尺`（簡稱 `7m`）。

演算法使用 [優先佇列（Priority Queue）](../../../data-structures/priority-queue/)
來不斷取出距離起點最近的未訪問節點。

起始節點與自身的距離定義為 `0m`，因此我們從它開始，
此時它是優先佇列中唯一的節點。

其餘節點會在圖遍歷過程中（訪問鄰居時）逐漸加入佇列。

![Dijkstra step 1](./images/dijkstra-01.png)

從佇列中取出的節點，其每個鄰居都會被檢查，以計算從起點到該鄰居的距離。
例如，從 `A` 到 `B` 的距離為 `0m + 7m = 7m`。

每當訪問尚未看過的鄰居時，就將其加入優先佇列，
其優先權為從起點到該鄰居的距離。

節點 `B` 被加入最小優先佇列，以便稍後處理。

![Dijkstra step 2](./images/dijkstra-02.png)

接著訪問節點 `A` 的另一個鄰居 `C`。
從起點 `A` 到 `C` 的距離為 `0m + 9m = 9m`。

節點 `C` 被加入最小優先佇列，等待後續遍歷。

![Dijkstra step 3](./images/dijkstra-03.png)

同樣地，對於節點 `F`，
從起點 `A` 到 `F` 的距離為 `0m + 14m = 14m`。

節點 `F` 被加入最小優先佇列，以便稍後處理。

![Dijkstra step 4](./images/dijkstra-04.png)

當目前節點的所有鄰居都被檢查完後，
將該節點加入 `visited` 集合中。
之後將不再重新訪問該節點。

接著從佇列中取出距離起點最近的節點，開始訪問它的鄰居。

![Dijkstra step 5](./images/dijkstra-05.png)

若正在訪問的節點（例如 `C`）已存在於佇列中，
代表先前已經透過另一條路徑（`A → C`）計算過其距離。
若目前路徑（`A → B → C`）的距離更短，則更新距離；
若更長，則保持不變。

例如，透過 `B` 訪問 `C`（路徑 `A → B → C`）的距離為 `7m + 10m = 17m`，
比原先記錄的 `9m` 更長，因此不需更新。

![Dijkstra step 6](./images/dijkstra-06.png)

接著訪問 `B` 的另一個鄰居 `D`。
到 `D` 的距離為 `7m + 15m = 22m`。
由於 `D` 尚未訪問，也不在佇列中，因此將其以優先權（距離）`22m` 加入佇列。

![Dijkstra step 7](./images/dijkstra-07.png)

此時 `B` 的所有鄰居都已遍歷完，
因此將 `B` 加入 `visited` 集合中。
接著從佇列中取出距離起點最近的節點。

![Dijkstra step 8](./images/dijkstra-08.png)

訪問節點 `C` 的未訪問鄰居。
經由 `C` 到 `F`（路徑 `A → C → F`）的距離為 `9m + 2m = 11m`。
這比原本的路徑 `A → F`（`14m`）更短。
因此，將 `F` 的距離更新為 `11m`，並調整其在佇列中的優先權。
我們找到了更短的路徑。

![Dijkstra step 9](./images/dijkstra-09.png)

對於 `D` 也是如此。
經由 `C` 的路徑 `A → C → D` 比 `A → B → D` 更短，
因此將距離從 `22m` 更新為 `20m`。

![Dijkstra step 10](./images/dijkstra-10.png)

`C` 的所有鄰居已被訪問，因此將 `C` 加入 `visited` 集合。
接著從佇列中取出下一個最近的節點 `F`。

![Dijkstra step 11](./images/dijkstra-11.png)

記錄到 `E` 的距離為 `11m + 9m = 20m`。

![Dijkstra step 12](./images/dijkstra-12.png)

將節點 `F` 加入 `visited`，接著取出下一個最近的節點 `D`。

![Dijkstra step 13](./images/dijkstra-13.png)

經由 `D` 到 `E` 的距離為 `20m + 6m = 26m`，
比透過 `F` 的 `20m` 更長，因此忽略。

![Dijkstra step 14](./images/dijkstra-14.png)

節點 `D` 已訪問。

![Dijkstra step 15](./images/dijkstra-15.png)

節點 `E` 也已訪問。
圖的遍歷完成。

![Dijkstra step 16](./images/dijkstra-16.png)

現在我們已經知道從起始節點 `A` 到各個節點的最短距離。

在實際應用中，計算距離的同時也會記錄每個節點的 `previousVertices`（前一節點），
以便重建出最短路徑的完整節點序列。

例如，從 `A` 到 `E` 的最短路徑為：`A → C → F → E`。

## 實作範例

- [dijkstra.js](./dijkstra.js)

## 參考資料

- [維基百科](https://zh.wikipedia.org/wiki/Dijkstra算法)
- [YouTube - Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube - Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
