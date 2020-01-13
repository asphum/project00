<template>
<div>
  <nav id="menu" class="navbar navbar-expand-lg">
    <a class="logoweb navbar-brand" href="#">1Waan.Com</a>
    <a @click="toggleMenu()" :class="{ 'show': ShowMenu }" class="navbar-toggler"><i class="menubur fas fa-bars"></i></a>

    <div :class="{ 'show': ShowMenu }" class="collapse navbar-collapse">
      <NLink v-for="(item, i) in items" :key="i" :to="item.to" class="menulink nav-item nav-link">
        <i :class="item.icon" style="padding-right: 5px;"></i>
        {{ item.title }}
      </NLink>
      <div style="display: flex;margin-left: auto;">
          <NLink class="menulink nav-item nav-link" to="/user/login">
            <i class="fas fa-sign-in-alt" style="padding-right: 5px;"></i>เข้าสู่ระบบ
          </NLink>
          <NLink class="menulink nav-item nav-link" to="/user/register">
            <i class="fas fa-user-plus" style="padding-right: 5px;"></i>สมัครสมาชิก
          </NLink>
      </div>
    </div>
  </nav>
</div>
</template>

<style scoped>
.menulink {
  background-color: #FFF !important;
  color: #00d1b2 !important;
  font-size: 1.1rem !important;
  font-weight: 800 !important;
  font-family: 'Sarabun', sans-serif !important;
  transition: 0.5s;
}

.menulink:hover,
.nuxt-link-exact-active {
  background-color: #00d1b2 !important;
  color: #FFF !important;
}

.navbar-toggler {
  border: none;
  padding: .25rem .75rem;
  font-size: 2rem;
  line-height: 1;
  background-color: transparent;
  border-radius: .25rem;
}
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  
  components: {
    Logo
  },

  data() {
    return {
      items: [{
          icon: 'fas fa-home',
          title: 'หน้าแรก',
          to: '/'
        },
        {
          icon: 'fas fa-book',
          title: 'เอกสาร',
          to: '/docs'
        },
        {
          icon: 'fas fa-headphones',
          title: 'เสียง',
          to: '/audios'
        },
        {
          icon: 'fas fa-image',
          title: 'รูปภาพ',
          to: '/photos'
        },
        {
          icon: 'fas fa-film',
          title: 'วิดีโอ',
          to: '/videos'
        },
        {
          icon: 'fas fa-gamepad',
          title: 'เกม',
          to: '/games'
        },
        {
          icon: 'fas fa-pen-alt',
          title: 'เว็บบอร์ด',
          to: '/boards'
        },
        {
          icon: 'fas fa-shopping-bag',
          title: 'สินค้า',
          to: '/products'
        },
      ],
      ShowMenu: false,
      NavigationItems: true,
      NavigationItems: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.ShowMenu = !this.ShowMenu
    },
    toggleNavItem: function () {
      false
    }

  }
}
</script>
