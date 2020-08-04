<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <h1>Front End Instrumentality Project  
      <small>keep everyThing I want to konw</small>
    </h1>
    <div class="grid-wrap">
      <RouterLink class="list-block" to="#">
        <figure>
          <img src="https://picsum.photos/500/350?random=1" alt="" />
          <figcaption>
            <h2>Thumbnail 01</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </figcaption>
        </figure>
      </RouterLink>
    </div>
  </main>
</template>

<script>
import DirectionReveal from '../util/direction-reveal';

import NavLink from '@theme/components/NavLink.vue'

export default {
    name: 'Home',

    components: {NavLink},
    data() {
        return {
            directionRevealDefault: {}
        }
    },
    mounted() {
        this.directionRevealDefault = DirectionReveal();;
    },
    computed: {
        data() {
            return this.$page.frontmatter
        },

        actionLink() {
            return {
                link: this.data.actionLink,
                text: this.data.actionText
            }
        }
    }
}
</script>
<style lang="scss">
@import '../styles/direction-reveal.scss';
@import '../styles/mixins.scss';
@import '../styles/vars.scss';
h1 {
    color: white;
    padding: $valueToMargin * 4;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    small {
        font-size: 18px;
        display: block;
        text-transform: none;
        font-weight: 300;
        margin-top: 5px;
    }
}
.grid-wrap {
    padding: $valueToMargin;
}
.list-block {
    float: left;
    margin: $valueToMargin;
    width: $itemWidth;
    font-size: 0;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    figure {
        margin: 0;
        padding: 0;
        border: 0;
        position: relative;
        display: block;
        color: darken($font-color, 100%);
        text-align: center;
        &:after {
            background: $secondary-color;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            content: '';
            opacity: 0.7;
            transition: all 0.3s ease-in-out;
            @include transformSkewScale(-45deg, 0);
        }

        &:hover {
            &:after {
                @include transformSkewScale(-45deg, 1);
                transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            figcaption h2,
            figcaption p {
                transform: translate3d(0%, 0%, 0);
                -webkit-transition-delay: 0.2s;
                transition-delay: 0.2s;
            }
            figcaption h2 {
                opacity: 1;
            }
            figcaption p {
                opacity: 0.7;
            }
        }
    }
    img {
        opacity: 1;
        max-width: 100%;
        min-width: 100%;
        transition: opacity 0.35s ease;
    }
    figcaption {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
        z-index: 1;
    }
    h2,
    p {
        margin: 0;
        width: 100%;
        opacity: 0;
        border: 0;
    }
    h2 {
        padding: 0 30px 10px;
        display: inline-block;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 24px;
    }
    p {
        padding: 0 50px;
        font-size: 14px;
        text-transform: uppercase;
    }
}
</style>