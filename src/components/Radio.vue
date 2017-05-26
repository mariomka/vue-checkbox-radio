<style lang="scss">
    .radio-component {
        > input {
            opacity: 0;
            position: absolute;

            + label > .box {
                display: inline-block;
                border: 1px solid #000;
                border-radius: 50%;
                margin: 0;
                padding: 0;
                width: 1em;
                height: 1em;
                font-size: 1em;
                text-align: center;
                line-height: 1;
                color: transparent;
                background: #fff;
                user-select: none;

                &:before {
                    content: '✓';
                }
            }

            &:checked + label > .box {
                color: #000;
            }

            &:focus + label > .box {
                outline-color: #73b9ff;
            }
        }
    }
</style>

<template>
    <div class="radio-component">
        <input type="radio"
               :id="id"
               :name="name"
               :value="value"
               :class="className"
               :required="required"
               @change="onChange"
               ref="input">
        <label :for="id">
            <span class="box"></span>
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
                    return 'radio-id-' + this._uid;
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
                console.log(event.target);
                this.$emit('change', event);
            },
        },
    }
</script>
