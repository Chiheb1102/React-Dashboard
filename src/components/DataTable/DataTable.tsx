import './DataTable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridToolbar} from '@mui/x-data-grid/components';
import { Link } from 'react-router-dom';

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string,
}

const DataTable = (props: Props) => {
    function handleDelete(id:number) {
        props.rows.map(row => row.id == id ? console.log('deleted') : '') 
    }

    const actionColumn:GridColDef = { 
        field: 'actions', headerName: 'Action', width: 200 ,
        renderCell: (params) => {
          return (
            <div className="action">
                <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="view.svg" alt="" />
                </Link>
                <div className="delete" onClick={()=> handleDelete(params.row.id)}>
                    <img src="delete.svg" alt="" />
                </div>
            </div>
          )
        }
      }

    return (
        <div className="dataTable">
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 8,
                        },
                    },
                }}
                slots={{toolbar:GridToolbar}}
                slotProps={{
                    toolbar: {
                        showQuickFilter:true, // show search icon
                        quickFilterProps: {debounceMs:500}, // Search every .5s during typing
                    }
                }}
                pageSizeOptions={[8]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
}
 
export default DataTable;