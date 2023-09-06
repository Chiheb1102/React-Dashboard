import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/DataTable/DataTable';
import { usersRow } from '../../data';
import './users.scss'
import Add from '../../components/Add/Add';
import { useState } from "react";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { 
      field: 'img', headerName: 'Avatar', width: 70,
      renderCell: (params) => {
        return <img src={params.row.img || '/noavatar.png'}  alt="" />
      }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 100,
        type: 'string',
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        type: 'string',
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 120,
        type: 'string',
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 120,
        type: 'string',
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 120,
        type: 'string',
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 80,
      type: 'boolean',
    },
];

const Users = () => {

    const [open, setOpen] = useState(false)      

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=> setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug='users' columns={columns} rows={usersRow} />
            {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
        </div>
    );
}
 
export default Users;