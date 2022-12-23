import './../../index.css'
import { Sidebar } from '../sidebar/Sidebar';
import appStyle from './App.module.css'
import { Main } from '../Main/Main';
const App:React.FC = () => {
  return (
    <div className={appStyle.app}>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
