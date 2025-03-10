import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import { getCategories } from "../services/categoryService";
import { getSuppliers } from "../services/supplierService";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    // Fetch initial data
    useEffect(() => {
        async function fetchData() {
            const productsData = await getProducts();
            const categoriesData = await getCategories();
            const suppliersData = await getSuppliers();

            setProducts(productsData);
            setCategories(categoriesData);
            setSuppliers(suppliersData);
        }
        fetchData();
    }, []);

    return (
        <InventoryContext.Provider value={{
            products, setProducts,
            categories, setCategories,
            suppliers, setSuppliers
        }}>
            {children}
        </InventoryContext.Provider>
    );
};
