<style lang="scss">
    .checkbox-component {
        > input {
            opacity: 0;
            position: absolute;

            + label > .input-box {
                display: inline-block;
                border: 1px solid #000;
                border-radius: 14%;
                margin: 0;
                padding: 0;
                width: 1em;
                height: 1em;
                background: #fff;
                overflow: hidden;
                vertical-align: -5%;
                user-select: none;

                > .input-box-tick {
                    width: 100%;
                    height: 100%;

                    > path {
                        opacity: 0;
                        stroke: #000;
                        stroke-width: 2.3px;
                        stroke-dashoffset: 20;
                        stroke-dasharray: 20;
                        transition: stroke-dashoffset 0.15s ease-in;
                    }
                }
            }

            &:checked + label > .input-box > .input-box-tick > path {
                opacity: 1;
                stroke-dashoffset: 0;
            }

            &:focus + label > .input-box {
                box-shadow: 0 0 2px 3px rgba(115, 185, 255, 0.69);
            }
        }
    }
</style>

<template>
    <div class="checkbox-component">
        <input type="checkbox"
               :id="id"
               :name="name"
               :value="value"
               :class="className"
               :required="required"
               @change="onChange"
               ref="input">
        <label :for="id">
            <span class="input-box">
                <svg class="input-box-tick" viewBox="0 0 16 16">
                    <path fill="none" d="M1.7,7.8l3.8,3.4l9-8.8"></path>
                </svg>
            </span>
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: function () {
                    return 'checkbox-id-' + this._uid;
                },
            },
            name: {
                type: String,
                default: null,
            },
            value: {
                type: String,
                default: null,
            },
            className: {
                type: String,
                default: null,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
        },

        watch: {
            checked(value) {
                this.$refs.input.checked = value;
            }
        },

        mounted() {
            this.$refs.input.checked = this.checked;
        },

        methods: {
            onChange(event) {
                this.$emit('change', event);
            },
        },
    };
</script>
