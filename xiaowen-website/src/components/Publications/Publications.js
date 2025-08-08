import React, { useState } from 'react';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showCitation, setShowCitation] = useState(null);
  const publicationsPerPage = 5;

  const publications = [
    {
      title: "Speed of coming down from infinity for Λ-Fleming-Viot initial support",
      authors: "Huili Liu, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2025",
      category: "preprint",
      abstract: "The Λ-Fleming-Viot process is a probability measure-valued process that is dual to a Λ-coalescent that allows multiple collisions. In this paper, we consider a class of Λ-Fleming-Viot processes with Brownian spatial motion and with associated Λ-coalescents that come down from infinity. Notably, these processes have the compact support property: the support of the process becomes finite as soon as, even though the initial measure has unbounded support. We obtain asymptotic results characterizing the rates at which the initial supports become finite.",
      url: "https://arxiv.org/pdf/2506.07067",
    },
    {
      title: "De Finetti's problem with fixed transaction costs and regime switching",
      authors: "Wenyuan Wang, Zuo Quan Xu, Kazutoshi Yamazaki, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2025",
      category: "preprint",
      abstract: "In this paper, we examine a modified version of de Finetti's optimal dividend problem, incorporating fixed transaction costs and altering the surplus process by introducing two-valued drift and two-valued volatility coefficients. This modification aims to capture the transitions or adjustments in the company's financial status.",
      url: "https://arxiv.org/pdf/2502.05839"
    },
    {
      title: "Exponential ergodicity of branching processes with immigration and competition",
      authors: "Pei-Sen Li, Zenghu Li, Jian Wang, Xiaowen Zhou",
      journal: "Project Euclid",
      year: "2025",
      category: "article",
      abstract: "We study the ergodic property of a continuous-state branching process with immigration and competition, which is an extension of the models studied by Lambert (2005), Pardoux (2016) and Berestycki et al. (2018) with an additional immigration structure.",
      url: "https://projecteuclid.org/journals/annales-de-linstitut-henri-poincare-probabilites-et-statistiques/volume-61/issue-1/Exponential-ergodicity-of-branching-processes-with-immigration-and-competition/10.1214/23-AIHP1425.short"
    },
    {
      title: "Extinction behaviour for a mutually interacting continuous-state population dynamics",
      authors: "Jie Xiong, Xu Yang, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2024",
      category: "preprint",
      abstract: "We consider a system of two stochastic differential equations (SDEs) with negative two-way interactions driven by Brownian motions and spectrally positive α-stable random measures. Such a SDE system can be identified as a Lotka-Volterra type population model.",
      url: "https://arxiv.org/pdf/2412.00376"
    },
    {
      title: "Quasi-stationary distribution for continuous-state branching processes with competition",
      authors: "Pei-Sen Li, Jian Wang, Xiaowen Zhou",
      journal: "Science Direct",
      year: "2024",
      category: "article",
      abstract: "We study quasi-stationary distribution of the continuous-state branching process with competition introduced in Berestycki, Fittipaldi and Fontbona (Probab. Theory Relat. Fields, 2018). This process is constructed as the unique strong solution to a stochastic integral equation with jumps.",
      url: "https://www.sciencedirect.com/science/article/pii/S0304414924001637?via%3Dihub"
    },
    {
      title: "A note on Skew Brownian Motion with two-valued drift and an application",
      authors: "Zaniar Ahmadi, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2024",
      category: "preprint",
      abstract: "For refracted skew Brownian motion (skew Brownian motion with two-valued drift), adopting a perturbation approach we find expressions of its potential densities. As applications, we recover its transition density and study its long-time asymptotic behaviors.",
      url: "https://arxiv.org/pdf/2407.09321"
    },
    {
      title: "Entrance Laws for Continuous-State Nonlinear Branching Processes Coming Down from Infinity",
      authors: "Li Bo, Xiaowen Zhou",
      journal: "Springer Nature",
      year: "2024",
      category: "chapter",
      abstract: "We consider a class of non-negative valued, time-changed spectrally positive Lévy processes stopped whenever hitting 0, which can be identified as continuous-state branching processes with population dependent branching rates.",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-47417-0_25"
    },
    {
      title: "An excursion theoretic approach to Parisian ruin problem",
      authors: "Li Bo, Xiaowen Zhou",
      journal: "Science Direct",
      year: "2024",
      category: "article",
      abstract: "Applying excursion theory, we re-express several well studied fluctuation quantities associated to Parisian ruin problem for Lévy risk processes in terms of integrals with respect to excursion measure for spectrally negative Lévy process.",
      url: "https://www.sciencedirect.com/science/article/pii/S016766872400057X?via%3Dihub"
    },
    {
      title: "Behaviors near explosion of nonlinear CSBPs with regularly varying mechanisms",
      authors: "Li Bo, Clément Foucart, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2024",
      category: "preprint",
      abstract: "We study the explosion phenomenon of nonlinear continuous-state branching processes (nonlinear CSBPs). First an explicit integral test for explosion is designed when the rate function does not increase too fast.",
      url: "https://arxiv.org/pdf/2404.06145"
    },
    {
      title: "Exact Modulus of Continuities for Λ-Fleming–Viot Processes with Brownian Spatial Motion",
      authors: "Huili Liu, Xiaowen Zhou",
      journal: "Journal of Theoretical Probability",
      year: "2024",
      category: "article",
      abstract: "For a class of Λ-Fleming–Viot processes with Brownian spatial motion in R^d whose associated Λ-coalescents come down from infinity, we obtain sharp global and local modulus of continuities for the ancestry processes recovered from the lookdown constructions.",
      url: "https://link.springer.com/article/10.1007/s10959-024-01326-4"
    },
    {
      title: "Existence of weak solutions to stochastic heat equations driven by truncated α-stable white noises with non-Lipschitz coefficients",
      authors: "Yongjin Wang, Chengxin Yan, Xiaowen Zhou",
      journal: "Stochastic Processes and their Applications",
      year: "2024",
      category: "article",
      abstract: "We consider a class of stochastic heat equations driven by truncated α-stable white noises for α ∈ (1,2) with noise coefficients that are continuous but not necessarily Lipschitz and satisfy globally linear growth conditions.",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0022247X24002841?via%3Dihub"
    },
    {
      title: "Comparison principle for stochastic heat equations driven by α-stable white noises",
      authors: "Yongjin Wang, Chengxin Yan, Xiaowen Zhou",
      journal: "Electronic Journal of Probability",
      year: "2024",
      category: "article",
      abstract: "For a class of non-linear stochastic heat equations driven by α-stable white noises for α ∈ (1,2) with Lipschitz coefficients, we prove the existence and pathwise uniqueness of L^p-valued càdlàg solution to such an equation for p ∈ (α, 2].",
      url: "https://projecteuclid.org/journals/bernoulli/volume-30/issue-2/Comparison-principle-for-stochastic-heat-equations-driven-by-%ce%b1-stable/10.3150/23-BEJ1635.short"
    },
    {
      title: "On Optimality of Barrier Dividend Control Under Endogenous Regime Switching with Application to Chapter 11 Bankruptcy",
      authors: "Wenyuan Wang, Xiang Yu, Xiaowen Zhou",
      journal: "SIAM Journal on Control and Optimization",
      year: "2023",
      category: "article",
      abstract: "Motivated by recent developments in risk management based on the U.S. bankruptcy code, we revisit the De Finetti's optimal dividend problem by incorporating the reorganization process and regulator's intervention documented in Chapter 11 bankruptcy.",
      url: "https://link.springer.com/article/10.1007/s00245-023-10079-1"
    },
    {
      title: "Quasi-stationary distribution for continuous-state branching processes with competition",
      authors: "Pei-Sen Li, Jian Wang, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2023",
      category: "preprint",
      abstract: "We study the quasi-stationary distribution for continuous-state branching processes with competition. We establish the existence and uniqueness of the quasi-stationary distribution and investigate its properties.",
      url: "https://arxiv.org/pdf/2308.12493"
    },
    {
      title: "On the boundary classification of Λ-Wright–Fisher processes with frequency-dependent selection",
      authors: "Clément Foucart, Xiaowen Zhou",
      journal: "Annals of Applied Probability",
      year: "2023",
      category: "article",
      abstract: "We construct extensions of the pure-jump Λ-Wright-Fisher processes with frequency-dependent selection (Λ-WF processes with selection) beyond their first passage time at the boundary 1.",
      url: "https://ahl.centre-mersenne.org/articles/10.5802/ahl.170/"
    },
    {
      title: "Explosion of continuous-state branching processes with competition in a Lévy environment",
      authors: "Rugang Ma, Xiaowen Zhou",
      journal: "Stochastic Processes and their Applications",
      year: "2023",
      category: "article",
      abstract: "We find sufficient conditions on explosion/non-explosion for continuous-state branching processes with competition in a Lévy random environment. In particular, we identify the necessary and sufficient conditions on explosion/non-explosion when the competition function is a power function."
    },
    {
      title: "An Excursion Theoretic Approach to Parisian Ruin Problem",
      authors: "Li Bo, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2023",
      category: "preprint", 
      abstract: "Applying excursion theory, we re-express several well studied fluctuation quantities associated to Parisian ruin problem for Lévy risk processes in terms of integrals with respect to excursion measure for spectrally negative Lévy process. We show that these new expressions reconcile with the previous results on Parisian ruin problem."
    },
    {
        title: "Parisian excursion with capital injection for drawdown reflected Lévy insurance risk process",
        authors: "Budhi Arta Surya, Wenyuan Wang, Xianghua Zhao, Xiaowen Zhou",
        journal: "Insurance: Mathematics and Economics",
        year: "2023",
        category: "article",
        abstract: "This paper discusses the Parisian ruin problem for a Lévy insurance risk process with capital injection. Capital injection is triggered at the drawdown time of the surplus process when it drops below the drawdown level that is a pre-specified function of its last recorded maximum. The capital is then continuously injected into the surplus process to keep it above the drawdown level until either the surplus recovers or the Parisian ruin time arrives."
    },
    {
        title: "Instantaneous support propagation for Λ-Fleming–Viot processes",
        authors: "Thomas Hughes, Xiaowen Zhou", 
        journal: "Annals of Probability",
        year: "2022",
        category: "article",
        abstract: "For a probability-measure-valued neutral Fleming-Viot process with Lévy mutation and resampling mechanism associated to a general Λ-coalescent with multiple collisions, we prove the instantaneous propagation of supports. That is, at any fixed time t>0, with probability one the closed support S(Zt) of the Fleming-Viot process satisfies S(ν∗Zt)⊆S(Zt) for any probability measure ν."
    },
    {
        title: "Comparison principle for stochastic heat equations driven by α-stable white noises",
        authors: "Yongjin Wang, Chengxin Yan, Xiaowen Zhou",
        journal: "Cornell University",
        year: "2022", 
        category: "preprint",
        abstract: "For a class of non-linear stochastic heat equations driven by α-stable white noises for α∈(1,2) with Lipschitz coefficients, we first show the existence and pathwise uniqueness of Lp-valued càdlàg solutions to such an equation for p∈(α,2] by considering a sequence of approximating stochastic heat equations driven by truncated α-stable white noises."
    },
    {
        title: "Existence of weak solutions to stochastic heat equations driven by truncated α-stable white noises with non-Lipschitz coefficients",
        authors: "Yongjin Wang, Chengxin Yan, Xiaowen Zhou",
        journal: "Cornell University",
        year: "2022",
        category: "preprint",
        abstract: "We consider a class of stochastic heat equations driven by truncated α-stable white noises for α∈(1,2) with noise coefficients that are continuous but not necessarily Lipschitz and satisfy globally linear growth conditions. We prove the existence of weak solution, taking values in two different forms under different conditions, to such an equation."
    },
    {
        title: "The Parisian and ultimate drawdowns of Lévy insurance models",
        authors: "Shu Li, Xiaowen Zhou",
        journal: "Advances in Applied Probability",
        year: "2022",
        category: "article",
        abstract: "In this paper, inspired by the ideas of Parisian ruin and ultimate bankruptcy, we introduce two new stopping times for the (general) drawdown process, namely, the Parisian drawdown and ultimate drawdown under the exponential implementation delays. We provide quantitative analysis of their distributional properties of interest through the generalized scale functions."
    },
    {
        title: "Exact modulus of continuities for Λ-Fleming-Viot processes with Brownian spatial motion",
        authors: "Huili Liu, Xiaowen Zhou",
        journal: "Cornell University",
        year: "2022",
        category: "preprint",
        abstract: "For a class of Λ-Fleming-Viot processes with Brownian spatial motion in ℝd whose associated Λ-coalescents come down from infinity, we obtain sharp global and local modulus of continuities for the ancestry processes recovered from the lookdown constructions. As applications, we prove both global and local modulus of continuity results for the Λ-Fleming-Viot support process."
    },
    {
        title: "Exponential ergodicity of branching processes with immigration and competition",
        authors: "Pei-Sen Li, Zenghu Li, Jian Wang, Xiaowen Zhou",
        journal: "Cornell University",
        year: "2022",
        category: "preprint",
        abstract: "We study the ergodic property of a continuous-state branching process with immigration and competition, which is an extension of the models studied by Lambert (2005), Pardoux (2016) and Berestycki et al. (2018) with an additional immigration structure. The exponential ergodicity in a weighted total variation distance is established under a Lyapunov-type condition and other mild assumptions."
    },
    {
        title: "Integral Functionals for Spectrally Positive Lévy Processes",
        authors: "Pei-Sen Li, Xiaowen Zhou",
        journal: "Journal of Applied Probability",
        year: "2022",
        category: "article",
        abstract: "We find necessary and sufficient conditions for almost sure finiteness of integral functionals of spectrally positive Lévy processes under conditional probabilities. Via Lamperti-type transforms, these results can be applied to obtain new integral tests on extinction and explosion behaviors for a class of continuous-state nonlinear branching processes."
    },
    {
        title: "Explosion of continuous-state branching processes with competition in Lévy environment",
        authors: "Rugang Ma, Xiaowen Zhou",
        journal: "Cornell University",
        year: "2022",
        category: "preprint",
        abstract: "Using the Lyapunov criteria arguments, we find sufficient conditions on explosion/nonexplosion for continuous-state branching processes with competition in Lévy random environment. In particular, we identify the necessary and sufficient conditions on explosion/nonexplosion when the competition function is a power function and the Lévy measure of the associated branching mechanism is regularly varying at 0+."
    },
    {
        title: "Extinguishing behaviors for continuous-state nonlinear branching processes",
        authors: "Junping Li, Yingchun Tang, Xiaowen Zhou",
        journal: "Stochastic Processes and their Applications",
        year: "2022",
        category: "article",
        abstract: "A nonnegative continuous-state branching process becomes extinguishing if it converges to 0 as time goes to infinity but never hits 0 in finite time. We consider a class of continuous-state nonlinear branching processes obtained from spectrally positive stable like Lévy processes by Lamperti type time changes using regularly varying (at 0+) rate functions."
    },
    {
        title: "On the explosion of the number of fragments in simple exchangeable fragmentation-coagulation processes",
        authors: "Clément Foucart, Xiaowen Zhou",
        journal: "Annals of Applied Probability",
        year: "2022",
        category: "article",
        abstract: "We consider the exchangeable fragmentation-coagulation (EFC) processes, where the coagulations are multiple and not simultaneous, as in a Λ-coalescent, and the fragmentations dislocate at finite rate an individual block into sub-blocks of infinite size. Sufficient conditions are found for the block-counting process to explode (i.e. to reach infinity in finite time)."
    },
    {
      title: "On the extinction-extinguishing dichotomy for a stochastic Lotka–Volterra type population dynamical system",
      authors: "Yanxia Ren, Jie Xiong, Xu Yang, Xiaowen Zhou",
      journal: "Journal of Mathematical Biology",
      year: "2022",
      category: "article",
      abstract: "Applying the Foster–Lyapunov type criteria and a martingale method, we study a two-dimensional process (X,Y) arising as the unique nonnegative solution to a pair of stochastic differential equations driven by independent Brownian motions and compensated spectrally positive Lévy random measures. Both processes X and Y can be identified as continuous-state nonlinear branching processes."
    },
    {
      title: "Instantaneous support propagation for Λ-Fleming-Viot processes",
      authors: "Thomas Hughes, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2022",
      category: "preprint",
      abstract: "For a probability-measure-valued neutral Fleming-Viot process with Lévy mutation and resampling mechanism associated to a general Λ-coalescent with multiple collisions, we prove the instantaneous propagation of supports."
    },
    {
      title: "On optimality of barrier dividend control under endogenous regime switching with application to Chapter 11 bankruptcy",
      authors: "Wenyuan Wang, Xiang Yu, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2021",
      category: "preprint",
      abstract: "Motivated by recent developments in risk management based on the U.S. bankruptcy code, we revisit the De Finetti's optimal dividend problem by incorporating the reorganization process and regulator's intervention documented in Chapter 11 bankruptcy."
    },
    {
      title: "Time-changed spectrally positive Lévy processes started from infinity",
      authors: "Clément Foucart, Pei-Sen Li, Xiaowen Zhou",
      journal: "Stochastic Processes and their Applications",
      year: "2021",
      category: "article",
      abstract: "Consider a spectrally positive Lévy process with log-Laplace exponent Ψ and a positive continuous function R on (0,∞). We investigate the entrance from ∞ of the process obtained by changing time with the inverse of the additive functional."
    },
    {
      title: "A Drawdown Reflected Spectrally Negative Lévy Process",
      authors: "Wenyuan Wang, Xiaowen Zhou",
      journal: "Journal of Applied Probability",
      year: "2021",
      category: "article",
      abstract: "In this paper, we study a spectrally negative Lévy process that is reflected at its drawdown level whenever a drawdown time from the running supremum arrives. Using an excursion-theoretical approach, we find the Laplace transform of the upper exiting time."
    },
    {
      title: "On the explosion of a class of continuous-state nonlinear branching processes",
      authors: "Li Bo, Xiaowen Zhou",
      journal: "Electronic Journal of Probability",
      year: "2021",
      category: "article",
      abstract: "In this paper, we consider a class of generalized continuous-state branching processes obtained by Lamperti type time changes of spectrally positive Lévy processes."
    },
    {
      title: "Boundary behaviors for a class of continuous-state nonlinear branching processes in critical cases",
      authors: "Shaojuan Ma, Xu Yang, Xiaowen Zhou",
      journal: "Bernoulli",
      year: "2021",
      category: "article",
      abstract: "Using Foster-Lyapunov techniques we establish new conditions on non-extinction, non-explosion, coming down from infinity and staying infinite for the general continuous-state nonlinear branching processes."
    },
    {
      title: "On the boundary classification of Λ-Wright-Fisher processes with frequency-dependent selection",
      authors: "Clément Foucart, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2020",
      category: "preprint",
      abstract: "We construct extensions of the pure-jump Λ-Wright-Fisher processes with frequency-dependent selection beyond their first passage time at the boundary 1."
    },
    {
      title: "Draw-down Parisian ruin for spectrally negative Lévy processes",
      authors: "Wenyuan Wang, Xiaowen Zhou",
      journal: "Advances in Applied Probability",
      year: "2020",
      category: "article",
      abstract: "Draw-down time for a stochastic process is the first passage time of a draw-down level that depends on the previous maximum of the process. We study the draw-down-related Parisian ruin problem for spectrally negative Lévy risk processes."
    },
    {
      title: "A Wiener-Hopf factorization related potential measure for spectrally negative Lévy process",
      authors: "Man Chen, Xianyuan Wu, Xiaowen Zhou",
      journal: "Journal of Theoretical Probability",
      year: "2020",
      category: "article",
      abstract: "For spectrally negative Lévy process (SNLP), we find an expression, in terms of scale functions, for a potential measure involving the maximum and the last time of reaching the maximum up to a draw-down time."
    },
    {
      title: "On the explosion of the number of fragments in the simple exchangeable fragmentation-coalescence processes",
      authors: "Clément Foucart, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2020",
      category: "preprint",
      abstract: "We consider the exchangeable fragmentation-coagulation (EFC) processes, where the coagulations are multiple and not simultaneous, as in a Λ-coalescent."
    },
    {
      title: "Generalized stepping stone model with Ξ-resampling mechanism",
      authors: "Huili Liu, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2020",
      category: "preprint",
      abstract: "In this paper we formulate a generalized stepping stone model with Ξ-resampling mechanism to describe the evolution of relative frequencies for different types of alleles in a population with migration between two colonies."
    },
    {
      title: "On the entrance at infinity of Feller processes with no negative jumps",
      authors: "Clément Foucart, Pei-Sen Li, Xiaowen Zhou",
      journal: "Electronic Communications in Probability",
      year: "2020",
      category: "article",
      abstract: "Consider a non-explosive positive Feller process with no negative jumps. It is shown that when infinity is an entrance boundary, the process admits a Feller extension on the compactified state space [0,∞]."
    },
    {
      title: "Parisian excursion with capital injection for draw-down reflected Lévy insurance risk process",
      authors: "Budhi Arta Surya, Wenyuan Wang, Xianghua Zhao, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2020",
      category: "preprint",
      abstract: "This paper discusses Parisian ruin problem with capital injection for Lévy insurance risk process. Capital injection takes place at the draw-down time of the surplus process."
    },
    {
      title: "Local Times for Spectrally Negative Lévy Processes",
      authors: "Li Bo, Xiaowen Zhou",
      journal: "Journal of Theoretical Probability",
      year: "2020",
      category: "article",
      abstract: "For spectrally negative Lévy processes, we identify joint Laplace transforms involving local times evaluated at either the first passage times, or independent exponential times, or inverse local times."
    },
    {
      title: "How long does the surplus stay close to its historical high?",
      authors: "Li Bo, Yun Hua, Xiaowen Zhou",
      journal: "Insurance: Mathematics and Economics",
      year: "2020",
      category: "article",
      abstract: "In this paper we find the Laplace transforms of the weighted occupation times for a spectrally negative Lévy surplus process to spend below its running maximum up to the first exit times."
    },
    {
      title: "On the extinction-extinguishing dichotomy for a stochastic Lotka-Volterra type population dynamical system",
      authors: "Yanxia Ren, Jie Xiong, Xu Yang, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2019",
      category: "preprint",
      abstract: "We study a two-dimensional process (X,Y) arising as the unique nonnegative solution to a pair of stochastic differential equations driven by independent Brownian motions and compensated spectrally positive Lévy random measures."
    },
    {
      title: "Potential Densities for Taxed Spectrally Negative Lévy Risk Processes",
      authors: "Wenyuan Wang, Xiaowen Zhou",
      journal: "Journal of Applied Probability",
      year: "2019",
      category: "article",
      abstract: "This paper revisits the spectrally negative Lévy risk process embedded with the general tax structure. A joint Laplace transform is found concerning the first down-crossing time below level 0."
    },
    {
      title: "Draw-down Parisian ruin for spectrally negative Lévy process",
      authors: "Wenyuan Wang, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2019",
      category: "preprint",
      abstract: "In this paper we study the draw-down related Parisian ruin problem for spectrally negative Lévy risk processes. We introduce the draw-down Parisian ruin time and solve the corresponding two-sided exit time via excursion theory."
    },
    {
      title: "The discrete approximation of a class of continuous-state nonlinear branching processes",
      authors: "Pei-Sen Li, Xu Yang, Xiaowen Zhou",
      journal: "Bernoulli",
      year: "2019",
      category: "article",
      abstract: "In this paper we consider a general continuous-state nonlinear branching process which can be identified as a nonnegative solution to a nonlinear version of the stochastic differential equation for continuous-state branching process."
    },
    {
      title: "Time-changed spectrally positive Lévy processes starting from infinity",
      authors: "Clément Foucart, Pei-Sen Li, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2019",
      category: "preprint",
      abstract: "Consider a spectrally positive Lévy process Z with log-Laplace exponent Ψ and a positive continuous function R on (0,∞). We investigate the entrance from ∞ of the process obtained by changing time in Z."
    },
    {
      title: "A draw-down reflected spectrally negative Lévy process",
      authors: "Wenyuan Wang, Xiaowen Zhou",
      journal: "Cornell University",
      year: "2018",
      category: "preprint",
      abstract: "In this paper we study a spectrally negative Lévy process that is reflected at its draw-down level whenever a draw-down time from the running supremum arrives."
    },
    {
      title: "Integral functionals for spectrally positive Lévy processes",
      authors: "Pei-Sen Li, Xiaowen Zhou",
      journal: "Journal of Theoretical Probability",
      year: "2018",
      category: "article",
      abstract: "We find necessary and sufficient conditions for almost sure finiteness of integral functionals of spectrally positive Lévy processes under conditional probabilities."
    },
    {
      title: "General drawdown-based de Finetti optimization for spectrally negative Lévy risk processes",
      authors: "Wenyuan Wang, Xiaowen Zhou",
      journal: "Insurance: Mathematics and Economics",
      year: "2018",
      category: "article",
      abstract: "For spectrally negative Lévy risk processes we consider a general version of de Finetti's optimal dividend problem in which the ruin time is replaced with a general drawdown time."
    },
    {
      title: "A general continuous-state nonlinear branching process",
      authors: "Pei-Sen Li, Xu Yang, Xiaowen Zhou",
      journal: "Annals of Applied Probability",
      year: "2017",
      category: "article",
      abstract: "In this paper we consider a general continuous-state branching process which can be identified as a nonnegative solution to a nonlinear version of the stochastic differential equation for continuous-state branching process."
    },
    {
      title: "On taxed spectrally negative Lévy processes with draw-down stopping",
      authors: "Florin Avram, Linh Vu, Xiaowen Zhou",
      journal: "Advances in Applied Probability",
      year: "2017",
      category: "article",
      abstract: "In this paper we consider a spectrally negative Lévy risk model with tax. With the ruin time replaced by a draw-down time with a linear draw-down function and for a constant tax rate, we find expressions for the present values of tax payments."
    },
    {
      title: "Local times for spectrally negative Lévy processes",
      authors: "Li Bo, Xiaowen Zhou",
      journal: "Stochastic Processes and their Applications",
      year: "2017",
      category: "article",
      abstract: "For spectrally negative Lévy processes, we identify joint Laplace transforms involving local times evaluated at either the first passage times, or independent exponential times, or inverse local times."
    },
    {
      title: "Exit problems for general draw-down times of spectrally negative Lévy processes",
      authors: "Li Bo, Linh Vu, Xiaowen Zhou",
      journal: "Bernoulli",
      year: "2017",
      category: "article",
      abstract: "For spectrally negative Lévy processes, we prove several fluctuation results involving a general draw-down time, which is a downward exit time from a dynamic level that depends on the running maximum of the process."
    },
    {
      title: "n-Dimensional Laplace Transforms of Occupation Times for Spectrally Negative Lévy Processes",
      authors: "Xuebing Kuang, Xiaowen Zhou",
      journal: "Journal of Applied Probability",
      year: "2017",
      category: "article",
      abstract: "Using a Poisson approach, we find Laplace transforms of joint occupation times over n disjoint intervals for spectrally negative Lévy processes."
    },
    {
      title: "Pathwise uniqueness for an SPDE with Hölder continuous coefficient driven by α-stable noise",
      authors: "Xu Yang, Xiaowen Zhou",
      journal: "Stochastic Processes and their Applications",
      year: "2017",
      category: "article",
      abstract: "In this paper we study the pathwise uniqueness of nonnegative solution to a stochastic partial differential equation with Hölder continuous noise coefficient driven by α-stable noise."
    },
    {
      title: "On fluctuation theory for spectrally negative Lévy processes with Parisian reflection below",
      authors: "Florin Avram, Xiaowen Zhou",
      journal: "Journal of Applied Probability",
      year: "2016",
      category: "article",
      abstract: "We consider a spectrally negative Lévy process with Parisian reflection below and establish several fluctuation identities."
    },
    {
      title: "On the last exit times for spectrally negative Lévy processes",
      authors: "Yingqiu Li, Chuancun Yin, Xiaowen Zhou",
      journal: "Statistics & Probability Letters",
      year: "2016",
      category: "article",
      abstract: "Using a new approach, for spectrally negative Lévy processes we find joint Laplace transforms involving the last exit time, the value of the process at the last exit time and the associated occupation time."
    },
    {
      title: "A distribution-function-valued SPDE and its applications",
      authors: "Li Wang, Xu Yang, Xiaowen Zhou",
      journal: "Annals of Probability",
      year: "2016",
      category: "article",
      abstract: "In this paper we further study the stochastic partial differential equation first proposed by Xiong (2013). Under localized conditions on the coefficients we show that the solution is in fact distribution-function-valued."
    },
    {
      title: "Some support properties for a class of Λ-Fleming–Viot processes",
      authors: "Huili Liu, Xiaowen Zhou",
      journal: "Annals of Applied Probability",
      year: "2015",
      category: "article",
      abstract: "For a class of Λ-Fleming-Viot processes with underlying Brownian motion whose associated Λ-coalescents come down from infinity, we prove a one-sided modulus of continuity result for their ancestry processes."
    },
    {
      title: "Two-sided discounted potential measures for spectrally negative Lévy processes",
      authors: "Yingqiu Li, Xiaowen Zhou, Na Zhu",
      journal: "Journal of Applied Probability",
      year: "2015",
      category: "article",
      abstract: "For spectrally negative Lévy processes, we find expressions of potential measures that are discounted by their joint occupation times over semi-infinite intervals."
    },
    {
      title: "An Insurance Risk Model with Parisian Implementation Delays",
      authors: "David Landriault, Jean-François Renaud, Xiaowen Zhou",
      journal: "ASTIN Bulletin",
      year: "2014",
      category: "article",
      abstract: "Inspired by Parisian barrier options in finance, a new definition of the event 'ruin' for an insurance risk model is considered where the surplus process is allowed to spend time under a pre-specified default level before ruin is recognized."
    },
    {
      title: "Liquidation risk in the presence of Chapters 7 and 11 of the US bankruptcy code",
      authors: "Bin Li, Qihe Tang, Lihe Wang, Xiaowen Zhou",
      journal: "Finance and Stochastics",
      year: "2014",
      category: "article",
      abstract: "We aim at quantitatively measuring the liquidation risk of a firm subject to both Chapters 7 and 11 of the US bankruptcy code. The firm value is modeled by a general time-homogeneous diffusion process."
    },
    {
      title: "The reversibility and an SPDE for the generalized Fleming-Viot Processes with mutation",
      authors: "Zenghu Li, Huili Liu, Jie Xiong, Xiaowen Zhou",
      journal: "Annals of Probability",
      year: "2012",
      category: "article",
      abstract: "The (Ξ, A)-Fleming-Viot process with mutation is a probability-measure-valued process whose moment dual is similar to that of the classical Fleming-Viot process except that the Kingman's coalescent is replaced by the Ξ-coalescent."
    },
    {
      title: "General tax Structures and the Lévy Insurance Risk Model",
      authors: "Andreas E. Kyprianou, Xiaowen Zhou",
      journal: "Annals of Applied Probability",
      year: "2009",
      category: "article",
      abstract: "In the spirit of Albrecher and Hipp (2007), we consider a Lévy insurance risk model with tax payments of a more general structure. In terms of scale functions, we establish three fundamental identities of interest."
    },
    {
      title: "An Integral Test on Time-Dependent Local Extinction for Super-coalescing Brownian Motion with Lebesgue Initial Measure",
      authors: "Hui He, Zenghu Li, Xiaowen Zhou",
      journal: "Journal of Theoretical Probability",
      year: "2009",
      category: "article",
      abstract: "This paper concerns the almost sure time dependent local extinction behavior for super-coalescing Brownian motion with (1+β)-stable branching and Lebesgue initial measure on ℝ. We first give a representation using excursions of a continuous state branching process and Arratia's coalescing Brownian flow."
    },
    {
        title: "Distribution and propagation properties of superprocesses with general branching mechanisms",
        authors: "Zenghu Li, Xiaowen Zhou",
        journal: "Science China Mathematics",
        year: "2008",
        category: "article",
        abstract: "A theorem of Evans and Perkins (1991) on the absolute continuity of distributions of Dawson-Watanabe superprocesses is extended to general branching mechanisms. This result is then used to establish the propagation properties of the superprocesses."
    },
    {
        title: "A zero-one law of almost sure local extinction for super-Brownian motion",
        authors: "Xiaowen Zhou",
        journal: "Journal of Applied Probability",
        year: "2008",
        category: "article",
        abstract: "This paper considers generalized almost sure local extinction for the d-dimensional (1+β)-super-Brownian motion starting from Lebesgue measure. For any t≥0 write for a closed ball with radius g(t). We establish a zero-one law for the probability of the event that the mass in the ball vanishes eventually."
    },
    {
        title: "Joint stationary moments of a two-island diffusion model of population subdivision",
        authors: "Amir Kermany, Xiaowen Zhou, Donal A Hickey",
        journal: "Theoretical Population Biology",
        year: "2008",
        category: "article",
        abstract: "An expression for joint stationary moments of a diffusion approximation to a generalized Wright-Fisher model, corresponding to two finite populations with migration and mutation, is derived. This gives a complete description of the stationary distribution of allele frequencies."
    },
    {
        title: "Exit Problems for Spectrally Negative Lévy Processes Reflected at Either the Supremum or the Infimum",
        authors: "Xiaowen Zhou",
        journal: "Journal of Applied Probability",
        year: "2007",
        category: "article",
        abstract: "For a spectrally negative Lévy process X on the real line, let S denote its supremum process and let I denote its infimum process. We study exit problems for the reflected processes Ŷ := S - X and Y := X - I."
    },
    {
        title: "Distribution of the Present Value of Dividend Payments in a Lévy Risk Model",
        authors: "Jean-François Renaud, Xiaowen Zhou",
        journal: "Insurance: Mathematics and Economics",
        year: "2007",
        category: "article",
        abstract: "We show how fluctuation identities for Lévy processes with no positive jumps yield the distribution of the present value of dividends paid until ruin in a Lévy insurance risk model with a dividend barrier."
    },
    {
        title: "Superprocesses with Coalescing Brownian Spatial Motion as Large-Scale Limits",
        authors: "Donald A. Dawson, Zheng Li, Xiaowen Zhou",
        journal: "Journal of Statistical Physics",
        year: "2004",
        category: "article",
        abstract: "A superprocess with coalescing spatial motion is constructed in terms of one-dimensional excursions. Based on this construction, it is proved that the superprocess is purely atomic and arises as scaling limit of a special form of the superprocess with dependent spatial motion."
    },
    {
        title: "Stepping-Stone Model with Circular Brownian Migration",
        authors: "Xiaowen Zhou",
        journal: "Annals of Applied Probability",
        year: "2005",
        category: "article",
        abstract: "We consider a stepping-stone model on a circle with circular Brownian migration. We first point out a connection between Arratia flow and the marginal distribution of this model. We then give a new representation for the stepping-stone model using Arratia flow and circular coalescing Brownian motion."
    },
    {
        title: "On a Classical Risk Model with a Constant Dividend Barrier",
        authors: "Xiaowen Zhou",
        journal: "Insurance: Mathematics and Economics",
        year: "2005",
        category: "article",
        abstract: "We consider a risk model with a constant dividend barrier. An explicit expression is obtained for the joint distribution of the surplus immediately prior to ruin and the deficit at ruin, discounted by the ruin time."
    },
    {
        title: "A superprocess involving both branching and coalescing",
        authors: "Xiaowen Zhou",
        journal: "Annals of Probability",
        year: "2005",
        category: "article",
        abstract: "We consider a superprocess with coalescing Brownian spatial motion. We first prove a dual relationship between two systems of coalescing Brownian motions. In consequence we can express the Laplace functionals for the superprocess in terms of coalescing Brownian motions."
    },
    {
        title: "On the Duality between Coalescing Brownian Motions",
        authors: "Jie Xiong, Xiaowen Zhou",
        journal: "Annals of Probability",
        year: "2005",
        category: "article",
        abstract: "A duality formula is found for coalescing Brownian motions on the real line. It is shown that the joint distribution of a coalescing Brownian motion can be determined by another coalescing Brownian motion running backward."
    },
    {
        title: "Some fluctuation identities for Lévy processes with jumps of the same sign",
        authors: "Xiaowen Zhou",
        journal: "Statistics & Probability Letters",
        year: "2004",
        category: "article",
        abstract: "We consider a two-sided exit problem for a Lévy process with no positive jumps. The Laplace transform of the time when the process first exits an interval from above is obtained."
    },
    {
        title: "Balls-in-boxes duality for coalescing random walks and coalescing Brownian motions",
        authors: "Steven Evans, Xiaowen Zhou",
        journal: "Electronic Journal of Probability",
        year: "2004",
        category: "article",
        abstract: "We present a duality relation between two systems of coalescing random walks and an analogous duality relation between two systems of coalescing Brownian motions."
    },
    {
        title: "When does surplus reach a certain level before ruin?",
        authors: "Xiaowen Zhou",
        journal: "Insurance: Mathematics and Economics",
        year: "2004",
        category: "article",
        abstract: "Laplace transform of the first passage time across a given level before ruin is investigated for the surplus process in a perturbed risk model."
    },
    {
        title: "Superprocess over a stochastic flow with superprocess catalyst",
        authors: "Jie Xiong, Xiaowen Zhou",
        journal: "Journal of Theoretical Probability",
        year: "2004",
        category: "article",
        abstract: "In this paper, we study the catalytic superprocesses under a stochastic flow where the catalyst itself is a superprocess under the same flow."
    },
    {
        title: "Clustering Behavior of a Continuous-Sites Stepping-Stone Model with Brownian Migration",
        authors: "Xiaowen Zhou",
        journal: "Annals of Applied Probability",
        year: "2003",
        category: "article",
        abstract: "Clustering behavior is studied for a continuous-sites stepping-stone model with Brownian migration. It is shown that the site space is divided into disjoint intervals where only one type of individuals appear in each interval."
    },
    {
        title: "Different Trees Have Distinct Phylogenetic Invariants",
        authors: "Steven Evans, Xiaowen Zhou",
        journal: "Journal of Computational Biology",
        year: "2001",
        category: "article",
        abstract: "The method of invariants is an approach to the problem of reconstructing the phylogenetic tree of a collection of m taxa using nucleotide sequence data."
    },
    {
        title: "Continuum-sites stepping-stone models, coalescing exchangeable partitions and random trees",
        authors: "Peter Donnelly, Steven Evans, Klaus Fleischmann, Xiaowen Zhou",
        journal: "Annals of Probability",
        year: "2000",
        category: "article",
        abstract: "Analogues of stepping-stone models are considered where the site-space is continuous, the migration process is a general Markov process, and the type-space is infinite."
    },
    {
        title: "Of Exchangeable Sequences with Identically Distributed Partial Sums",
        authors: "Steven Evans, Xiaowen Zhou",
        journal: "Statistics & Probability Letters",
        year: "1999",
        category: "article",
        abstract: "Consider two exchangeable sequences with the property that their partial sums have the same distribution for all n. We give an example that shows the sequences need not have the same joint distributions."
    },
    {
        title: "Constructing and Counting Phylogenetic Invariants",
        authors: "Steven Evans, Xiaowen Zhou",
        journal: "Journal of Computational Biology",
        year: "1998",
        category: "article",
        abstract: "The method of invariants is an approach to the problem of reconstructing the phylogenetic tree of a collection of m taxa using nucleotide sequence data."
    },
    {
        title: "A superprocess with coalescing Brownian spatial motion",
        authors: "Xiaowen Zhou",
        journal: "PhD Thesis",
        year: "1997",
        category: "chapter",
        abstract: "This thesis develops the theory of superprocesses with coalescing Brownian spatial motion."
    }
  ];

    const categories = [
    { id: 'all', label: 'All Publications', count: publications.length },
    { id: 'article', label: 'Articles', count: publications.filter(p => p.category === 'article').length },
    { id: 'chapter', label: 'Chapters', count: publications.filter(p => p.category === 'chapter').length },
    { id: 'preprint', label: 'Preprints', count: publications.filter(p => p.category === 'preprint').length }
  ];

  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(p => p.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPublications.length / publicationsPerPage);
  const startIndex = (currentPage - 1) * publicationsPerPage;
  const endIndex = startIndex + publicationsPerPage;
  const currentPublications = filteredPublications.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleReadPaper = (publication) => {
    if (publication.url) {
      window.open(publication.url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Paper "${publication.title}" is not available online yet.`);
    }
  };

  const handleCite = (publication) => {
    setShowCitation(showCitation === publication.id ? null : publication.id);
  };

  const generateCitation = (pub, style = 'apa') => {
    const year = pub.year;
    const authors = pub.authors;
    const title = pub.title;
    const journal = pub.journal;
    
    switch (style) {
      case 'apa':
        return `${authors} (${year}). ${title}. ${journal}.`;
      case 'mla':
        return `${authors}. "${title}." ${journal}, ${year}.`;
      case 'chicago':
        return `${authors}. "${title}." ${journal} (${year}).`;
      case 'bibtex':
        const key = `${authors.split(',')[0].split(' ').pop().toLowerCase()}${year}`;
        return `@article{${key},
  title={${title}},
  author={${authors}},
  journal={${journal}},
  year={${year}}
}`;
      default:
        return `${authors} (${year}). ${title}. ${journal}.`;
    }
  };

  const copyCitation = (citation) => {
    navigator.clipboard.writeText(citation).then(() => {
      alert('Citation copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy citation. Please select and copy manually.');
    });
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'article':
        return 'bg-blue-100 text-blue-700';
      case 'chapter':
        return 'bg-green-100 text-green-700';
      case 'preprint':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category) => {
    switch(category) {
      case 'article':
        return 'Article';
      case 'chapter':
        return 'Chapter';
      case 'preprint':
        return 'Preprint';
      default:
        return 'Publication';
    }
  };

  return (
    <section id="publications" className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Publications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My research contributes to the advancement of statistics, with a focus on Stochastic processes and applications.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">88</div>
            <div className="text-slate-600 font-medium">Total Publications</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">1,817</div>
            <div className="text-slate-600 font-medium">Citations</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">11k</div>
            <div className="text-slate-600 font-medium">Reads</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">50</div>
            <div className="text-slate-600 font-medium">Collaborators</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-blue-50 shadow-sm border border-slate-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Publication Count Info */}
        <div className="text-center mb-6">
          <p className="text-slate-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredPublications.length)} of {filteredPublications.length} publications
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-8">
          {currentPublications.map((pub, index) => (
            <div key={startIndex + index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 mb-2">
                    <span className="font-medium">{pub.authors}</span>
                  </p>
                  <p className="text-red-600 font-medium mb-3">
                    {pub.journal} ({pub.year})
                  </p>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(pub.category)}`}>
                    {getCategoryLabel(pub.category)}
                  </span>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                {pub.abstract}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleReadPaper(pub)}
                    disabled={!pub.url}
                    className={`font-medium text-sm transition-colors ${
                      pub.url 
                        ? 'text-red-600 hover:text-red-800 hover:underline cursor-pointer' 
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    📄 Read Paper
                  </button>
                  <button 
                    onClick={() => handleCite(pub)}
                    className="text-slate-500 hover:text-slate-700 font-medium text-sm hover:underline transition-colors"
                  >
                    📝 Cite
                  </button>
                </div>
                <div className="text-sm text-slate-400">
                  Published {pub.year}
                </div>
              </div>

              {/* Citation Panel */}
              {showCitation === pub.id && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border-t border-gray-200">
                  <h4 className="font-semibold text-slate-800 mb-3">Citation Formats</h4>
                  
                  {/* Citation Style Tabs */}
                  <div className="space-y-3">
                    {['apa', 'mla', 'chicago', 'bibtex'].map(style => (
                      <div key={style} className="bg-white rounded-lg p-3 border">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-slate-700 uppercase text-xs">
                            {style === 'bibtex' ? 'BibTeX' : style.toUpperCase()}
                          </span>
                          <button
                            onClick={() => copyCitation(generateCitation(pub, style))}
                            className="text-xs text-red-600 hover:text-red-800 font-medium hover:underline"
                          >
                            Copy
                          </button>
                        </div>
                        <div className="text-sm text-slate-600 font-mono bg-gray-50 p-2 rounded border whitespace-pre-wrap">
                          {generateCitation(pub, style)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setShowCitation(null)}
                    className="mt-3 text-sm text-slate-500 hover:text-slate-700"
                  >
                    Close Citations
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-16">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-slate-600 hover:bg-red-50 border border-slate-200 hover:border-red-200'
              }`}
            >
              ← Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-red-50 border border-slate-200 hover:border-red-200'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-slate-600 hover:bg-red-50 border border-slate-200 hover:border-red-200'
              }`}
            >
              Next →
            </button>
          </div>
        )}

        {/* Research Interests */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Stochastic Modeling', 'Risk Modeling', 'Stochastic Processes', 'Probability Theory', 
              'Option Pricing', 'Mathematical Finance'].map((interest, index) => (
              <span key={index} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;