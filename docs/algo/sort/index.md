
# 内部排序

待排序记录全部存放在计算机内存中进行排序的过程

## 插入类

### 直接插入排序

```java
public static void directInsertSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) { // i=0时只有1个元素，视为有序
        int key = arr[i]; // 关键字
        int j = i - 1; //
        while (j >= 0 && key < arr[j]) { // 比较关键字 key 和 arr[j]
            arr[j + 1] = arr[j]; // 有序数组比key大的往后移动
            j--;
        }
        arr[j + 1] = key; // 此时j=-1，表示关键字key比有序数组的任意元素都要小，放在有序数组的第一位
    }
}
```

### 折半插入排序

### 希尔排序


## 交换类

### 冒泡排序

```java
public static void BubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) { // n个数比较 ( n-1 ) 轮
        // System.out.println("第" + i + "轮"); // 每比较一轮，就会找出当前轮次的最大值
        for (int j = 0; j < arr.length - i - 1; j++) { // 每轮比较( n-1 - i )次， i为轮次
            if (arr[j] > arr[j + 1]) {
                int tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
```

### 快速排序


## 选择类

### 简单选择排序

### 树形选择排序

### 堆排序


## 归并类

### 2路归并排序

## 分配类

### 基数排序

### 多关键字排序

### 链式基数排序


## 其他类别

###  桶排序

###  计数排序


# 外部排序

待排序记录的数量很大，以致内存一次不能容纳全部记录， 在排序过程中尚需对外存进行访问的排序过程
### 多路归并树

### 置换选择排序

### 最佳归并树
