'use client';
import { useState, useRef, useMemo } from 'react';

const TaskOne: React.FC = () => {
  const valeOneRef = useRef<HTMLInputElement>(null);
  const valueTwoRef = useRef<HTMLInputElement>(null);
  const [total, setTotal] = useState<number | null>(null);

  const showResult = () => {
    console.log('test');  
    const num1 = valeOneRef.current ? parseInt(valeOneRef.current.value) : 0;
    const num2 = valueTwoRef.current ? parseInt(valueTwoRef.current.value) : 0;
    setTotal(num1 + num2);
    if (valeOneRef.current && valueTwoRef.current ) {
      valeOneRef.current.value = '';
      valueTwoRef.current.value = '';
    }
  };

  const memoizedShowResult = useMemo(() => showResult, []);

  return (
    <>
        <div className="flex items-center justify-center">
      <div className="max-w-md w-full card p-8 rounded-lg shadow-md mt-28">
        <h2 className="text-xl font-semibold mb-4">Add Two Numbers</h2>
        <div className="mb-4">
          <input ref={valeOneRef} type="number" required className="w-full border rounded-md px-3 py-2" placeholder="Enter First Number" />
        </div>
        <div className="mb-4">
          <input ref={valueTwoRef} type="number" required className="w-full border rounded-md px-3 py-2" placeholder="Enter Second Number" />
        </div>
        <button onClick={memoizedShowResult} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Add</button>
        <p className="mt-4">Total: {total !== null && <span>{total}</span>}</p>
      </div>
    </div>
    </>
  );
};

export default TaskOne;
