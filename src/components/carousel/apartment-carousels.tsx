import React, { useState, useEffect } from 'react';
import { Tabs, Spin } from 'antd';
import CarouselComponent from './carousel';
import { apartment1Images, apartment2Images } from '../../data/apartment-images';
import './carousel.css';

const ApartmentCarousels: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [isLoading, setIsLoading] = useState(false);

    const handleTabChange = (key: string) => {
        setIsLoading(true);
        setActiveTab(key);
        
        // Simulate loading time of 500ms
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };

    const items = [
        {
            key: '1',
            label: 'Prima Guesthouse 1',
            children: (
                <div key="prima1" className="tab-content">
                    {isLoading ? (
                        <div className="spinner-container">
                            <Spin size="large" />
                        </div>
                    ) : (
                        <CarouselComponent images={apartment1Images} title="Prima Guesthouse 1" />
                    )}
                </div>
            ),
        },
        {
            key: '2',
            label: 'Prima Guesthouse 2',
            children: (
                <div key="prima2" className="tab-content">
                    {isLoading ? (
                        <div className="spinner-container">
                            <Spin size="large" />
                        </div>
                    ) : (
                        <CarouselComponent images={apartment2Images} title="Prima Guesthouse 2" />
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="apartment-carousels-container">
            <Tabs
                activeKey={activeTab}
                items={items}
                onChange={handleTabChange}
                centered
                destroyInactiveTabPane={false}
            />
        </div>
    );
};

export default ApartmentCarousels; 