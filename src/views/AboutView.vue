<template>
  <div class="about">
    <h1>这是about组件</h1>
    <button @click="back">回到首页</button>
    <button @click="next">下一个页面</button>
  </div>
</template>

<script>
import {defineComponent, nextTick} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name: 'About',
  setup() {
    let router = useRouter()
    let back = () => {
      router.go(-1)
    }
    let next = () => {
      router.push('/detail')
    }
    return {
      back,
      next
    }
  }
})

</script>
