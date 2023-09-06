import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/Add/Add';
import DataTable from '../../components/DataTable/DataTable';
import { products } from '../../data';
import './products.scss'
import { useState } from "react";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { 
      field: 'img', headerName: 'Image', width: 70,
      renderCell: (params) => {
        return <img src={params.row.img || '/noavatar.png'}  alt="" />
      }
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 220,
        type: 'string',
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 100,
        type: 'string',
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
        type: 'string',
    },
    {
        field: 'producer',
        headerName: 'Producer',
        width: 100,
        type: 'string',
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 100,
        type: 'string',
    },
    {
        field: 'instock',
        headerName: 'In Stock',
        width: 100,
        type: 'boolean',
    },
];

const Products = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={()=> setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug='products' columns={columns} rows={products} />
            {open && <Add slug='product' columns={columns} setOpen={setOpen} />}
        </div>
    );
}
 
export default Products;