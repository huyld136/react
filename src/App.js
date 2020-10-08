import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import BaiTapGioHang from './BaiTapGioHang';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      <BaiTapGioHang />
    </div>
  );
}

export default App;
