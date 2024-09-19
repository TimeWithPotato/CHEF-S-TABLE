import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Tr1 from "../Tr1/Tr1";
import Tr2 from "../Tr2/Tr2";
import './Toast.css'; // Assuming your CSS is here

const Main = () => {
  const [wantToCooks, setWantToCook] = useState([]);
  const [preparings, setPreparing] = useState([]);
  const [tot_prep, setTotPrep] = useState(0);
  const [tot_cal, setTotCal] = useState(0);

  const HandleForPreparing = (card) => {
    const newWantToCooks = wantToCooks.filter(
      (wantToCook) => wantToCook.recipe_id !== card.recipe_id
    );
    setWantToCook(newWantToCooks);
    setPreparing((prevPreparing) => [...prevPreparing, card]);
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    const container = document.getElementById('toast-container');
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        container.removeChild(toast);
      }, 300);
    }, 3000);
  };

  const HandleForWantToCook = (card) => {
    const isAlreadyInList = wantToCooks.some(
      (wantToCook) => wantToCook.recipe_id === card.recipe_id
    );

    if (isAlreadyInList) {
      showToast("This recipe is already in the 'Want to cook' list!");
    } else {
      setWantToCook((prevWantToCook) => [...prevWantToCook, card]);
    }
  };

  useEffect(() => {
    const totalPrepTime = preparings.reduce((acc, item) => {
      const time = parseInt(item.preparing_time, 10);
      return acc + (isNaN(time) ? 0 : time);
    }, 0);

    const totalCalories = preparings.reduce((acc, item) => {
      const calories = parseInt(item.calories, 10);
      return acc + (isNaN(calories) ? 0 : calories);
    }, 0);

    setTotPrep(totalPrepTime);
    setTotCal(totalCalories);
  }, [preparings]);

  return (
    <>
      <div id="toast-container"></div>
      <div className="ml-40 mr-40 my-5">
        <h1 className="flex justify-center text-4xl font-semibold">
          Our Recipes
        </h1>
        <p className="text-base mt-3 font-normal">
          Welcome to our collection of mouthwatering recipes, where every dish
          is carefully curated to bring you the perfect balance of flavor,
          nutrition, and simplicity. Whether you are a seasoned home cook or
          just getting started in the kitchen, our recipes are designed to suit
          every skill level and dietary preference.
        </p>
      </div>

      <section className="flex justify-center -space-x-14">
        <div className="flex-1 max-w-5xl">
          <Cards HandleForWantToCook={HandleForWantToCook} />
        </div>

        <div className="flex-1 max-w-sm">
          <div className="shadow-lg">
            <caption className="block font-semibold text-base">
              <h1 className="inline-block pr-3 mb-2">Want to cook:</h1>
              {wantToCooks.length}
              <hr />
            </caption>
            <table className="w-full table-auto border-separate border-spacing-y-5 px-4 my-10">
              <thead className="text-neutral-400 tex-xs font-medium text-center">
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </thead>
              <tbody>
                {wantToCooks.map((wantToCook, idx) => (
                  <Tr1
                    className="m-11"
                    key={idx}
                    idx={idx}
                    HandleForPreparing={HandleForPreparing}
                    wantToCook={wantToCook}
                  />
                ))}
              </tbody>
            </table>

            <caption className="block font-semibold text-base">
              <h1 className="inline-block pr-3 mb-2">
                Currently cooking: {preparings.length}
              </h1>
            </caption>
            <hr />
            <table className="w-full table-auto border-separate border-spacing-y-5 px-4">
              <thead className="text-neutral-400 tex-xs font-medium text-center">
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </thead>
              <tbody>
                {preparings.map((preparing, idx) => (
                  <Tr2 key={idx} idx={idx} preparing={preparing} />
                ))}
              </tbody>
            </table>
            <div className="ml-5 text-center font-medium text-base">
              <h2>Total Time = {tot_prep} min</h2>
              <h2>Total Calories = {tot_cal} calories</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
