---
title: 简答题
---

- 简述批处理系统的工作方式

批处理操作系统的基本工作方式是：用户将作业交给系统操作员，系统操作员在收到作业后，并不立即将作业输入计算机，而是在收到一定数量的用户作业之后，组成一批作业，再把这批作业输入到计算机中。这批作业可在系统中形成一个连续的、自动转接的作业流。系统操作员然后启动操作系统，系统自动、依次执行每个作业。最后由操作员将执行完毕的作业结果交给用户。

- 简述常用的I/O控制技术及其特点

计算机系统中常使用通道以及直接存储器存取（DMA）等I/O技术。通道独立于中央处理器，它代替处理器对外部设备实行统一的管理，从而使处理器和外部设备并行工作，提高多道程序处理的效率。DMA技术由DMA控制器自动控制成块数据在内存和I/O单元之间的传送，提高了处理I/O的效能。缓冲技术是用以缓解处理器处理数据速度与设备传输数据速度不相匹配矛盾的一种数据暂存技术。

- 简述进程的基本属性

进程具有以下两个基本属性：1、进程是一个可拥有资源的独立单位。2、进程同时又是一个可以独立调度和分派的基本单位。

- 简述采用信号量及P、V同步机制来编写并发程序的缺点

采用信号量及P、V同步机制来编写并发程序，对于共享变量及信号量变量的操作将被分散于各个进程中，其缺点如下：1、程序易读性差。2、程序不利于修改和维护。3、正确性难以保证。

- 简述二级目录文件的优缺点

二级目录解决了文件的重名问题，可以实现用户间的文件共享，查找时间也降低了。二级目录的缺点是增加了系统的开销。

- 什么是系统调用？在执行系统调用时，调用程序和被调用程序分别运行在什么状态？在执行一般的函数调用时，调用程序和被调用程序分别运行在什么状态？

所谓系统调用，就是用户在程序中调用操作系统所提供的一些子功能。执行系统调用时，调用程序运行在目态，而被调用程序运行在管态。执行一般的函数调用时，其调用程序和被调用程序都运行在相同的状态：管态或目态

- 什么是最高响应比优先算法？试简述这个进程调度算法的优点并说明原因。

这个算法的实质是每次调度选择最高响应比的进程，每个进程的响应比跟该进程的预计运行时间和等待时间有关。进程的响应比公式为：Rp=（等待时间+预计运行时间）/预计运行时间=1+等待时间/预计运行时间。从响应比的计算公式可以看出，如果等待时间相同，则短进程响应比较高，会优先得到调度；但长进程可以通过等待提升响应比，最终长进程也有机会得到调度。所以，这种调度算法对短进程和长进程都比较公平、合理。

- 死锁检测程序的运行频率较高或较低时，各有什么优、缺点？

频率较高时：优点是可以尽早检测到死锁及其所涉及的进程，并有可能找到引起死锁的那个进程；缺点是增加系统开销。频率较低时：优点是可以降低运行死锁检测程序的开销；缺点是在检测到死锁时可能涉及很多进程，难以找到引起死锁的那个进程

- 什么是覆盖技术？它的主要作用是什么？

覆盖技术可以把程序分为若干个功能上相对独立的程序段，使那些不会同时执行的程序段共享同一块内存区域，来执行的程序段先保存在磁盘上，需要时再调入内存，覆盖前面的程序段。覆盖技术利用相互独立的程序段之间在内存空间的相互覆盖，从逻辑上扩充了内存空间，在某种程度上实现了在小容量内存上运行较大程序的功能

- 空闲分区的分配策略

最先适应算法，算法简单，可以快速做出分配决定；最优适应算法，此算法最节约空间，因为它尽量不分割大的空闲区，缺点是可能会形成很多很小的空闲区域，称作碎片；最坏适应算法，可以避免形成碎片，缺点是分割了大的空闲区后，如果再遇到较大的程序申请内存时，无法满足要求的可能性较大

- 七状态进程模型

创建状态、就绪状态、运行状态、阻塞状态、阻塞挂起状态、就绪挂起状态、结束状态

