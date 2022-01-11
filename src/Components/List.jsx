import { Container, Input, Button, Box } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { addListData, updateListData,setListData, deleteListData } from "../Redux/ActionsCreator/actionCreators";

const List = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.ListReducer)

  return (
    <Container>
      <Box 
      mt='2rem'
      mx='20rem'
      >
        <Input
        type='text'
        placeholder="Add Details"
        value={state.inputText}
        onChange={(event) => dispatch(addListData(event.target.value))}
        required
         />
        <Button
        type='submit'
        variant="contained"
        color='primary'
        onClick={() => dispatch(setListData())}
        >Add</Button>
      
      {state.list ? 
      state.list.map((val,index) =>{
        return ( 
        <Box key={val.id} width={600} border={1} fontSize={25}  boxShadow={5} borderColor='grey' bgcolor="white.500" mt='2rem' >
        {val.name}
        <Button
        onClick={() => dispatch(updateListData(val))}
        >Update</Button>
        <Button
        onClick={() => dispatch(deleteListData(val.id)) }
        >Delete</Button>
        </Box>
        )
      })
      : "No Task Added"}



      </Box>
    </Container>
  );
};

export default List;
