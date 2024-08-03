import { useState } from 'react';
import './app.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-auto p-4 h-[100vh] flex flex-col justify-start items-center">
     
    </div>
  );
}

export default App;