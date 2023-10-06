---
title: 大龙网面试准备
sidebarDepth: 4
---

# 大龙网面试准备

## 面试要求

- WebApi
- .Net Core
- EF Core
- MySQL/SQL Server、存储过程、SQL设计与优化
- 分布式
- 多线程
- 缓存
- 系统安全
- 电子商务系统设计

## 面试准备

### Asp.Net Core WebAPI

#### Asp.Net Core的启动

构建WebApplication Host应用承载核心；注入依赖服务；注册中间件；启动Host

#### 筛选器

- 授权筛选器
- 资源筛选器
- 操作筛选器 ActionFilter
    - 在操作方法之前或之后运行
    - 可以更改传递到操作(Action)中的参数
    - 可以更改从Action返回的结果
- 终结点筛选器（新加的）
    - 同上
    - 增加：可以在Action和基于路由处理程序的终结点上调用
- 异常筛选器
- 结果筛选器

#### 全局异常处理

##### 异常筛选器

异常筛选器拦截范围是Controller，可以将异常拦截处理后标记为异常已处理，这样不会再向上抛出到异常中间件

可以利用自定义异常，然后再通过异常筛选器捕获这个自定义异常，进行重定向到特定的展示页面

##### 异常中间件

全局异常处理，最后的防线

#### 自定义中间件

- `Func<RequestDelegate,RequestDelegate>`
- `Func<HttpContext,RequestDelegate,Task>`
- `Func<HttpContext,Func<Task>,Task>`
- IMiddleware接口，通过IMiddleware接口定义的中间件需要IOC注入，由IOC管理生命周期

#### 配置

命令行 > 非前缀环境变量 > 用户机密 > `appsettings.{Environment}.json` > `appsettings.json` > ASPNETCORE_前缀环境变量 > DOTNET_前缀环境变量

配置文件绑定：
- 通过`Bind`
- 通过`Get<T>`
- 通过选项接口`IOptions<T>`、`IOptionsMonitor<T>`

使用强类型绑定配置文件是，传递的参数都是Configuration的Section


##### `Bind`和`Get<T>`

通过Bind绑定时，需要先有一个选项类的实例
```csharp
var options = new Options();
Configuration.GetSection("SectionName").Bind(options);
```
通过`Get<T>`绑定时，会直接返回T类型的选项类实例
```csharp
var options = Configuration.GetSection("SectionName").Get<Options>();
```

##### `IOptions<T>`和`IOptionsMonitor<T>`

两者都注册为单例，可以注入到任何服务生命周期

相比`IOptions<T>`，`IOptionsMonitor<T>`支持更改通知、命名选项、可重载配置

```csharp
// 注册配置，后续可以通过选项接口获取
builder.Services.Configure<Options>(
    builder.Configuration.GetSection("Options"));
```

使用时通过构造函数注入使用
```csharp
public ctor(IOptions<Options> options)
{
    // 获取到强类型配置options
}

```


#### 日志

`ILogger<T>` 

Providers日志提供程序

##### 日志级别

Trace、Debug、Information、Warning、Error、Critical、None

使用`app.UseHttpLogging()`可以启用HTTP日志记录（会影响性能）

`builder.Services.AddHttpLogging(options=>{})`可以配置要记录的值

使用`app.UseW3CLogging()`可以以W3C标准的方式记录日志（会影响性能）

#### 路由

`app.UseRouting()`负责匹配路由

`app.UseControllers()`负责加载匹配到路由后的委托

在UseRouting和UseControllers的中间Endpoints为null

#### 异常

`app.UseExceptionHandler()`异常处理中间件，对未经处理的异常进行捕获

`app.UseStatusCodePages()`中间件可对不同的状态码返回不同的响应（应在静态文件中间件和Endpoint之间使用，在生产中几乎不用，没有意义）

#### HttpClient

`builder.Services.AddHttpClient()`

使用IHttpClientFactory创建HttpClient

#### 身份认证与授权

使用`IAuthorizationPolicyProvider`接口实现自定义授权策略

#### 全球化

`IStringLocalizer<T>`配合Resx资源文件

#### 缓存

- 缓存雪崩：宕机或者同时过期
- 缓存击穿：热点数据过期
- 缓存穿透：数据不在缓存也不在数据库（非法数据）导致每次都会请求数据库

保持缓存一致性：先更新数据库，再删除缓存，删除缓存时引入重试机制

响应缓存`app.UseResponseCaching()`中间件，必须在Cors之前调用

对象池ObjectPool，DI中注入（Singleton）`ObjectPoolProvider<T>`并将其用作工厂

### EF Core

#### 高性能

- 使用Select只投影需要的属性
- 限制大小，高效分页，避免笛卡尔爆炸
- 尽量不用延迟加载
- 使用流式处理（IEnumerable而不是ToList）
- AsNoTracking()不追踪
- 使用原生SQL
- 异步
- 批量更新（最后调用SaveChangeAsync）

#### 事务

默认情况下SaveChange是一个事务，如果不满足需求可以使用BeginTransaction手动开启事务，最后通过Commit提交事务

#### 泛型仓储

```csharp

public virtual DbSet<TEntity> Table

public ctor(DbContext context)
{
    Table = context.Set<TEntity>();
}

```

#### Entity状态

| EntityState | 是否跟踪 | SaveChange操作 | 
|-- |--| -- |
| Detached | 未跟踪 |  |
| Added | 跟踪 | 插入 |
| Unchanged | 跟踪 | 无 |
| Modified | 跟踪 | 更新 |
| Deleted | 跟踪 | 删除 |

Attach实体将设为Unchanged状态

Update实体将设为Modified状态

可以手动更改实体的状态
```csharp
// 手动将状态变更为已修改
context.Entry(entity).State = EntityState.Modified
```


### 数据库

#### 执行流程

- 连接器
- 查询缓存
- 解析SQL
    - 解析器
- 执行SQL
    - 预处理器
    - 优化器
    - 执行器

#### 索引

##### 索引失效

- 使用左或者左右模糊匹配时索引会失效
- 查询条件中对索引列做了计算、函数、类型转换操作，会导致索引失效
- 联合索引要能正确遵循最左匹配原则，也就是按照最左优先的方式进行索引匹配，否则会导致索引失效
- 在WHERE子句中，如果在OR前的条件列是索引列，而在OR后的条件列不是索引列，那么索引会失效
- 为了更好的利用索引，索引列要设置为NOT NULL约束

#### 死锁

死锁的四个必要条件：互斥、占有且等待、不可强占用、循环等待

死锁的避免办法：设置事务等待锁的超时时间、开启主动死锁检测

#### 并发事务问题
- 脏读：一个事务读到了另一个事务还没有提交的数据
- 不可重复读：一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读
- 幻读：一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”。

#### 事务隔离级别及会出现的问题

| 隔离级别 | 脏读 | 不可重复读 | 幻读 |
| -- | -- | -- | -- |
| 读未提交 | ✓ | ✓ | ✓ |
| 读已提交 | ✕ | ✓ | ✓ |
| 可重复读（默认） | ✕ | ✕ | ✓ |
| 序列换 | ✕ | ✕ | ✕ |

查看事务隔离级别
```sql
SELECT @@TRANSACTION_ISOLATION;
```

设置事务隔离级别
```sql
SET { SESSION | GLOBAL } TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE }
```
事务隔离级别越高，数据越安全，但是性能越低


### Redis

#### Redis的基础键值对数据类型

String（字符串）、List（列表）、Hash（哈希表）、Set（集合）、Zset（有序集合）