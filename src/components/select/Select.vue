<template>
  <div class="select-box">
    <div class="select-box__current" tabindex="1">
      <div
        v-for="(option, i) in options"
        v-bind:option="option"
        v-bind:index="i"
        v-bind:key="i"
        class="select-box__value"
      >
        <input
          class="select-box__input"
          type="radio"
          v-bind:id="option.id"
          v-bind:value="option.id + 1"
          name="Ben"
          checked="checked"
        />
        <p class="select-box__input-text">{{ option.text }}</p>
      </div>
      <svg
        class="select-box__icon"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000"
        xml:space="preserve"
      >
        <g>
          <path d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z" />
        </g>
      </svg>
    </div>
    <ul class="select-box__list">
      <li v-for="(option, i) in options" v-bind:option="option" v-bind:index="i" v-bind:key="i">
        <label
          class="select-box__option"
          v-bind:for="option.id"
          aria-hidden="aria-hidden"
        >{{ option.text }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  color: #b5cbd3;
  border-radius: 5px !important;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }

  &__current {
    position: relative;
    // box-shadow: 0 15px 10px 0px transparentize(#000, 0.9);

    cursor: pointer;
    outline: none;

    &:focus {
      & + .select-box__list {
        opacity: 1;
        margin-top: 1rem;
        // We have to set "animation-name: none;" to make the list visible (read below how it works)

        animation-name: none;

        .select-box__option {
          cursor: pointer;
        }
      }

      .select-box__icon {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 20px;
    opacity: 0.3;
    transition: 0.2s ease;
    fill: #00e5ff;
  }

  &__value {
    display: flex;
  }

  &__input {
    display: none;

    &:checked + .select-box__input-text {
      display: block;
    }
  }

  &__input-text {
    display: none;
    width: 100%;
    margin: 0;
    padding: 15px;
    background-color: #2c3f51;

    &:hover,
    &:focus {
      color: #b5cbd3;
      background-color: #1d3946;
      & + .select-box__icon {
        opacity: 0.6;
      }
    }
  }

  &__list {
    position: absolute;
    width: 100%;
    padding: 0;
    list-style: none;
    opacity: 0;

    // We need to use animation with delay.
    // Otherwise the click event will not have time to run on label, because this element disapears immediately when .select-box__current element loses the focus.
    // This delay will not be noticed because we set "opacity" to "0".
    // We also use "animation-fill-mode: forwards" to make the list stay hidden.

    animation-name: HideList;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    box-shadow: 0 15px 10px 0px transparentize(#000, 0.9);
  }

  &__option {
    display: block;
    padding: 15px;
    background-color: #2c3f51;

    &:hover,
    &:focus {
      color: #b5cbd3;
      background-color: #1d3946;
    }
  }
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
</style>