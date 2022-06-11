# জাভাস্ক্রিপ্ট অ্যালগরিদম এবং ডেটা স্ট্রাকচার

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

এই রিপোজিটরিতে জাভাস্ক্রিপ্ট ভিত্তিক অনেক জনপ্রিয় অ্যালগরিদম এবং ডেটা স্ট্রাকচার এর উদাহরণ আছে।

প্রতিটি অ্যালগরিদম এবং ডেটা স্ট্রাকচারের আলাদা আলাদা ব্যাখ্যাসহ এবং লিংক সহ README আছে। (YouTube ভিডিও এর লিংক অন্তর্ভুক্ত আছে)


_অন্যান্য ভাষায় অনুবাদ পড়ুন:_
[_English_](README.md),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md),
[_Русский_](README.ru-RU.md),
[_Türk_](README.tr-TR.md),
[_Italiana_](README.it-IT.md),
[_Bahasa Indonesia_](README.id-ID.md),
[_Українська_](README.uk-UA.md),
[_Arabic_](README.ar-AR.md),
[_Tiếng Việt_](README.vi-VN.md),
[_Deutsch_](README.de-DE.md),
[_বাংলা_](README.bn-BD.md)

*☝ মনে রাখবেন যে, এই প্রকল্পটি শুধুমাত্র শেখার এবং গবেষণার উদ্দেশ্যে ব্যবহার করার জন্য।*

## ডেটা স্ট্রাকচারসমূহ

একটি ডেটা স্ট্রাকচার হল একটি কম্পিউটারে ডেটা সংগঠিত এবং সংরক্ষণ করার একটি বিশেষ উপায় যাতে এটি খুব সহজে
খুজে পাওয়া এবং সংশোধন করা যায়। আরও স্পষ্টভাবে, একটি ডেটা স্ট্রাকচার হল ডেটার একটি সংগ্রহশালা, তাদের মধ্যে সম্পর্ক, এবং কোন কোন ফাংশন বা অপারেশন যা প্রয়োগ করা যেতে পারে তার ধারণা।

`স` - সহজ, `ক` - কঠিন

* `স` [লিংকড লিস্ট/Linked List](src/data-structures/linked-list)
* `স` [ডাবল লিংকড লিস্ট/Doubly Linked List](src/data-structures/doubly-linked-list)
* `স` [কিউ/Queue](src/data-structures/queue)
* `স` [স্ট্যাক/Stack](src/data-structures/stack)
* `স` [হ্যাশ টেবিল/Hash Table](src/data-structures/hash-table)
* `স` [হিপ/Heap](src/data-structures/heap) - সর্বোচ্চ এবং সর্বনিম্ন হিপ ভার্সন
* `স` [প্রায়রিটি কিউ/Priority Queue](src/data-structures/priority-queue)
* `ক` [ট্রায়/Trie](src/data-structures/trie)
* `ক` [ট্রি/Tree](src/data-structures/tree)
  * `ক` [বাইনারী সার্চ ট্রি/Binary Search Tree](src/data-structures/tree/binary-search-tree)
  * `ক` [AVL ট্রি/AVL Tree](src/data-structures/tree/avl-tree)
  * `ক` [রেড-ব্ল্যাক ট্রি/Red-Black Tree](src/data-structures/tree/red-black-tree)
  * `ক` [সেগমেন্ট ট্রি/Segment Tree](src/data-structures/tree/segment-tree) - সর্বনিম্ন/সর্বোচ্চ/সমষ্টি পরিসরের প্রশ্নের উদাহরণ সহ
  * `ক` [ফেনউইক ট্রি/Fenwick Tree](src/data-structures/tree/fenwick-tree) (বাইনারী ইনডেক্সড ট্রি/Binary Indexed Tree)
* `ক` [গ্রাফ/Graph](src/data-structures/graph) (both directed and undirected)
* `ক` [ডিসজয়েন্ট সেট/Disjoint Set](src/data-structures/disjoint-set)
* `ক` [ব্লুম ফিল্টার/Bloom Filter](src/data-structures/bloom-filter)

## অ্যালগরিদম

একটি অ্যালগরিদম হল এক শ্রেণীর সমস্যার সমাধান করার নির্দিষ্ট কৌশল। এটা কিছু নিয়মের একটি সেট যা সঠিকভাবে অপারেশনের ক্রম সংজ্ঞায়িত করে।

`স` - সহজ, `ক` - কঠিন

### বিষয় অনুসারে অ্যালগরিদম

