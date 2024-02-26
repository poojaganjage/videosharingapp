import {useState} from "react";
import {Paper, TextField} from "@mui/material";

const SearchBar = (props) => {
    const[searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
       setSearchTerm(e.target.value); 
    }

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            props.onSubmit(searchTerm);
        }
    }

    return (
        <Paper elevation={6} styling={{padding: "25px"}}>
            <TextField 
                fullWidth
                label="Search....."
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={onKeyPress}
            />
        </Paper>
    );
}
export default SearchBar;
