<script setup lang="ts">
let code = ref('')

const clickCode = (e) => {
  if(e.target.innerText === '-') {
    code.value = code.value.slice(0, -1)
    return
  }
  code.value += `${e.target.innerText}`
}
//根据'asdfghjkl'生成单个的字符串数组
// let keyCodesArr = ref('asdfghjkl'.split(''))


let keyCodes = ref([
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', '/']
])
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center py-5">
      <div class="mockup-code w-1/2">
        <pre data-prefix=">" class="text-success"><code>欢迎来到tailwindcss</code></pre>
        <pre data-prefix="$"><code class="overflow-hidden whitespace-nowrap">{{ code }}</code></pre>
      </div>
      <div>
        <div class="flex justify-center gap-1 my-1 w-full mt-2" v-for="keys, idx in keyCodes" :key="idx">
          <kbd class="px-2 min-w-0 min-h-1 kbd" v-for="key_ in keys" @click="clickCode" :key="key_">{{ key_ }}</kbd>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  h1 {
    color: red;
  }

  .base-text {
    color: blue;
  }
}
</style>
