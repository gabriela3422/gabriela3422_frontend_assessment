import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./components/Table/Table";
import { countries, Country } from './countries';

function App() {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    setData(countries);
  }, [])

  return <Table data={data} />
}

export default App;
