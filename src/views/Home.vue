<template>
    <div :class="$style.view">
        <Suspense>
            <PeopleTable />
        </Suspense>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PeopleTable from '@/components/PeopleTable.vue';

export default defineComponent({
    name: 'Home',

    components: {
        PeopleTable,
    },
});
</script>

<style lang="scss" module>
.view {
    display: flex;
    flex-direction: column;
}
</style>
