<template>
    <table :class="$style.table">
        <thead>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Planet</th>
        </thead>

        <tbody>
            <tr v-for="(person, index) in people" :key="index" :class="$style.row">
                <td :class="$style.cell">{{ person.name }}</td>
                <td :class="[$style.cell, $style.right]">{{ person.height }} cm</td>
                <td :class="[$style.cell, $style.right]">{{ person.mass }} kg</td>
                <td :class="[$style.cell, $style.right]">{{ formatDate(person.created) }}</td>
                <td :class="[$style.cell, $style.right]">{{ formatDate(person.edited) }}</td>
                <td :class="$style.cell">{{ person.homeworld }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

import { PeopleApiResult } from '@/models';
import { formatDate } from '@/utils';

export default defineComponent({
    name: 'asdf',

    async setup() {
        const result = await axios.get<PeopleApiResult>('https://swapi.dev/api/people/');

        const people = result.data.results.map(p => ({
            name: p.name,
            height: Number(p.height),
            mass: Number(p.mass),
            created: new Date(p.created),
            edited: new Date(p.edited),
            homeworld: p.homeworld,
        }));

        return {
            people,
            formatDate,
        };
    },
});
</script>

<style lang="scss" module>
.table {
    margin: 0 auto;
    border-spacing: 0;

    > thead {
        text-align: center;
    }

    > tbody {
        text-align: left;
    }
}

.row {
    &:nth-child(2n) {
        > td {
            background: #eee;

            &:first-child {
                border-radius: 6px 0 0 6px;
            }

            &:last-child {
                border-radius: 0 6px 6px 0;
            }
        }
    }
}

.cell {
    padding: 8px 12px;
    margin: 0;
    border: 0;
}

.right {
    text-align: right;
}
</style>
