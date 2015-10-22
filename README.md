# Require-Seajs

   随着现在web应用越来越复杂，所需的页面越来越多，js代码也随之大量增加，而传统的<script src="" ></script>js加载方法会

影响性能和后期的维护成本， 所以模块化js是大势所趋。

   模块化js将业务逻辑相关的代码组织到一个页面，一个页面即一个模块,这样大大降低了维护的成本，同时模块化加载是按需，异步

加载，提高了性能防止页面假死的状态。

   模块化js常用的工具Requirejs和Seajs, Requirejs是按照AMD的规范来定义模块的，Seajs是按照CMD的规范来定义模块的.
   
   Requirejs 与 Seajs 的最大区别：执行模块的机制不同
   
   RequireJS对模块的态度是预执行，也就是所依赖的模块都是要先执行

   SeaJS对模块的态度是懒执行，只有真正需要模块的时候才执行
   
   相关资料参考 http://blog.chinaunix.net/uid-26672038-id-4112229.html
   
