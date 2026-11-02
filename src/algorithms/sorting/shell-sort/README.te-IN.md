# Shellsort

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

Shellsort (దీన్నే Shell sort లేదా Shell's method అని కూడా అంటారు) అనేది ఒక in-place comparison sort.
దీన్ని exchange తో sorting (bubble sort) కి గానీ, insertion తో sorting (insertion sort) కి గానీ ఒక
జనరల్ version గా చూడొచ్చు. ఈ పద్ధతి ఒకదానికొకటి దూరంగా ఉన్న elements జంటలని sort చేయడంతో మొదలై,
తర్వాత compare చేసే elements మధ్య దూరాన్ని (gap) కొద్దికొద్దిగా తగ్గిస్తూ వెళ్తుంది. దూరంగా ఉన్న
elements తో మొదలుపెట్టడం వల్ల, తప్పు చోట ఉన్న కొన్ని elements ని సింపుల్ పక్క-పక్క exchange కంటే
ఫాస్ట్ గా కరెక్ట్ position కి జరపొచ్చు.

![Shellsort](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## Shell Sort ఎలా పనిచేస్తుంది

మన example కోసం, ఈజీగా అర్థమవ్వడానికి interval `4` తీసుకుందాం. 4 positions దూరంలో ఉన్న అన్ని values
తో ఒక virtual sub-list తయారుచేయండి. ఇక్కడ ఆ values `{35, 14}`, `{33, 19}`, `{42, 27}`, `{10, 44}`

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_4.jpg)

ప్రతి sub-list లో values ని compare చేసి, (అవసరమైతే) original array లో వాటిని swap చేస్తాం. ఈ step
తర్వాత కొత్త array ఇలా ఉండాలి

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_1.jpg)

తర్వాత interval 2 తీసుకుంటాం, ఈ gap తో రెండు sub-lists వస్తాయి
- `{14, 27, 35, 42}`, `{19, 10, 33, 44}`

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_2.jpg)

అవసరమైతే original array లో values ని compare చేసి swap చేస్తాం.
ఈ step తర్వాత array ఇలా ఉండాలి

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_2.jpg)

> UPD: కింద ఉన్న బొమ్మలో ఒక typo (తప్పు) ఉంది, result array `[14, 10, 27, 19, 35, 33, 42, 44]` అయి ఉండాలి.

చివరగా, మిగిలిన array ని interval value 1 తో sort చేస్తాం. Array ని sort చేయడానికి Shell sort
insertion sort వాడుతుంది.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort.jpg)

## Complexity

| పేరు                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Shell sort**        | n&nbsp;log(n)   | gap sequence ని బట్టి మారుతుంది   | n&nbsp;(log(n))<sup>2</sup>  | 1         | కాదు       |           |

## References

- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
- [Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
- [YouTube లో Rob Edwards](https://www.youtube.com/watch?v=ddeLSDsYVp8&index=79&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
