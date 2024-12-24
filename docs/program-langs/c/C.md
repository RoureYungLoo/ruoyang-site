---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

```c
int main()
{
    int age=25;
    int *pointer=&age;
    //问题：age，&age，pointer，&pointer，*pointer，*&age，&*pointer都是什么？
    printf("\nthe value of age is %d .",age); 
    printf("\nthe value of &age is %#X .",&age);
    printf("\nthe value of pointer is %#X .",pointer);
    printf("\nthe value of &pointer is %#X .",&pointer);
    printf("\nthe value of *pointer is %d .",*pointer);
    printf("\nthe value of *&age is %d .",*&age);
    printf("\nthe value of &*pointer is %#X .\n",&*pointer);
    return 0;
}
```
## Markdown Content

The count is: {{ count }}


<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>