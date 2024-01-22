import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../TodoApp.css';

const TodoApp = ({ user }) => {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOptionsIndex, setShowOptionsIndex] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todolist')) || [];
    setAllTodos(savedTodos);
  }, []);

  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
      status: 'active',
      favourite: false,
    };
    let updatedTodoArr = [...allTodos, newToDoObj];
    setAllTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    setNewDescription('');
    setNewTodoTitle('');
  };

  const handleToDoDelete = (index, newStatus) => {
    let updatedTodos = [...allTodos];
    updatedTodos[index].status = newStatus;
    
    if (newStatus === 'completed') {
      const date = new Date();
    } else if (newStatus === 'deleted') {
    }
  
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    setAllTodos(updatedTodos);
    setShowOptionsIndex(null);
  };
  
  const handleToDoComplete = (index, newStatus) => {
    let updatedTodos = [...allTodos];
    updatedTodos[index].status = newStatus;
    
    if (newStatus === 'completed') {
    } else if (newStatus === 'deleted') {

    }
  
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    setAllTodos(updatedTodos);
    setShowOptionsIndex(null);
  };
 
  const handleFavourite = (index) => {
    let updatedTodos = [...allTodos];
    updatedTodos[index].favourite = !updatedTodos[index].favourite;
    setAllTodos(updatedTodos);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };
  
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const filteredTodos = allTodos.filter((todo) => {
    const isFiltered = (
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      ((filter === 'all' && todo.status !== 'deleted') ||
        (filter === 'completed' && todo.status === 'completed') ||
        (filter === 'favourite' && todo.favourite) ||
        (filter === 'deleted' && todo.status=== 'deleted'))
    );
  
    console.log(todo.title, filter, isFiltered); 

  return isFiltered;
});
  

  return (
    <div className="App">
      <div className="todo-left">
        <div className="left-content">
          <h1>TODO</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh
            dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae
            faucibus nibh dolor dui.
          </p>
          <div className="todo-input">
            <div className="todo-input-item">
              <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="todo-input-item">
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="todo-input-item">
              <button className="primary-btn" type="button" onClick={handleAddNewToDo}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-right">
        <div className="right-content">
          <h1 className='right-heading'>TODO LIST</h1>
          <div>
            <input
              className='search-box'
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <FontAwesomeIcon className='search-con' icon={faSearch} />
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className='filter-box'>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="favourite">Favourite</option>
              <option value="deleted">Deleted</option>
            </select>
          </div>
          <ul className="card-list">
  
          {filteredTodos.map((todo, index) => (
          <li key={index} className="card">
      <div className="list-content">
        <h3>{todo.title}</h3>
        <p className='description'>{todo.description}</p>
      </div>
      <div className="options-container">

        
         <button onClick={toggleMenu}>
         <FontAwesomeIcon icon={faEllipsisV} /> 
      </button>
      {isMenuVisible && (
        <div className="menu">
          <button onClick={() => handleToDoComplete (index, 'completed')}>Completed</button>
          <button onClick={() => handleToDoDelete (index,'deleted')}>Deleted</button>
          <button onClick={() => handleFavourite(index)}>Favourite</button>
        </div>
      )}
    </div>
  </li>
))}
</ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;












