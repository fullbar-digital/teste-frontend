<template>
    <div>
        <!-- filter form -->
        <div class="filterForm">
            <h3>Filters</h3>
            
            <!-- filter box -->
            <div class="filterBox">
                <!-- filter max objects per page -->
                <select class="filterObjPerPage" v-model="objPerPage">
                    <option :value="10">10 Items</option>
                    <option :value="20">20 Items</option>
                    <option :value="30">30 Items</option>
                </select>

                <!-- filter pagination or infinite scroll -->
                <select class="filterScrollOrPagination" v-model="scrollPagination">
                    <option value="scroll">Infinite Scroll</option>
                    <option value="pagination">Pagination</option>
                </select>

                <!-- filter from a value to a value -->
                <div class="filterNumberBox">
                    <label for="fromNumber">From
                        <input type="number" id="fromNumber" v-model="fromNumber" min="1" max="5" oninput="value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                    </label>
                    <label for="toNumber">&nbsp;To
                        <input type="number" id="toNumber" v-model="toNumber" min="1" max="5" oninput="value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                    </label>
                </div>
            </div>

            <button type="button" class="btn btnFilter" @click="applyFilter()">Apply Filter</button> <button type="button" class="btn btnReset" @click="refreshPage">Reset</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FormComponent",
        data() {
            return {
                // filters
                filters: [],
                // filter obj per page 
                objPerPage: 10,
                // filter pagination or infinite scroll
                scrollPagination: "pagination",
                // filter from number to a number
                fromNumber: null,
                toNumber: null,
            }
        },
        methods: {
            refreshPage(){
                window.location.reload();
            },
            applyFilter() {
                this.filters = []
                this.filters.push({objPerPage: this.objPerPage, scrollPagination: this.scrollPagination, fromNumber: this.fromNumber, toNumber: this.toNumber})
                this.$emit("filter", this.filters)
                this.fromNumber = null
                this.toNumber = null
            }
        },
        beforeMount() {
            this.applyFilter()
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/colors.scss'; // colors

    input { outline: none; border: none; background-color: $bg-sec-color; font-size: 1.2em; border-radius: 5px; } // all input

    button, select { border: none; &:hover { cursor: pointer; opacity: .7; } } // all button / select

    // filter form
    .filterForm {
        margin-top: 1em;
        margin-bottom: 2em;

        h3 {
            margin-bottom: .5em;
        }

        // filter box
        .filterBox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

            // filter max objects per page & filter pagination or infinite scroll
            .filterObjPerPage,
            .filterScrollOrPagination {
                font-size: 1em;
                background-color: $bg-sec-color;
                padding: 7px;
                box-shadow: 1px 1px 5px rgba($txt-prim-color, .2);
                border-radius: 5px;
                margin: 5px 0;
            }

            // filter from a value to a value
            .filterNumberBox {
                margin: 5px 0;
                // remove scroll on input
                /* Chrome & ** */ input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
                /* Firefox */input[type=number] { -moz-appearance: textfield; }

                label {
                    input {
                        padding: 5px 5px;
                        box-shadow: 1px 1px 5px rgba($txt-prim-color, .2);
                        width: 3.5em;
                    }
                }
            }

        }
        // btn apply filter and reset
        .btn {
            font-size: 1em;
            padding: 7px 14px;
            border: none;
            color: $bg-sec-color;
            border-radius: 3px;
            margin-top: 1em;

            &.btnFilter {
                background-color: $red;
            }

            &.btnReset {
                background-color: $orange;
                margin-left: 5px;
            }
        }
    }
</style>