<template>
  <div
    class="sidebar"
    data-color="rose"
    data-background-color="black"
    data-image="/assets/img/sidebar-1.jpg"
  >
    <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
    <div class="logo">
      <a href="http://tanhongit.com/" class="simple-text logo-mini">
        Blog
      </a>
      <a href="http://tanhongit.com/" class="simple-text logo-normal">
        Laravel Vuejs
      </a>
    </div>
    <div class="sidebar-wrapper">
      <div class="user">
        <div class="photo">
          <img src="/assets/img/faces/avatar.jpg" />
        </div>
        <div class="user-info">
          <a data-toggle="collapse" href="#collapseExample" class="username">
            <span>
              Tania Andrew
              <b class="caret"></b>
            </span>
          </a>
          <div class="collapse" id="collapseExample">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class="sidebar-mini"> MP </span>
                  <span class="sidebar-normal"> My Profile </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class="sidebar-mini"> EP </span>
                  <span class="sidebar-normal"> Edit Profile </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class="sidebar-mini"> S </span>
                  <span class="sidebar-normal"> Settings </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/admin">
            <i class="material-icons">dashboard</i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#pagesExamples">
            <i class="material-icons">image</i>
            <p>
              Categories
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="pagesExamples">
            <ul class="nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/category/list">
                  <span class="sidebar-mini"> L </span>
                  <span class="sidebar-normal"> List </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/category/add">
                  <span class="sidebar-mini"> N </span>
                  <span class="sidebar-normal"> Add New </span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#componentsExamples">
            <i class="material-icons">apps</i>
            <p>
              Post
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="componentsExamples">
            <ul class="nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/post">
                  <span class="sidebar-mini"> L </span>
                  <span class="sidebar-normal"> List </span>
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="components/grid.html">
                  <span class="sidebar-mini"> GS </span>
                  <span class="sidebar-normal"> Grid System </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="components/panels.html">
                  <span class="sidebar-mini"> P </span>
                  <span class="sidebar-normal"> Panels </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="components/sweet-alert.html">
                  <span class="sidebar-mini"> SA </span>
                  <span class="sidebar-normal"> Sweet Alert </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="components/notifications.html">
                  <span class="sidebar-mini"> N </span>
                  <span class="sidebar-normal"> Notifications </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="components/icons.html">
                  <span class="sidebar-mini"> I </span>
                  <span class="sidebar-normal"> Icons </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="components/typography.html">
                  <span class="sidebar-mini"> T </span>
                  <span class="sidebar-normal"> Typography </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="calendar.html">
            <i class="material-icons">date_range</i>
            <p>Calendar</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("Layout Sidebar admin component mounted.");
  },
};
</script>
