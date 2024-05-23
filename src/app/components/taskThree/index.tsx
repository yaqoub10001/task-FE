'use client';
import { useState } from 'react';
import { twoSum } from '@/app/utils/towSum';

const TaskThree: React.FC = () => {

    const [numbers, setNumbers] = useState<string>('');
    const [target, setTarget] = useState<number>(0);
    const [result, setResult] = useState<number[] | null>(null);
    const [error, setError] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setResult(null);
  
      try {
        const numbersArray = numbers.split(',').map(Number);
        const result = twoSum(numbersArray, target);
        setResult(result);
      } catch (err) {
        setError((err as Error).message);
      }
    };
  
    return (
    <>
     <div className="flex items-center justify-center">
       <div className="max-w-md w-full card p-8 rounded-lg shadow-md mt-28">
         <h2 className="text-xl font-semibold mb-4">Two Sum II</h2>
         <form onSubmit={handleSubmit}>
         <div className="mb-4">
         <label>Numbers (comma separated):</label>
            <input
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-black" 
              required
            />
         </div>
         <div className="mb-4">
         <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2 text-black" 
              required
            />
         </div>
         <button  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors" type="submit">Find Indices</button>
         {result && (
          <div>
            <h2>Result</h2>
            <p>Indices: [{result[0]}, {result[1]}]</p>
          </div>
        )}
        {error && (
          <div>
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        )}
         </form>
       </div>
      
     </div>
     <div className="flex items-center justify-center mt-12">
       <div className='card p-8 rounded-lg shadow-md' style={{'width': '100% !important', 'height': 'auto !important'}}>
      <h1>TypeScript Code</h1>
      <pre>
        <code>
          {`export const twoSum = (numbers: number[], target: number): number[] => {
    let left = 0;
    let right = numbers.length - 1;
  
    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    throw new Error('No solution found');
};`}
        </code>
      </pre>
    </div>
     </div> 
    </>
      
    );
}
export default TaskThree;