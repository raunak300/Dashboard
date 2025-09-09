import { create } from 'zustand'
import {persist} from 'zustand/middleware'

const useStore=createStorageSlice((set)=>({
    allData:{
        data1:[],
        data2:[],
        data3:[]
    },
    setData:(data)=>set((state)=>({}))
})
)