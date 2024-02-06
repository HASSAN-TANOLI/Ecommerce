import React from "react";
import { useProductContext } from "../../context/ProductContext";

const Cart = () => {
  const { cart } = useProductContext();
  console.log(cart);
  return (
    <div className="flex flex-col justify-center p-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-10/12 text-left text-sm font-light border border-blue-100 my-0 mx-auto">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Remove Item
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  <tr
                    key={index}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.quantity}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.price * quantity}
                    </td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
