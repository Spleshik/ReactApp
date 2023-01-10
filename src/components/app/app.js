import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoeeys-list/emploees-list'
import EmployeesAddForm from '../form-add/form-add';

function App () {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    )
}


export default App;