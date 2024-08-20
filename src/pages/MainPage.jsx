import ImportData from "../components/importData/ImportData";
import ViewTable from "../components/viewTable/ViewTable";

const MainPage = () => {
    return (
        <div>
            <ImportData/>
            <ViewTable type="main"/>
        </div>
    )
}

export default MainPage;