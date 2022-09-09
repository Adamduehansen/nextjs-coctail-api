import { useState } from 'react';

interface Ingredient {
  text: string;
  measure: string;
}

interface Props {
  ingredients: Ingredient[];
}

function IngredientsList({ ingredients }: Props) {
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setAmount((current) => current + 1)}>+</button>
        <button onClick={() => setAmount((current) => current - 1)}>-</button>
      </div>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              {amount} x {ingredient.text} ({ingredient.measure})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default IngredientsList;
