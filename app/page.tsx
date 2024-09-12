import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:bg-slate-500 sm:bg-transparent pt-20 pb-20 ">
      <div className="rounded-xl w-1/2  mx-auto bg-white p-10">
        <Image
          src="/images/image-omelette.jpeg"
          alt="omelette"
          layout="responsive"
          width={800}
          height={400}
          className="rounded-lg inline-flex justify-center mb-8"
        />
        <h1 className="text-4xl  font-bold mb-6">Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-pink-50 mt-10">
          <h3 className="font-semibold text-2xl text-rose-800 mb-4 ml-4">
            Preparation time
          </h3>
          <ul className="list-disc leading-loose">
            <li className="ml-12">
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li className="ml-12">
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li className="ml-12">
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-rose-800 mt-10">
            Ingredients
          </h2>
          <ul className="list-disc leading-loose mt-4 ml-8">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, </li>
            <li>cooked meats, herbs</li>
          </ul>
        </div>
        <hr className="border-b-slate-500" />

        <div className="mt-10">
          <h1 className="text-4xl font-semibold text-rose-800">Instructions</h1>
          <ol className="list-decimal  leading-loose ml-8 mt-4">
            <li>
              <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan</strong>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette</strong>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional)</strong>: When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong>: As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
              if needed.
            </li>
          </ol>
        </div>
        <hr className="border-b-slate-500" />
        <div className="mt-10">
          <h1 className="text-4xl font-semibold text-rose-800 mb-4">
            Nutrition
          </h1>
          <p className="mb-4">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="table-auto w-full text-left mt-4">
            <tbody className="space-y-2">
              <tr className="flex justify-between border-b border-slate-500">
                <td className="font-medium w-1/2">Calories</td>
                <td className="text-rose-800 font-semibold w-1/2 text-right">
                  277kcal
                </td>
              </tr>
              <tr className="flex justify-between border-b border-slate-500">
                <td className="font-medium w-1/2">Carbs</td>
                <td className="text-rose-800 font-semibold w-1/2 text-right">
                  0g
                </td>
              </tr>
              <tr className="flex justify-between border-b border-slate-500">
                <td className="font-medium w-1/2">Protein</td>
                <td className="text-rose-800 font-semibold w-1/2 text-right">
                  20g
                </td>
              </tr>
              <tr className="flex justify-between border-b border-slate-500">
                <td className="font-medium w-1/2">Fat</td>
                <td className="text-rose-800 font-semibold w-1/2 text-right">
                  22g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
