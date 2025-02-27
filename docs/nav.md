---
layout: page
title: 导航页
layoutClass: m-nav-layout
---

<script setup>
import MNavLinks from './nav/components/MNavLinks.vue'
import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.css"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>