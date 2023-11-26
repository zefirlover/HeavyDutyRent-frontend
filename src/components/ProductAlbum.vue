<script setup>
</script>

<template>
    <section style="background-color: #eee;">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0 d-flex pb-3" v-for="(machinery) in machineries"
                    :key="machinery.id">
                    <div class="card flex-fill">
                        <img :src="machinery.images.$values.length ? machinery.images.$values[0].url : placeholderImage"
                            class="card-img-top fixed-image-size" alt="image" />
                        <div class="card-body">
                            <h5 class="mb-0 d-flex justify-content-between mb-3">
                                <a :href="'/machinery/' + machinery.id" class="text-muted mb-0">{{ machinery.name }}</a>
                            </h5>
                            <h5 class="text-dark mb-0 text-danger">{{ machinery.price }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import apiClient from '../apiClient';
import placeholderImage from '../assets/machineryPlaceholder.webp'
import EventBus from '../event-bus';

export default {
    name: 'ProductAlbum',
    data() {
        return {
            machineries: [],
            images: [],
            errors: [],
            placeholderImage: placeholderImage,
        };
    },
    async created() {
        try {
            const response = await apiClient.get('/api/Machinery/all-machineries');
            this.machineries = response.data.$values
        } catch (e) {
            this.errors.push(e);
        }
    },
    mounted() {
        EventBus.on('updateMachineries', (categorizedMachineries) => {
            this.machineries = categorizedMachineries;
        });
    },
}
</script>
  
<style scoped>
.fixed-image-size {
    height: calc(70% - 1rem);
}
</style>