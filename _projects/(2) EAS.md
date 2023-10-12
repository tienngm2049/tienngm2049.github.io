<!-- ---
name: Using Euler-Arc Splines to model TDCRs
tools: [Modeling, TDCR]
image: https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/9560720/9560666/9561700/rao1-p7-rao-large.gif
description: We propose the use of EulerArcSplines to represent these flexible robots
---

# Euler Arc Splines for TDCRs

#### Quick context setting :
A previous follow-up and gentle introduction to curve discretization using PCCA can be found [here](https://priyankarao257.github.io/blog/intro-to-pcca#). Might be a good read if you haven't already arrived here through the rabbit hole buttons.
A more formal introduction is provided in a post written for the [OpenCR](https://www.cs.toronto.edu/~jbk/opencontinuumrobotics/) project. 
{% include elements/button.html link="https://www.cs.toronto.edu/~jbk/opencontinuumrobotics/research/2023/01/10/euler-curves.html" text="Link to OpenCR post" %}



## The Why

<p class="text-center">
<img src="https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/9560720/9560666/9561700/rao1-p7-rao-large.gif" width="200" height="200" />
</p>

We already know the constant curvature representation is famous in the soft robotics community because it
- [x] accurately represents a free moving continuum backbone 
- [x] can be used to propose forward kinematic models to predict robot shape
- [x] is computationally inexpensive

**However** when there is variation in curvature of the robot, as seen above, we can no longer assume that the robot is bending as a constant-curvature arc.

In simple words, the proposed representation using EAS can be used to model this variation in curvature due to tip loads, while maintaining the advantages of the CC model. We showed that it can

- [x] accurately represent a continuum backbone when deforming freely **AND** when deforming under tip loads
- [x] be used to propose forward kinematic models to predict robot shape
- [x] be computationally inexpensive


<p class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kavIG50nVb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

For more details, there's always some good old-fashioned paper reading : 
<p class="text-center">
{% include elements/button.html link="https://ieeexplore.ieee.org/abstract/document/9561700" text="Link to paper 1 [ICRA, 2021]" %}, 
{% include elements/button.html link="https://ieeexplore.ieee.org/abstract/document/9804779" text="Link to paper 2 [RAL + IROS, 2022]" %}
</p> -->