import { NuxtPage } from '../.nuxt/components';
<template>
  <div>
    <nav>
      导航
      <img  src="/avatar.png"/>
      <img  src="~/assets/avatar.png"/>
    </nav>
    <slot></slot>
  </div>
</template>