import React from 'react';
import Table from '../components/Table';
import TableComponent from '../components/Table';
import MostSearchProduct from '../components/mostSearchProduct/MostSearchProduct';

const Home = () => {
    return (
        <div>
            <TableComponent/>

            <br />
            <br />
            <br />
            <MostSearchProduct />
        </div>
    );
};

export default Home;