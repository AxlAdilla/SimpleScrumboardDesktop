import { useEffect, useState } from 'react';
import Board from '../Components/Board';
import Footer from '../Layouts/Footer';
import Navigator from '../Layouts/Navigation';
import { supabase } from '../supabaseClient';

function App() {
  const [boards, setBoards] = useState([]);
  function fetchData() {
    supabase
      .from('boards')
      .select(`id, name, cards (
        id,
        title,
        description,
        color,
        board_id
      )`)
      .then(res => {
        setBoards(res.data)
        // console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])

  function updatePage() {
    fetchData()
  }

  const boardList = [];
  for (const board of boards) {
    boardList.push(<Board handleUpdatePage={updatePage} key={board.id} data={board} />)
  }
  return (
    <div>
      <Navigator />
      <div id="board-container" className="d-flex pt-4">
        {boardList}
      </div>
      <Footer />
    </div>
  );
}

export default App;
