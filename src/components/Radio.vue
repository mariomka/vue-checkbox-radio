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
                width: 16px;
                height: 16px;
                font-size: 14px;
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
               :checked="checked"
               :required="required"
               @change="onChange">
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
                }
            },
            name: {
                type: String,
                default: null
            },
            value: {
                type: String,
                default: null
            },
            className: {
                type: String,
                default: null
            },
            checked: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
        },

        methods: {
            onChange: function (event) {
                this.$emit('change', event);
            }
        },
    }
</script>
