import React from 'react';
import { Plus, Minus } from 'lucide-react';
interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minQuantity?: number;
  maxQuantity?: number;
}
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  minQuantity = 1,
  maxQuantity = 10
}) => {
  return <div className="flex items-center border border-gray-300 rounded-md w-fit">
      <button onClick={onDecrease} disabled={quantity <= minQuantity} className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Decrease quantity">
        <Minus size={16} />
      </button>
      <span className="px-3 py-1 font-medium w-10 text-center">{quantity}</span>
      <button onClick={onIncrease} disabled={quantity >= maxQuantity} className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Increase quantity">
        <Plus size={16} />
      </button>
    </div>;
};