import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ExploreSingleItem from '../ExploreSingleItem/ExploreSingleItem';

const Explore = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/fakedb.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const selectedItem = items.find(item => item.id === parseInt(id))
    console.log('selectedItems', selectedItem);
    return (

        <div>
            <div style={{ textAlign: 'left', padding: '10px' }}>
                <Link to='/home'><button className='explore-btn'>Back to Home</button></Link>
                <div className="card mb-3">
                    <div>
                        <img style={{ width: '70%' }} src={selectedItem?.img1} class="card-img-top" alt="..." />
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">{selectedItem?.name}</h5>
                        <p style={{ color: "black" }} class="card-text"><span>Project info : </span>{selectedItem?.info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;