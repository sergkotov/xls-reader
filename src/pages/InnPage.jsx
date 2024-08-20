import ImportData from "../components/importData/ImportData";
import ViewTable from "../components/viewTable/ViewTable";

const InnPage = () => {
    return (
        <div>
            <ImportData/>
            <ViewTable type="inn"/>
        </div>
    )
}

export default InnPage;