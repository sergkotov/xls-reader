import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import CommonTable from "../commonTable/CommonTable";

const ViewTable = ({type}) => {
    const {xlsLoadingStatus, xlsError} = useSelector(state => state.xlsReducer);
    
    return (
        <div className="view">
            {xlsLoadingStatus === null && <div>Файл не загружен</div>}
            {xlsError && <div>Ошибка загрузки</div>}
            {xlsLoadingStatus === 'loading' && <Spinner/>}
            {xlsLoadingStatus === 'idle' && <CommonTable type={type}/>}
        </div>
    )
}

export default ViewTable;