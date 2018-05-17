<template>
    <div class="main-nav">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" @click="toggleCollapsed">
                <span class="navbar-toggler-icon"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/">
                  <img src="dist/images/logonetsp.jpeg" style="max-width:100px; height:auto;" />
                  Vue JS/Asp.Net
                  <br></br>
            </router-link>
          
            <transition name="slide">
                <div :class="'collapse navbar-collapse' + (!collapsed ? ' show':'')" v-show="!collapsed">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                        <router-link to="/" exact-active-class="active">
                          <icon icon="list" class="mr-2" />
                          <span>Home</span>
                        </router-link>
                        
                      </li>
                      <li class="nav-item">
                        <router-link to="lista-pessoa" exact-active-class="active">
                          <icon icon="list" class="mr-2" />
                          <span>Pessoas - Com Router</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <a href="/lista-pessoa">
                          <icon icon="list" class="mr-2" />
                          <span>Pessoas - Sem Router</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/campos-dinamicos" exact-active-class="active">
                          <icon icon="list" class="mr-2" />
                          <span>Campos Dinâmicos</span>
                        </router-link>

                      </li>
                    </ul>
                </div>
            </transition>
        </nav>
    </div>
</template>

<script>
    import { routes } from '../router/routes'

    export default {
      data () {
        return {
          routes,
          collapsed: true
        }
      },
      methods: {
        toggleCollapsed: function (event) {
          this.collapsed = !this.collapsed
        }
      }
    }
</script>

<style scoped>
    .slide-enter-active, .slide-leave-active {
    transition: max-height .35s
    }
    .slide-enter, .slide-leave-to {
    max-height: 0px;
    }

    .slide-enter-to, .slide-leave {
    max-height: 20em;
    }
</style>
