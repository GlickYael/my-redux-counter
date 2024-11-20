"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function ShowCounter() {
    const count = useSelector((state: RootState) => state.counter.value);

    return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Current Counter Value: {count}</h1>
            </div>
    );
}
