<template>
    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src="../assets/HeavyDutyLogo.svg" alt="Logo" style="height: 30px; width: 30px; margin: 10px;"/>
                </router-link>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <div class="dropdown" @click.stop="dropdownOpen = !dropdownOpen">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                aria-haspopup="true" aria-expanded="false">
                                Categories
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-show="dropdownOpen">
                                <div class="dropdown-item" v-for="(category) in categories" :key="category.id">
                                    <a class="dropdown-item" href="#" @click.prevent="categoryByIdRequest(category.id)">{{
                                        category.name }}</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><router-link to="/advisor" class="nav-link px-2 text-white">Advisor</router-link></li>
                    <li><a href="#" class="nav-link px-2 text-white">Privacy Policy</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">About</a></li>
                </ul>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-warning sign-button">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
</template>
 
<script>
import apiClient from '../apiClient';
import { EventBus } from '../event-bus';

export default {
    name: 'HeaderComponent',
    data() {
        return {
            dropdownOpen: false,
            categorizedMachineries: [],
            categories: [],
            errors: [],
        }
    },
    async created() {
        try {
            const response = await apiClient.get('/api/Category/all-categories');
            this.categories = response.data.$values
        } catch (e) {
            this.errors.push(e);
        }
    },
    methods: {
        async categoryByIdRequest(id) {
            try {
                const response = await apiClient.get('/api/Category/' + id);
                this.categorizedMachineries = response.data.machineries.$values
                EventBus.emit('updateMachineries', this.categorizedMachineries);
                // console.log(this.categorizedMachineries)
            } catch (e) {
                this.errors.push(e);
            }
        },
    },
}
</script>
 
<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
}

.logo-button {
 background-color: none;
 border: none;
 color: none;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 cursor: pointer;
}

.logo-button img {
 height: 20px;
 width: 20px;
 margin-right: 10px;
}

.sign-button {
    background-color: #E5BE6D;
    color: #000;
    cursor: pointer;
    transition-duration: 0.4s;
}

.sign-button:hover {
    background-color: #B88E4A;
    color: black;
}
</style>