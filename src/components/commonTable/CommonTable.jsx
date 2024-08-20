import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import './CommonTable.css';
import { innSetData, mainSetData } from "../../services/XlsService";

const xlsDataMainSelector = createSelector(
    (state) => state.xlsReducer.xlsData,
    (items) => {
        const [newItems, total] = mainSetData(items);
        return [newItems, total];
    }
);

const xlsDataInnSelector = createSelector(
    (state) => state.xlsReducer.xlsData,
    (items) => {
        const [newItems, total] = innSetData(items);
        return [newItems, total];
    }
)

const CommonTable = ({type}) => {
    let xlsDataSelector;

    switch (type) {
        case 'main':
            xlsDataSelector = xlsDataMainSelector;
            break;
        case 'inn': 
            xlsDataSelector = xlsDataInnSelector;
            break;
        default:
            xlsDataSelector = null;
    }

    const xlsColNames = useSelector(state => state.xlsReducer.xlsColNames);
    const [xlsData, xlsTotal] = useSelector(xlsDataSelector);

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {xlsColNames.map(item => (
                            <th key={uuidv4()}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {xlsData.map(row => (
                        <tr key={uuidv4()}>
                            {Object.values(row).map(item => (
                                <td key={uuidv4()}>
                                {Array.isArray(item) ? 
                                    <ul>
                                        {item.map(li => (
                                            <li key={uuidv4()}>{li}</li>
                                        ))}
                                    </ul> :
                                    item}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr className="table-total">
                        {xlsTotal.map(item => (
                            <td key={uuidv4()}>{item}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CommonTable;