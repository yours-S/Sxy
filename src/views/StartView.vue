<template>
    <!-- 开始页面 -->
     <div>
        <button @click="start">开始任务</button>
     </div>
</template>

<script>
import {defineComponent, ref, onMounted, onUnmounted} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name: 'Start',
  setup() {
    //组件创建的过程
    let router = useRouter()
    let name = ref('sxy')
    let num = ref(10)
    let obj = ref({
        msg: 'start'
    })
    onMounted(() => {
        //组件挂载的过程
        //数据 dom...
        //发请求
        //数据初始化的操作 接收路由传递参数
        console.log('onMounted')
    })
    onUnmounted(() => {
        //组件卸载时的生命周期
        //清除定时器 清除闭包函数
        console.log('onUnmounted')
    })
    console.log('setup')
    let start = () => {
        //push如果是传的对象的形式 就可以传递参数
        //query传参
        //push里面还可以传入name name是路由的名字
        //query传参path和name都可以
        //params传参只能用name
        router.push({
            name: 'home',
            // path: '/home',
            query: {
                name: name.value,
                num: num.value,
                obj: JSON.stringify(obj.value)
            }
            // params: {
            //     name: name.value,
            //     num: num.value,
            //     obj: JSON.stringify(obj)
            // }
        })
    }
    return {
        start,
        name,
        num,
        obj
    }
  }
})

</script>