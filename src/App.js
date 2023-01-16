import './App.css';
import { Routes, Route } from 'react-router-dom';
import TabMenu from './components/TabMenu';


function App() {
  
  return (
    <Routes>
    <Route path="/" element={<TabMenu tabValue='0' />}>
      <Route path="/main" element={<TabMenu tabValue='0'/>} />
      <Route path="/services" element={<TabMenu tabValue='1'/>} />
      <Route path="/about" element={<TabMenu tabValue='2'/>} />
      <Route path="/contacts" element={<TabMenu tabValue='3'/>} />
    </Route>
  </Routes>
  );
}

export default App;
