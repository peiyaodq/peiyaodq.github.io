"use strict";function toggleDark(){darkHeaderElements(),darkCards(),darkSingle(),darkPostsSection(),darkTagsSection(),darkCategoriesSection(),darkBack()}const dark="inverted",localStore=window.localStorage,darkHeaderElements=()=>{const e=$(".dream-header");if(e.length){const e=$(".dream-header .ui.segment"),t=$(".dream-header .ui.top.segment .ui.header"),a=$(".dream-header .ui.top.segment .ui.list"),s=$(".dream-header .ui.segment .ui.accordion");e.map(function(){$(this).toggleClass(dark)}),t.toggleClass(dark),a.toggleClass(dark),s.toggleClass(dark)}},darkBack=()=>{const e=$(".dream-back .ui.segment");e.length&&e.map(function(){$(this).toggleClass(dark)})},darkPostsSection=()=>{const e=$(".ui.segment.dream-posts-section");e.length&&e.toggleClass(dark)},darkTagsSection=()=>{const e=$(".ui.segment.dream-tags-section");e.length&&e.toggleClass(dark)},darkCategoriesSection=()=>{const e=$(".ui.segment.dream-categories-section");e.length&&e.toggleClass(dark)},darkSingle=()=>{const e=$(".dream-single .ui.segment");if(e.length){e.map(function(){$(this).toggleClass(dark)});const t=$(".dream-single .ui.top.segment .ui.header");t.toggleClass(dark)}},darkCards=()=>{const e=$(".dream-card");e.length&&e.map(function(){$(this).toggleClass(dark)})},lightKey="hugo-theme-dream-is-light";let isLight=localStore.getItem(lightKey);const iconSwitchs=$(".theme-switch").toArray();isLight?iconSwitchs.forEach(e=>$(e).addClass("sun")):(iconSwitchs.forEach(e=>$(e).addClass("moon")),toggleDark());const themeSwitch=()=>{isLight?(iconSwitchs.forEach(e=>$(e).removeClass("sun")),iconSwitchs.forEach(e=>$(e).addClass("moon")),localStore.setItem(lightKey,"y"),isLight="y"):(iconSwitchs.forEach(e=>$(e).removeClass("moon")),iconSwitchs.forEach(e=>$(e).addClass("sun")),localStore.removeItem(lightKey),isLight=null,toggleDark())};