* **গণিত**
  * `স` [বিট ম্যানিপুলেশন/Bit Manipulation](src/algorithms/math/bits) - সেট/গেট/আপডেট/ক্লিয়ার বিট, দুই দ্বারা গুণ/ভাগ, ঋণাত্মক বানানো ইত্যাদি।
  * `স` [বাইনারী দশমিক সংখ্যা/Binary Floating Point](src/algorithms/math/binary-floating-point) - দশমিক সংখ্যার বাইনারি উপস্থাপনা।
  * `স` [ফ্যাক্টোরিয়াল/Factorial](src/algorithms/math/factorial)
  * `স` [ফিবোনাচি নম্বর/Fibonacci Number](src/algorithms/math/fibonacci) - ক্লাসিক এবং ক্লোজড-ফর্ম ভার্সন
  * `স` [প্রাইম ফ্যাক্টর/Prime Factors](src/algorithms/math/prime-factors) - হার্ডি-রামানুজনের উপপাদ্য ব্যবহার করে প্রাইম ফ্যাক্টর খুঁজে বের করা এবং গণনা করা
  * `স` [প্রিমালিটি টেস্ট/Primality Test](src/algorithms/math/primality-test) (ট্রায়াল ডিভিশন পদ্ধতি)
  * `স` [ইউক্লিডীয় অ্যালগরিদম/Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - গরিষ্ঠ সাধারণ গুণনিয়ক (গ.সা.গু) গণনা করা
  * `স` [লঘিষ্ঠ সাধারণ গুণনিয়ক/Least Common Multiple](src/algorithms/math/least-common-multiple) লঘিষ্ঠ সাধারণ গুণনিয়ক (ল.সা.গু)
  * `স` [সিভ অফ ইরাটস্থিনস/Sieve of Eratosthenes](src/algorithms/math/seve-of-eratosthenes) - যে কোনো নির্দিষ্ট সীমা পর্যন্ত সমস্ত মৌলিক সংখ্যা খুঁজে বের করা
  * `স` [ইজ পাওয়ার অফ টু/Is Power of Two](src/algorithms/math/is-power-of-two) - সংখ্যাটি দুটির সূচক কিনা তা পরীক্ষা করুন (নাইভ এবং বিটওয়াইজ অ্যালগরিদম)
  * `স` [পাসকেলের ত্রিভুজ/Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `স` [জটিল সংখ্যা/Complex Number](src/algorithms/math/complex-number) - জটিল সংখ্যা এবং তাদের সাধারণ হিসাব
  * `স` [রেডিয়ান এবং ডিগ্রি/Radian & Degree](src/algorithms/math/radian) - রেডিয়ান থেকে ডিগ্রি এবং ডিগ্রি থেকে রেডিয়ান
  * `স` [ফাস্ট পাওয়ারিং/Fast Powering](src/algorithms/math/fast-powering)
  * `স` [হর্নারের পদ্ধতি/Horner's method](src/algorithms/math/horner-method) - বহুপদী মূল্যায়ন
  * `স` [ম্যাট্রিক্স/Matrix](src/algorithms/math/matrix) - ম্যাট্রিক্স এবং সাধারণ ম্যাট্রিক্স অপারেশন (গুণ, ট্রান্সপজিশন ইত্যাদি)
  * `স` [ইউক্লিডীয় দূরত্ব/Euclidean Distance](src/algorithms/math/euclidean-distance) - দুটি বিন্দু/ভেক্টর/ম্যাট্রিক্সের মধ্যে দূরত্ব
  * `ক` [পূর্ণসংখ্যা বিভাজন/Integer Partition](src/algorithms/math/integer-partition)
  * `ক` [বর্গমূল/Square Root](src/algorithms/math/square-root) - নিউটনের পদ্ধতি
  * `ক` [লিউ হুই π অ্যালগরিদম/Liu Hui π Algorithm](src/algorithms/math/liu-hui) - এন-গনের উপর ভিত্তি করে আনুমানিক π গণনা
  * `ক` [ডিসক্রিট ফুরিয়ার ট্রান্সফর্ম/Discrete Fourier Transform](src/algorithms/math/fourier-transform) - সময়ের একটি ফাংশনকে (একটি সংকেত) ফ্রিকোয়েন্সিতে পরিবর্তন করা

* **সেট**
  * `স` [কার্টেসিয়ান গুণফল/Cartesian Product](src/algorithms/sets/cartesian-product) - একাধিক সেটের গুণফল
  * `স` [ফিশার–ইয়েটস শাফেল/Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - একটি সসীম ক্রম-এর এলোমেলো বিন্যাস
  * `ক` [পাওয়ার সেট/Power Set](src/algorithms/sets/power-set) - একটি সেটের সমস্ত উপসেট (বিটওয়াইজ এবং ব্যাকট্র্যাকিং সমাধান)
  * `ক` [বিন্যাস/Permutations](src/algorithms/sets/permutations) (পুনরাবৃত্তি সহ এবং ছাড়া)
  * `ক` [সমাবেশ/Combinations](src/algorithms/sets/combinations) (পুনরাবৃত্তি সহ এবং ছাড়া)
  * `ক` [দীর্ঘতম সাধারণ সাবসিকুয়েন্স/Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence)
  * `ক` [দীর্ঘতম ক্রমবর্ধমান সাবসিকুয়েন্স/Longest Increasing Subsequence](src/algorithms/sets/longest-বর্ধিত-পরবর্তী)
  * `ক` [সংক্ষিপ্ততম সাধারণ সুপারসিকুয়েন্স/Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `ক` [ন্যাপস্যাক সমস্যা/Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0/1" এবং "অসীম"
  * `ক` [সর্বোচ্চ সাব অ্যারে/Maximum Subarray](src/algorithms/sets/maximum-subarray) - "ব্রুট ফোর্স" এবং "ডাইনামিক প্রোগ্রামিং" (কাডেনের) ভার্সন
  * `ক` [কম্বিনেশন সমষ্টি/Combination Sum](src/algorithms/sets/combination-sum) - নির্দিষ্ট যোগফল তৈরি করে এমন সকল কম্বিনেশন খুঁজুন

* **স্ট্রিংস**
  * `স` [হ্যামিং দূরত্ব/Hamming Distance](src/algorithms/string/hamming-distance) - অবস্থানের সংখ্যা যেখানে প্রতীকগুলি আলাদা
  * `স` [প্যালিনড্রোম/Palindrome](src/algorithms/string/palindrome) - স্ট্রিং বিপরীতে একই কিনা তা পরীক্ষা করুন
  * `ক` [লেভেনশটাইন দূরত্ব/Levenshtein Distance](src/algorithms/string/levenshtein-distance) - দুটি সিকোয়েন্সের মধ্যে ন্যূনতম সম্পাদনা দূরত্ব
  * `ক` [নুথ–মরিস–প্র্যাট অ্যালগরিদম/Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP অ্যালগরিদম) - সাবস্ট্রিং অনুসন্ধান (প্যাটার্ন মিলানো)
  * `ক` [জেড অ্যালগরিদম/Z Algorithm](src/algorithms/string/z-algorithm) - সাবস্ট্রিং অনুসন্ধান (প্যাটার্ন মিলানো)
  * `ক` [র‌্যাবিন কার্প অ্যালগরিদম/Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - সাবস্ট্রিং অনুসন্ধান
  * `ক` [দীর্ঘতম সাধারণ সাবস্ট্রিং/Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `ক` [রেগুলার এক্সপ্রেশন মিলানো/Regular Expression Matching](src/algorithms/string/regular-expression-matching)

* **অনুসন্ধান**
  * `B` [লিনিয়ার অনুসন্ধান/Linear Search](src/algorithms/search/linear-search)
  * `B` [জাম্প অনুসন্ধান/Jump Search](src/algorithms/search/jump-search) (বা ব্লক অনুসন্ধান) - সাজানো অ্যারেতে অনুসন্ধান করা
  * `B` [বাইনারী অনুসন্ধান/Binary Search](src/algorithms/search/binary-search) - সাজানো অ্যারেতে অনুসন্ধান করা
  * `B` [ইন্টারপোলেশন অনুসন্ধান/Interpolation Search](src/algorithms/search/interpolation-search) - সমানভাবে বিতরণ করা সাজানো অ্যারেতে অনুসন্ধান করা

* **সাজানো**
   * `B` [বাবল্ সাজানো/Bubble Sort](src/algorithms/sorting/bubble-sort)
   * `B` [নির্বাচনী বাছাই/Selection Sort](src/algorithms/sorting/selection-sort)
   * `B` [সন্নিবেশ সাজানোর/Insertion Sort](src/algorithms/sorting/insertion-sort)
   * `B` [হিপ বাছাই/Heap Sort](src/algorithms/sorting/heap-sort)
   * `B` [একত্রিত করে সাজানো/Merge Sort](src/algorithms/sorting/merge-sort)
   * `B` [তাড়াতাড়ি সাজানো/Quicksort](src/algorithms/sorting/quick-sort) - ইন-প্লেস এবং নন-ইন-প্লেস বাস্তবায়ন
   * `B` [শেল সর্ট/Shellsort](src/algorithms/sorting/shell-sort)
   * `B` [গণনা বাছাই/Counting Sort](src/algorithms/sorting/counting-sort)
   * `B` [রেডিক্স সাজানো/Radix Sort](src/algorithms/sorting/radix-sort)

* **লিঙ্ক করা তালিকা**
  * `B` [সোজা ট্রাভার্সাল/Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [উল্টো ট্রাভার্সাল/Reverse Traversal](src/algorithms/linked-list/reverse-traversal)

* **ট্রি**
  * `B` [গভীর-প্রথম অনুসন্ধান/Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [প্রস্থ-প্রথম অনুসন্ধান/Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)