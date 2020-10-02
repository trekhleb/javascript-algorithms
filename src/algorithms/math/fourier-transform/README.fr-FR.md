# Transformation de Fourier

## Définitions

La transformation de Fourier (**ℱ**) est une opération qui transforme
une fonction intégrable sur ℝ en une autre fonction,
décrivant le spectre fréquentiel de cette dernière

La **Transformée de Fourier Discrète** (**TFD**) convertit une séquence finie d'échantillons également espacés d'une fonction, dans une séquence de même longueur d'échantillons, également espacés de la Transformée de Fourier à temps discret (TFtd), qui est une fonction complexe de la fréquence.
L'intervalle auquel le TFtd est échantillonné est l'inverse de la durée de la séquence d'entrée.
Une TFD inverse est une série de Fourier, utilisant les échantillons TFtd comme coefficients de sinusoïdes complexes aux fréquences TFtd correspondantes. Elle a les mêmes valeurs d'échantillonnage que la
séquence d'entrée originale. On dit donc que la TFD est une représentation du domaine fréquentiel
de la séquence d'entrée d'origine. Si la séquence d'origine couvre toutes les
valeurs non nulles d'une fonction, sa TFtd est continue (et périodique), et la TFD fournit
les échantillons discrets d'une fenêtre. Si la séquence d'origine est un cycle d'une fonction périodique, la TFD fournit toutes les valeurs non nulles d'une fenêtre TFtd.

Transformée de Fourier Discrète converti une séquence de `N` nombres complexes:

{x<sub>n</sub>} = x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> ..., x<sub>N-1</sub>

en une atre séquence de nombres complexes::

{X<sub>k</sub>} = X<sub>0</sub>, X<sub>1</sub>, X<sub>2</sub> ..., X<sub>N-1</sub>

décrite par:

![DFT](https://wikimedia.org/api/rest_v1/media/math/render/svg/1af0a78dc50bbf118ab6bd4c4dcc3c4ff8502223)

The **Transformée de Fourier à temps discret** (**TFtd**) est une forme d'analyse de Fourier
qui s'applique aux échantillons uniformément espacés d'une fonction continue. Le terme "temps discret" fait référence au fait que la transformée fonctionne sur des données discrètes
(échantillons) dont l'intervalle a souvent des unités de temps.
À partir des seuls échantillons, elle produit une fonction de fréquence qui est une somme périodique de la
Transformée de Fourier continue de la fonction continue d'origine.

A **Transformation de Fourier rapide** (**FFT** pour Fast Fourier Transform) est un algorithme de calcul de la transformation de Fourier discrète (TFD). Il est couramment utilisé en traitement numérique du signal pour transformer des données discrètes du domaine temporel dans le domaine fréquentiel, en particulier dans les oscilloscopes numériques (les analyseurs de spectre utilisant plutôt des filtres analogiques, plus précis). Son efficacité permet de réaliser des filtrages en modifiant le spectre et en utilisant la transformation inverse (filtre à réponse impulsionnelle finie).

Cette transformation peut être illustée par la formule suivante. Sur la période de temps mesurée
dans le diagramme, le signal contient 3 fréquences dominantes distinctes.

Vue d'un signal dans le domaine temporel et fréquentiel:

![FFT](https://upload.wikimedia.org/wikipedia/commons/6/61/FFT-Time-Frequency-View.png)

An FFT algorithm computes the discrete Fourier transform (DFT) of a sequence, or
its inverse (IFFT). Fourier analysis converts a signal from its original domain
to a representation in the frequency domain and vice versa. An FFT rapidly
computes such transformations by factorizing the DFT matrix into a product of
sparse (mostly zero) factors. As a result, it manages to reduce the complexity of
computing the DFT from O(n<sup>2</sup>), which arises if one simply applies the
definition of DFT, to O(n log n), where n is the data size.

Here a discrete Fourier analysis of a sum of cosine waves at 10, 20, 30, 40,
and 50 Hz:

![FFT](https://upload.wikimedia.org/wikipedia/commons/6/64/FFT_of_Cosine_Summation_Function.png)

## Explanation

The Fourier Transform is one of deepest insights ever made. Unfortunately, the
meaning is buried within dense equations:

![](https://betterexplained.com/wp-content/plugins/wp-latexrender/pictures/45c088dbb767150fc0bacfeb49dd49e5.png)

and

![](https://betterexplained.com/wp-content/plugins/wp-latexrender/pictures/faeb9c5bf2e60add63ae4a70b293c7b4.png)

Rather than jumping into the symbols, let's experience the key idea firsthand. Here's a plain-English metaphor:

- _What does the Fourier Transform do?_ Given a smoothie, it finds the recipe.
- _How?_ Run the smoothie through filters to extract each ingredient.
- _Why?_ Recipes are easier to analyze, compare, and modify than the smoothie itself.
- _How do we get the smoothie back?_ Blend the ingredients.

**Think With Circles, Not Just Sinusoids**

The Fourier Transform is about circular paths (not 1-d sinusoids) and Euler's
formula is a clever way to generate one:

![](https://betterexplained.com/wp-content/uploads/euler/equal_paths.png)

Must we use imaginary exponents to move in a circle? Nope. But it's convenient
and compact. And sure, we can describe our path as coordinated motion in two
dimensions (real and imaginary), but don't forget the big picture: we're just
moving in a circle.

**Discovering The Full Transform**

The big insight: our signal is just a bunch of time spikes! If we merge the
recipes for each time spike, we should get the recipe for the full signal.

The Fourier Transform builds the recipe frequency-by-frequency:

![](https://betterexplained.com/wp-content/uploads/images/fourier-explained-20121219-224649.png)

A few notes:

- N = number of time samples we have
- n = current sample we're considering (0 ... N-1)
- x<sub>n</sub> = value of the signal at time n
- k = current frequency we're considering (0 Hertz up to N-1 Hertz)
- X<sub>k</sub> = amount of frequency k in the signal (amplitude and phase, a complex number)
- The 1/N factor is usually moved to the reverse transform (going from frequencies back to time). This is allowed, though I prefer 1/N in the forward transform since it gives the actual sizes for the time spikes. You can get wild and even use 1/sqrt(N) on both transforms (going forward and back creates the 1/N factor).
- n/N is the percent of the time we've gone through. 2 _ pi _ k is our speed in radians / sec. e^-ix is our backwards-moving circular path. The combination is how far we've moved, for this speed and time.
- The raw equations for the Fourier Transform just say "add the complex numbers". Many programming languages cannot handle complex numbers directly, so you convert everything to rectangular coordinates and add those.

Stuart Riffle has a great interpretation of the Fourier Transform:

![](https://betterexplained.com/wp-content/uploads/images/DerivedDFT.png)

## References

- [An Interactive Guide To The Fourier Transform](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
- [DFT on YouTube by Better Explained](https://www.youtube.com/watch?v=iN0VG9N2q0U&t=0s&index=77&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [FT on YouTube by 3Blue1Brown](https://www.youtube.com/watch?v=spUNpyF58BY&t=0s&index=76&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [FFT on YouTube by Simon Xu](https://www.youtube.com/watch?v=htCj9exbGo0&index=78&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&t=0s)
- Wikipedia
  - [FT](https://en.wikipedia.org/wiki/Fourier_transform)
  - [DFT](https://www.wikiwand.com/en/Discrete_Fourier_transform)
  - [DTFT](https://en.wikipedia.org/wiki/Discrete-time_Fourier_transform)
  - [FFT](https://www.wikiwand.com/en/Fast_Fourier_transform)
