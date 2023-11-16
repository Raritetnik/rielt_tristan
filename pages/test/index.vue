<template>
  <div>
    <label v-for="item in items" :key="item.id">
      <input v-model="checkedItems" :value="item.id" type="checkbox"/>
      {{ item.name }}
    </label>

    <button @click="getCheckedValues">Get Checked Values</button>

    <div>
      Checked Values: {{ checkedItems }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'}
      ],
      checkedItems: []
    };
  },
  methods: {
    getCheckedValues() {
      console.log('Checked Values:', this.checkedItems);
    }
  }
};
</script>