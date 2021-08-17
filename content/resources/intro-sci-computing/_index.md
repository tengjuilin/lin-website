---
title: "AMATH 301 Introduction to Scientific Computing"
date: 2021-08-17T00:00:00+08:00
draft: false
layout: single
---

[![License](https://img.shields.io/github/license/tengjuilin/intro-sci-computing)](https://creativecommons.org/licenses/by/4.0/)
[![Visits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftengjuilin%2Fintro-sci-computing&count_bg=%233D6AC8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Visits+%28daily%2Ftotal%29&edge_flat=false)](https://hits.seeyoufarm.com)

[<i class="fab fa-github fa-fw"></i> GitHub](https://github.com/tengjuilin/intro-sci-computing)

AMATH 301 covers numerical methods and programming skills needed to solve physical, biological, and engineering problems. Content is transcribed from MATLAB (originally taught in the course) to Python for open source reference. Taken in Sp20 with Dr. Craig Gin.

Note: Starred topics (*) are not covered in Sp20 but covered in [previous years](https://www.youtube.com/channel/UCEirPnFv_2QbvzrM67SnKPA/videos).

### Root-Finding and Optimization

|Topic|Applications|Numerical Methods <br/> Python Skills|Jupyter <br/> Notebook|Online|
|-|-|-|:-:|:-:|
|Root finding algorithms|Solving function values|Bisection method <br/> Newton's method <br/> `scipy.optimize.root_scalar()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/root-finding-optimization/root-finding-algorithms.ipynb)|[html](root-finding-optimization/root-finding-algorithms.html)|
|Unconstrained optimization|Finding max and min of convex functions|Golden section search <br/> Gradient descent <br/> `scipy.optimize.fminbound()` <br/> `scipy.optimize.fmin()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/root-finding-optimization/unconstrained-optimization.ipynb)|[html](root-finding-optimization/unconstrained-optimization.html)|
|Constrained optimization*|Finding max and min of functions with constraints|Linear programming <br/> Genetic algorithm <br/> `scipy.optimize.linprog()` <br/> `scipy.optimize.differential_evolution()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/root-finding-optimization/constrained-optimization.ipynb)|[html](root-finding-optimization/constrained-optimization.html)|
|Curve fitting and interpolation|Fitting data <br/> Interpolating between data|Sum of squared error <br/> Sum of absolute error <br/> Maximum absolute error <br/> `scipy.optimize.fmin()`<br/> `scipy.optimize.curve_fit()` <br/> `numpy.polyfit()` <br/> `numpy.polyval()` <br/> `scipy.interpolate.interp1d()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/root-finding-optimization/curve-fitting-interpolation.ipynb)|[html](root-finding-optimization/curve-fitting-interpolation.html)|

### Linear Algebra

|Topic|Applications|Numerical Methods <br/> Python Skills|Jupyter <br/> Notebook|Online|
|-|-|-|:-:|:-:|
|Matrix operations in python|Dot product <br/> Norm <br/> Matrix multiplication|`@` <br/>`numpy.linalg.norm()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/linear-algebra/matrix-operations.ipynb)|[html](linear-algebra/matrix-operations.html)|
|Solving linear systems <br/> with direct methods|Solving linear systems repeatedly|Matrix inversion <br/> LU decomposition <br/> `np.linalg.lu()` <br/> `scipy.linalg.solve()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/linear-algebra/solving-linear-system-direct-method.ipynb)|[html](linear-algebra/solving-linear-system-direct-method.html)|
|Solving linear systems <br/> with iterative methods|Solving sparse linear systems|Jacobi method <br/> Gauss-Seidel method <br/> `numpy.linalg.eig()` <br/> `numpy.linalg.eigvals()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/linear-algebra/solving-linear-system-iterative-method.ipynb)|[html](linear-algebra/solving-linear-system-iterative-method.html)|
|Singular value decomposition (SVD) <br/> (Principle component analysis, PCA)|Dimensionality reduction <br/> Image compression|SVD, PCA algorithm <br/> `scipy.linalg.svd()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/linear-algebra/singular-value-decomposition-pca.ipynb)|[html](linear-algebra/singular-value-decomposition-pca.html)|

### Numerical Calculus

|Topic|Applications|Numerical Methods <br/> Python Skills|Jupyter <br/> Notebook|Online|
|-|-|-|:-:|:-:|
|Numerical differentiation|Differentiate functions <br/> Differentiate data|Forward difference <br/> Backward difference <br/> Central difference <br/> Other second order methods <br/> `numpy.gradient()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/numerical-calculus/numerical-differentiation.ipynb)|[html](numerical-calculus/numerical-differentiation.html)|
|Numerical integration|Single integrals <br/> Double integrals <br/> Triple integrals <br/> (functions and data)|Left end point rule <br/> Right endpoint rule <br/> Midpoint rule <br/> Trapezoidal rule <br/> Simpson's rule <br/> `scipy.integrate.quad()` <br/> `scipy.integrate.dblquad()` <br/> `scipy.integrate.tplquad()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/numerical-calculus/numerical-integration.ipynb)|[html](numerical-calculus/numerical-integration.html)|

### Ordinary Differential Equations (ODEs)

|Topic|Applications|Numerical Methods <br/> Python Skills|Jupyter <br/> Notebook|Online|
|-|-|-|:-:|:-:|
|Solving first-order ODEs|Solving first-order ODEs|Forward Euler <br/> Backward Euler <br/> Midpoint method <br/> Fourth-order Runge-Kutta (RK4) <br/> `scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/solving-first-order-odes.ipynb)|[html](ode/solving-first-order-odes.html)|
|Solving higher-order ODEs|Solving higher-order ODEs <br/> Systems of first-order ODEs|Forward Euler <br/> Backward Euler <br/> `scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/solving-higher-order-odes.ipynb)|[html](ode/solving-higher-order-odes.html)|
|Stability and stiffness of ODEs|Choosing integration methods <br/> Choosing time steps|Forward Euler <br/> Backward Euler <br/> `scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/ode-stability-stiffness.ipynb)|[html](ode/ode-stability-stiffness.html)|
|Phase portrait|Spring-mass-damper system|`scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/phase-portrait-spring-mass-damper.ipynb)|[html](ode/phase-portrait-spring-mass-damper.html)|
||Linear, nonlinear pendulum|`scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/phase-portrait-linear-nonlinear-pendulum.ipynb)|[html](ode/phase-portrait-linear-nonlinear-pendulum.html)|
||Two-eyed monster|`scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/phase-portrait-two-eyed-monster.ipynb)|[html](ode/phase-portrait-two-eyed-monster.html)|
||Population dynamics <br/> Predator-pray model <br/> Competition model|`scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/phase-portrait-population-dynamics.ipynb)|[html](ode/phase-portrait-population-dynamics.html)|
||FitzHugh-Nagumo neuron excitation model*|`scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/phase-portrait-neuron-excitation.ipynb)|[html](ode/phase-portrait-neuron-excitation.html)|
|Chaotic systems*|Lorenz system|`scipy.integrate.solve_ivp()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/ode/chaotic-system-lorenz-system.ipynb)|[html](ode/chaotic-system-lorenz-system.html)|

### Fourier Transform

|Topic|Applications|Numerical Methods <br/> Python Skills|Jupyter <br/> Notebook|Online|
|-|-|-|:-:|:-:|
|Fourier transform*|Power spectrum density <br/> Noise filtering <br/> Image compression|Discrete Fourier transform <br/> Fast Fourier transform <br/> `numpy.fft.fft()` <br/> `numpy.fft.ifft()` <br/> `numpy.fft.fftfreq()` <br/> `numpy.fft.fft2()`|[ipynb](https://github.com/tengjuilin/intro-sci-computing/blob/main/fourier-transform/fourier-transform.ipynb)|[html](fourier-transform/fourier-transform.html)|
