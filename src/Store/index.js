import { configureStore } from "@reduxjs/toolkit";
import books from '../Store/Bookslise';
import auther from '../Store/Authslice';
import report from '../Store/Report';
const Store = configureStore({
    reducer:{
        books,
        auther,
        report,
    },
});

export default Store;