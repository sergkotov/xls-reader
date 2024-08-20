import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as XLSX from 'xlsx';

import { loadedXls, loadingXls, rejectXls } from '../../reducers/xlsSlice';

const ImportData = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleFileUpload = (evt) => {
        evt.preventDefault();
        try {
            dispatch(loadingXls());
            const selectedFile = inputRef.current.files[0];
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload = (e) => {
                sendFileData(e.target.result);
            }
        } catch(err) {
            dispatch(rejectXls());
        }
        inputRef.current.value = '';
    }

    const sendFileData = (buffer) => {
        const book = XLSX.read(buffer, {type: 'buffer'});
        const sheetNames = book.SheetNames[0];
        const sheets = book.Sheets[sheetNames];
        const data = XLSX.utils.sheet_to_json(sheets);
        if(!Array.isArray(data) || data.length === 0) {
            dispatch(rejectXls());
        }
        dispatch(loadedXls(data));
    }

    return (
        <form className="form-import" onSubmit={handleFileUpload}>
            <input className="form-import__input" type="file" accept=".xlsx, .xls" required ref={inputRef}/>
            <button className="form-import__btn" type="submit">Загрузить файл</button>
        </form>
    )
}

export default ImportData;