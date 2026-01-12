<template>
    <router-link
        class="nav-link"
        :to="link"
        v-if="!isExternal(link)"
        :exact="exact"
    >
        {{ item.text }}
    </router-link>

    <a
        v-else
        :href="link"
        class="nav-link external"
        :target="shouldOpenNewTab(link) ? '_blank' : null"
        :rel="shouldOpenNewTab(link) ? 'noopener noreferrer' : null"
    >
        {{ item.text }}
        <OutboundLink/>
    </a>
</template>

<script>
import { isExternal, isMailto, isTel, isPterodactylIo, ensureExt } from './util';

export default {
    props: {
        item: {
            required: true
        }
    },
    computed: {
        link() {
            return ensureExt(this.item.link);
        },
        exact() {
            if (this.$site.locales) {
                return Object.keys(this.$site.locales).some(
                    rootLink => rootLink === this.link
                );
            }
            return this.link === '/';
        }
    },
    methods: {
        isExternal,
        isMailto,
        isTel,
        isPterodactylIo,

        shouldOpenNewTab(link) {
            return !this.isMailto(link)
                && !this.isTel(link)
                && !this.isPterodactylIo(link);
        }
    }
};
</script>