- 什么是中断？中断和异常的区别是什么？

所谓中断，是指处理器对系统中或系统外发生的异步事件的响应。区别：中断是由外部事件引发的，异常则是由正在执行的指令引发的

- 简述进程最短剩余时间优先调度算法的基本思路以及实现方法

最短剩余时间优先算法是最短进程优先算法的抢占式版本，进程调度时总是选择其剩余运行时间最短的那个进程运行。每当一个新进程到达时，把新进程的预计运行时间与当前进程的剩余运行时间做比较，如果新进程的预计运行时间比较长，则当前进程继续运行，否则换新进程运行

- 简述可变分区中紧缩技术的主要作用及其实现方法

紧缩技术可以集中分散的小空闲区（小碎片），提高内存的利用率。紧缩技术是通过移动内存中的程序，把所有程序占用区集中在内存的一端，从而所有空间碎片在内存的另一端合并成一个连续的大空闲区

- I/O设备的中断控制方式与DMA控制方式的区别是什么

区别1：中断方式是在数据缓冲寄存器满之后发中断要求CPU进行中断处理的，而DMA方式则是等所要求传输的数据块全部传送结束时要求CPU进行中断处理。区别2：中断方式的数据传送是由CPU控制完成的，而DMA方式则是在DMA控制器的控制下完成的

- 从调用程序和被调用程序的运行状态的角度，说明系统调用与一般函数调度的区别

对于一般的函数调用，其调用程序和被调用程序都运行在相同的状态：管态或目态。对于系统调用，调用程序运行在目态，被调用程序运行在系统态（或管态）

- 进程调度的主要功能是什么？轮转调度算法的基本思想是什么？

进程调度的主要功能有：记录系统中所有进程的执行状况；根据一定的调度算法，从就绪队列中选出一个进程，准备把处理器分给它；把处理器分配给该进程；轮转调度算法的基本思想是：将处理器的处理时间划分为大小相等的时间片，就绪队列中的进程轮流运行一个时间片

- 请列出2种解决死锁的常见方法

预防死锁；避免死锁；检测与解除死锁；忽略死锁

- 设备分配有静态分配和动态分配两种方式，请分别简述这两种分配方式的特点

静态分配方式是在用户作业开始执行前，由系统一次分配该作业所需的全部设备、控制器(和通道)，一旦分配以后，这些设备、控制器(和通道)就一直为该作业占用，直到该作业被撤销。静态分配方式比较安全，不会出现死锁，但设备利用率低。动态分配方式是在进程执行过程中根据需要提出申请，由系统按照分配策略进行分配，一旦用完后，便立即释放。动态分配方式有利于提高设备的利用率，但也带来了死锁的风险

- 什么是系统调用？操作系统为什么要提供系统调用？

所谓系统调用，就是用户在程序中调用操作系统所提供的一些子功能。这是一种特殊的过程调用，通常由特殊的机器指令实现。系统调用对用户屏蔽了操作系统的具体动作而只提供有关的功能。系统调用是操作系统提供给编程人员的唯一接口，编程人员利用系统调用，动态请求和释放系统资源，调用系统中已有的系统功能来完成与计算机硬件部分相关的工作以及控制程序的执行速度等

- 什么是抢占式进程调度？先来先服务算法属于抢占式进程调度吗？为什么？

抢占式进程调度：就绪队列中一旦有优先级高于当前运行进程优先级的进程存在时，便立即进行调度，转让处理器。先来先服务调度算法不属于抢占式调度。因为使用该算法，进程按照它们请求处理器的顺序使用处理器，进程执行时，不会中断该进程

- 当死锁发生时，参与死锁的进程至少有多少个？占有资源的进程至少有多少个？这些进程是否都在等待资源？

2个；2个；是

- SPOOLing系统由哪三部分组成？其主要优点是什么？

SPOOLing系统由输入程序模块、输出程序模块、作业调度程序三部分组成。SPOOLing提高了设备利用率，缩短了用户程序执行时间
