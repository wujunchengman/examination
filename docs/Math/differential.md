---
title: 微分
sidebar: 'auto'
---

# 微分

## 一元函数微分

定义：设函数$y=f(x)$在点$x_0$的邻域内有定义。若函数的增量
$\Delta y=f(x_0+\Delta x)-f(x_0)$可以表示为
$$\Delta y=A\Delta x+o(\Delta x)$$
其中，$A$ 是与$\Delta x$ 无关的常数，$o(\Delta x)$是比 $\Delta x$ 高阶的无穷小量。则称函数$y=f(x)$在点$x_0$处是可微的，称$A\Delta x$为 函 数 在 点 $x_0$ 处的微分，记为$dy\mid _x= x_0$ ,即
$$dy\mid_{x=x_0}=A\Delta x$$

微分的几何意义是描述函数在某一点的变化率，即函数在该点的导数

### 判定

一元函数可微$\Leftrightarrow$可导 （充分必要条件）

### 计算

$$A=f^{\prime}(x).dy=f^{\prime}(x)dx$$

A为$f(x)$在这一点的导数，微分就等于这一点的导数乘以自变量的改变量





## 二元(多元)函数全微分的定义

定义：如果函数 $z=f\left(x,y\right)$在定义域 $D$ 的内点$\left(x,y\right)$ 处全增量 $\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)$可表示成

$$\Delta z=A\:\Delta x+B\:\Delta y+o(\rho)\:,\quad\rho\:=\sqrt{\left(\Delta x\right)^2+\left(\Delta y\right)^2}$$

其中 $A,B$ 不依赖于$\Delta x,\Delta y$,仅与 $x,y$有关，则称函数 $f(x,y)$在点$(x,y)$可微$,A\Delta x+B\Delta y$ 称为函数 $f(x,y)$ 在点$(x,y)$的全微分，记作

$$\mathrm{d}z=A\Delta x+B\Delta y$$
若函数在域 $D$ 内各点都可微，则称此函数在D 内可微.

### 判定

可微$\Rightarrow$可导（偏导数存在）
可导 不能推出 可微

可微$\Rightarrow$连续

### 计算

$$f_{x}(x,y)=A$$

$$f_{y}(x,y)=B$$

**定理1(必要条件)** 如果函数$z=f(x,y)$在点$(x,y)$处可微，则该函数在点$(x,y)$的偏导数$\frac{\partial z}{\partial x}$与$\frac{\partial z}{\partial y}$必定存在，且

$dz=\frac{\partial z}{\partial x}\Delta x+\frac{\partial z}{\partial y}\Delta y$