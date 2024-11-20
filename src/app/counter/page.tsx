"use client"
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/store/counterSlice';
import { RootState, AppDispatch } from '@/store/store';

export default function Counter() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>
  );
}