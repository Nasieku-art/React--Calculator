import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = new Function(`return ${input}`)();
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  const btnBase =
    'bg-[#333333] hover:bg-[#444444] active:scale-95 text-white text-xl py-4 rounded-[10px] cursor-pointer transition';
  const btnControl =
    'bg-[#a5a5a5] hover:bg-[#bfbfbf] active:scale-95 text-[#121212] font-semibold text-xl py-4 rounded-[10px] cursor-pointer transition';
  const btnOperator =
    'bg-[#ff9f0a] hover:bg-[#ffb340] active:scale-95 text-white font-semibold text-xl py-4 rounded-[10px] cursor-pointer transition';

  return (
    <div className="min-h-screen bg-[#a14242] flex justify-center items-center p-4">
      <div className="bg-[#1d8082] p-5 rounded-2xl shadow-2xl w-80">
        <div className="bg-[#17a3b203] text-white text-4xl text-right p-5 rounded-[10px] mb-5 overflow-x-auto min-h-[85px]">
          {input || '0'}
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button className={`${btnControl} col-span-2`} onClick={handleClear}>
            AC
          </button>
          <button className={btnControl} onClick={handleDelete}>
            DEL
          </button>
          <button className={btnOperator} onClick={() => handleClick('/')}>
            ÷
          </button>

          <button className={btnBase} onClick={() => handleClick('7')}>
            7
          </button>
          <button className={btnBase} onClick={() => handleClick('8')}>
            8
          </button>
          <button className={btnBase} onClick={() => handleClick('9')}>
            9
          </button>
          <button className={btnOperator} onClick={() => handleClick('*')}>
            ×
          </button>

          <button className={btnBase} onClick={() => handleClick('4')}>
            4
          </button>
          <button className={btnBase} onClick={() => handleClick('5')}>
            5
          </button>
          <button className={btnBase} onClick={() => handleClick('6')}>
            6
          </button>
          <button className={btnOperator} onClick={() => handleClick('-')}>
            −
          </button>

          <button className={btnBase} onClick={() => handleClick('1')}>
            1
          </button>
          <button className={btnBase} onClick={() => handleClick('2')}>
            2
          </button>
          <button className={btnBase} onClick={() => handleClick('3')}>
            3
          </button>
          <button className={btnOperator} onClick={() => handleClick('+')}>
            +
          </button>

          <button className={`${btnBase} col-span-2`} onClick={() => handleClick('0')}>
            0
          </button>
          <button className={btnBase} onClick={() => handleClick('.')}>
            .
          </button>
          <button
            className="bg-[#39d25f] hover:bg-[#4cd964] active:scale-95 text-[#121212] font-semibold text-xl py-4 rounded-[10px] cursor-pointer transition"
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}