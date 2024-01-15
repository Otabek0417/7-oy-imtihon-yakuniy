import { createSlice } from "@reduxjs/toolkit"
import LocalCart, { addToLocal } from "../components/locolStore"

export const appReucer = createSlice({
    name: 'product',
    initialState: {
        data: [],
        loading: false,
        savat: LocalCart(),
        page:''
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        addSavat: (state, action) => {
            const check = state.savat.find(p =>  p.img == action.payload.img && p.color == action.payload.color)
            if (check) {
                check.count = +action.payload.count + +check.count
            } else {
                state.savat.push(action.payload)
            }
            addToLocal(state.savat)
        },
        incProduct: (state, action) => {
            state.savat = state.savat.filter(p => {
                if (p.id == action.payload.id && p.color == action.payload.color) {
                    return p.count++
                } else {
                    return p
                }
            })
            addToLocal(state.savat)
        },
        decProduct: (state, action) => {
            state.savat = state.savat.filter(p => {
                if (p.id == action.payload.id && p.color == action.payload.color) {
                    return p.count--
                } else {
                    return p
                }
            })
            addToLocal(state.savat)
        },
        removeProduct: (state, action) => {
            const find = state.savat.find(p => p.id == action.payload.id && p.color == action.payload.color)
            state.savat = state.savat.filter(p => p != find)
            addToLocal(state.savat)
        },
        page:(state,action) => {
            state.page = action.payload
        }
    }
})

export const { addData, loading, addSavat, incProduct, decProduct, removeProduct,page } = appReucer.actions

export const Reducer = appReucer.reducer