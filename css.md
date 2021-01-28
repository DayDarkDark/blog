1. ### flex
  采用flex布局的元素，称为`flex container`,子元素自动称为`flex item`
  常见属性有哪些
  - flex-container
    - flex-direaction 主轴的防线
      - row 默认 横向
      - column 纵向
    - flex-wrap 是否换行
    - justiy-content 主轴的对齐方式
      - space-between 两端对齐
      - space-around 两侧间隔相等
    - align-items 交叉轴的对齐方式
    - align-content 多根轴线的对齐方式
  - flex-item
    - order 排列顺序
    - flex-grow 放大比例 默认为0
    - flex-shrink 缩小比例 1
    - flex
    - align-self
  
2. flex 0 1 auto
  flex-grow 放大比例 默认为0，即如果存在剩余空间，也不放大。
  flex-shrink 缩小比例，默认为1 如果空间不足，缩小
  flex-basis 宽度auto本来的大小
  让元素保持原有的大小