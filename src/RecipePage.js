// RecipePage.js
import React from 'react';

const RecipePage = ({ recipes, renderStars }) => { 
  
  return (
<div className="recipe-page">
<h2> Recipes </h2>

{recipes.length > 0 ? (
  <div className="recipes-grid">
    {recipes.map((recipe, index) => (
      <div key={index} className="recipe-card">
        <div className="image-container">
          <img
            src={recipe.image || "https://via.placeholder.com/150"}
            alt={recipe.title}
            className="recipe-image"
          />
        </div>
        <div className="recipe-rating">
          {renderStars(recipe.rating)}
        </div>

        <h3>{recipe.title}</h3>

        <div className="recipe-categories">
          {recipe.categories.slice(0, 3).map((category, idx) => (
            <span key={idx} className="category">
              <button className="cta">{category}</button>
              {idx < 2 && <span className="separator"> • </span>}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
) : (
  <p>No recipes available. Please ensure you have selected enough ingredients.</p>
)}
</div>
);
};


export default RecipePage;